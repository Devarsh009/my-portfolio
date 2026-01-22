from .celery_app import celery_app
from .db import SessionLocal
from .models import Document

@celery_app.task(name="app.tasks.process_document")
def process_document(title: str, content: str):
    session = SessionLocal()
    try:
        doc = Document(title=title, content=content)
        session.add(doc)
        session.commit()
        session.refresh(doc)
        return {"id": doc.id, "title": doc.title}
    finally:
        session.close()
