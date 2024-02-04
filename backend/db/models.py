from sqlalchemy.orm import DeclarativeBase, Mapped, mapped_column
from sqlalchemy import DateTime
from sqlalchemy.sql import func

class Base(DeclarativeBase):
    pass

class Article(Base):
    __tablename__ = "articles"

    slug: Mapped[str] = mapped_column(primary_key=True)
    title: Mapped[str]
    subtitle: Mapped[str]
    img: Mapped[str]
    img_alt: Mapped[str]
    category: Mapped[str]
    subcategory: Mapped[list[str]]
    created_at: Mapped[DateTime(timezone=True)] = mapped_column(default=func.now())
    updated_at:  Mapped[DateTime(timezone=True)] = mapped_column(default=func.now())