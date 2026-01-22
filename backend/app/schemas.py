from pydantic import BaseModel

class DocumentIn(BaseModel):
    title: str
    content: str

class QueryIn(BaseModel):
    question: str
    top_k: int = 3

class DocumentOut(BaseModel):
    id: int
    title: str
    content: str

    class Config:
        from_attributes = True
