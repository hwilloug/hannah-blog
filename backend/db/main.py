import logging
import re
import sys
from utils.operations import SqlAlchemyOperations
from models.models import Article

logger = logging.getLogger(__name__)


def bulk_insert(articles: list[Article]):
    op = SqlAlchemyOperations()
    op.bulk_insert(articles)

if __name__ == "__main__":
    args = sys.argv
    title = args[1]
    subtitle = args[2]
    img = args[3]
    img_alt = args[4]
    category = args[5]
    subcategory = args[6]

    subcategory = subcategory.split(", ")
    slug = "-".join(re.sub(r'[^\w\s]', '', title).lower().split(" "))

    sql = f"INSERT INTO articles (title, subtitle, img, img_alt, category, subcategory, slug) VALUES ('{title}', '{subtitle}', '{img}', '{img_alt}', '{category}', ARRAY {subcategory}, '{slug}')"

    print(sql)