import datetime
from sqlalchemy.orm import DeclarativeBase, Mapped, mapped_column
from sqlalchemy import ARRAY, DateTime, String
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
    subcategory: Mapped[list[str]] = mapped_column(ARRAY(String))
    created_at: Mapped[datetime.datetime] = mapped_column(DateTime(timezone=True), server_default=func.now())
    updated_at:  Mapped[datetime.datetime] = mapped_column(DateTime(timezone=True), server_default=func.now())