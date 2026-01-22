from celery import Celery
import os

celery_app = Celery(
    "portfolio",
    broker=os.getenv("CELERY_BROKER_URL", "redis://localhost:6379/0"),
    backend=os.getenv("CELERY_BROKER_URL", "redis://localhost:6379/0"),
)

celery_app.conf.update(task_routes={"app.tasks.process_document": {"queue": "ingestion"}})
