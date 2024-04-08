import datetime
import uuid
from sqlalchemy.orm import DeclarativeBase, Mapped, mapped_column, relationship
from sqlalchemy import ARRAY, DateTime, ForeignKey, String
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
    likes: Mapped[int] = mapped_column(server_default="0")
    created_at: Mapped[datetime.datetime] = mapped_column(DateTime(timezone=True), server_default=func.now())
    updated_at:  Mapped[datetime.datetime] = mapped_column(DateTime(timezone=True), server_default=func.now())
    comments: Mapped[list["Comments"]] = relationship()


class Newsletter(Base):
    __tablename__ = "newsletter"

    email: Mapped[str] = mapped_column(primary_key=True)
    food: Mapped[bool] = mapped_column(server_default=str(True))
    gardening: Mapped[bool] = mapped_column(server_default=str(True))
    crafts: Mapped[bool] = mapped_column(server_default=str(True))
    coding: Mapped[bool] = mapped_column(server_default=str(True))
    books: Mapped[bool] = mapped_column(server_default=str(True))
    antiquing: Mapped[bool] = mapped_column(server_default=str(True))


class Comments(Base):
    __tablename__ = "comments"

    id: Mapped[uuid.UUID] = mapped_column(primary_key=True, default=uuid.uuid4())
    timestamp: Mapped[datetime.datetime] = mapped_column(DateTime(timezone=True), server_default=func.now())
    body: Mapped[str]
    username: Mapped[str]
    article_slug: Mapped["Article"] = mapped_column(ForeignKey("articles.slug"))