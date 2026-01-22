from fastapi import FastAPI, Depends
from sqlalchemy.orm import Session
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity
import numpy as np
import os
import redis
import json

from .db import SessionLocal, engine
from .models import Base, Document
from .schemas import DocumentIn, QueryIn, DocumentOut
from .tasks import process_document

Base.metadata.create_all(bind=engine)

app = FastAPI(title="AI Demo API", version="1.0.0")

REDIS_URL = os.getenv("REDIS_URL", "redis://localhost:6379/0")
redis_client = redis.Redis.from_url(REDIS_URL, decode_responses=True)
USE_CELERY = os.getenv("USE_CELERY", "false").lower() == "true"


def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


@app.get("/health")
def health():
    return {"status": "ok"}


@app.post("/documents")
def ingest_document(payload: DocumentIn, db: Session = Depends(get_db)):
    if USE_CELERY:
        task = process_document.delay(payload.title, payload.content)
        return {"status": "queued", "task_id": task.id}

    doc = Document(title=payload.title, content=payload.content)
    db.add(doc)
    db.commit()
    db.refresh(doc)
    return doc


@app.get("/documents", response_model=list[DocumentOut])
def list_documents(db: Session = Depends(get_db)):
    return db.query(Document).order_by(Document.created_at.desc()).all()


@app.post("/query")
def query_documents(payload: QueryIn, db: Session = Depends(get_db)):
    cache_key = f"query:{payload.question}:{payload.top_k}"
    cached = redis_client.get(cache_key)
    if cached:
        return {"cached": True, "answers": json.loads(cached)}

    docs = db.query(Document).all()
    if not docs:
        return {"cached": False, "answers": []}

    corpus = [doc.content for doc in docs]
    vectorizer = TfidfVectorizer(stop_words="english")
    matrix = vectorizer.fit_transform(corpus)
    query_vec = vectorizer.transform([payload.question])
    scores = cosine_similarity(query_vec, matrix).flatten()
    top_indices = np.argsort(scores)[::-1][: payload.top_k]

    answers = [
        {
            "id": docs[idx].id,
            "title": docs[idx].title,
            "snippet": docs[idx].content[:240],
            "score": float(scores[idx]),
        }
        for idx in top_indices
        if scores[idx] > 0
    ]

    redis_client.setex(cache_key, 300, json.dumps(answers))
    return {"cached": False, "answers": answers}
