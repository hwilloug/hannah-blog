from sqlalchemy import URL, Table, create_engine, insert
from models.models import Article
from utils.config import config
from sqlalchemy.orm import Session


class SqlAlchemyOperations:
    def __init__(self):
        params = config()

        url_object = URL.create(
          "postgresql",
          username=params.get("username"),
          password=params.get("password"),
          host=params.get("hostname"),
          port=params.get("port"),
          database=params.get("database")
        )

        self.engine = create_engine(url_object)
        self.session = Session(self.engine)

    def query_table(self, table: Table):
        return self.session.query(table)