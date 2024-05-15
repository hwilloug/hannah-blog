import datetime
from sqlalchemy.orm import DeclarativeBase, Mapped, mapped_column, relationship
from sqlalchemy import ARRAY, DateTime, ForeignKey, String
from sqlalchemy.sql import func

"""
TODO:
    - Not required fields
"""

class BookClubBase(DeclarativeBase):
    pass

class Book(BookClubBase):
    __tablename__ = 'books'

    book_id: Mapped[str] = mapped_column(primary_key=True)
    author: Mapped[str]
    link: Mapped[str]
    tags: Mapped[list[str]] = mapped_column(ARRAY(String))
    cover_image: Mapped[str]


class Thread(BookClubBase):
    __tablename__ = 'threads'

    thread_id: Mapped[str] = mapped_column(primary_key=True)
    book_id: Mapped["Book"] = mapped_column(ForeignKey("books.book_id"))
    title: Mapped[str]
    description: Mapped[str]
    start_date: Mapped[datetime.datetime] = mapped_column(DateTime(timezone=True))
    end_date: Mapped[datetime.datetime] = mapped_column(DateTime(timezone=True))
    last_message_id: Mapped["Comment"] = mapped_column(ForeignKey("comments.comment_id"), nullable=True)
    comments: Mapped[list["Comment"]] = relationship()


class ThreadParticipant(BookClubBase):
    __tablename__ = "thread_participants"

    thread_id: Mapped["Thread"] = mapped_column(ForeignKey("threads.thread_id"))
    username: Mapped[str]


class Comment(BookClubBase):
    __tablename__ = "comments"

    comment_id: Mapped[str] = mapped_column(primary_key=True)
    thread_id: Mapped["Thread"] = mapped_column(ForeignKey("threads.thread_id"))
    created_at: Mapped[datetime.datetime] = mapped_column(DateTime(timezone=True), server_default=func.now())
    content: Mapped[str]
    username: Mapped[str]
    # TODO I think there's a way to signify that this is a parent of the same table
    parent_comment_id: Mapped["Comment"] = mapped_column(ForeignKey("comments.comment_id"))
    reactions: Mapped[list["CommentReaction"]] = relationship()


class CommentReadState(BookClubBase):
    __tablename__ = "comment_read_state"

    comment_id: Mapped["Comment"] = mapped_column(ForeignKey("comments.comment_id"))
    username: Mapped[str]
    read_date: Mapped[datetime.datetime] = mapped_column(DateTime(timezone=True), server_default=func.now())


class Reaction(BookClubBase):
    __tablename__ = "reactions"

    reaction_id: Mapped[str] = mapped_column(primary_key=True)
    image: Mapped[str]


class CommentReaction(BookClubBase):
    __tablename__ = "comment_reactions"

    comment_id: Mapped["Comment"] = mapped_column(ForeignKey("comments.comment_id"))
    reaction_id: Mapped["Reaction"] = mapped_column(ForeignKey("reactions.reaction_id"))
    username: Mapped[str]


class Review(BookClubBase):
    __tablename__ = "reviews"

    review_id: Mapped[str] = mapped_column(primary_key=True)
    book_id: Mapped["Book"] = mapped_column(ForeignKey("books.book_id"))
    comment_id: Mapped["Comment"] = mapped_column(ForeignKey("comments.comment_id"))
    username: Mapped[str]
    rating: Mapped[float]
    content: Mapped[str] = mapped_column(nullable=True)