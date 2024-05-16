import datetime
from sqlalchemy.orm import mapped_column, Mapped, relationship
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy import ARRAY, DateTime, ForeignKey, MetaData, String
from sqlalchemy.sql import func


metadata_schema = MetaData(schema="bookclub")

BookClubBase = declarative_base(metadata=metadata_schema)

class Book(BookClubBase):
    __tablename__ = 'books'

    book_id: Mapped[int] = mapped_column(primary_key=True, autoincrement=True)
    title: Mapped[str]
    author: Mapped[str]
    link: Mapped[str]
    tags: Mapped[list[str]] = mapped_column(ARRAY(String))
    cover_image: Mapped[str]
    start_date: Mapped[datetime.datetime] = mapped_column(DateTime(timezone=True))
    end_date: Mapped[datetime.datetime] = mapped_column(DateTime(timezone=True))


class Comment(BookClubBase):
    __tablename__ = "comments"

    comment_id: Mapped[str] = mapped_column(primary_key=True)
    thread_id: Mapped[int] = mapped_column(ForeignKey("threads.thread_id"))
    created_at: Mapped[datetime.datetime] = mapped_column(DateTime(timezone=True), server_default=func.now())
    content: Mapped[str]
    username: Mapped[str]
    parent_comment_id: Mapped[str] = mapped_column(ForeignKey("comments.comment_id"))
    thread: Mapped["Thread"] = relationship("Thread", back_populates="comments")
    parent_comment: Mapped["Comment"] = relationship("Comment", remote_side=[comment_id])
    reactions: Mapped[list["CommentReaction"]] = relationship("CommentReaction", back_populates="comment")


class Thread(BookClubBase):
    __tablename__ = 'threads'

    thread_id: Mapped[int] = mapped_column(primary_key=True, autoincrement=True)
    book_id: Mapped[int] = mapped_column(ForeignKey("books.book_id"))
    title: Mapped[str]
    description: Mapped[str] = mapped_column(nullable=True)
    last_comment_id: Mapped[str] = mapped_column(nullable=True)
    comments: Mapped[list[Comment]] = relationship("Comment", back_populates="thread")


class ThreadParticipant(BookClubBase):
    __tablename__ = "thread_participants"

    thread_id: Mapped[str] = mapped_column(ForeignKey("threads.thread_id"), primary_key=True)
    username: Mapped[str]


class CommentReadState(BookClubBase):
    __tablename__ = "comment_read_state"

    comment_id: Mapped[str] = mapped_column(ForeignKey("comments.comment_id"), primary_key=True)
    username: Mapped[str]
    read_date: Mapped[datetime.datetime] = mapped_column(DateTime(timezone=True), server_default=func.now())


class CommentReaction(BookClubBase):
    __tablename__ = "comment_reactions"

    comment_id: Mapped[str] = mapped_column(ForeignKey("comments.comment_id"), primary_key=True)
    reaction_id: Mapped[str]
    reaction: Mapped[int]
    username: Mapped[str]
    comment: Mapped["Comment"] = relationship("Comment", back_populates="reactions")


class Review(BookClubBase):
    __tablename__ = "reviews"

    review_id: Mapped[str] = mapped_column(primary_key=True)
    book_id: Mapped[int] = mapped_column(ForeignKey("books.book_id"))
    comment_id: Mapped[str] = mapped_column(ForeignKey("comments.comment_id"))
    username: Mapped[str]
    rating: Mapped[float]
    content: Mapped[str] = mapped_column(nullable=True)
