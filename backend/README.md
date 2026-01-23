# AI Demo Backend

FastAPI + Postgres + Redis + Celery demo service for a lightweight document retrieval workflow.

## Endpoints
- `GET /health`
- `POST /documents` to ingest a document
- `GET /documents` to list documents
- `POST /query` to retrieve relevant documents with TF IDF

## Run
Use docker-compose:
- `docker-compose up --build`

The API will be available at http://localhost:8000.
