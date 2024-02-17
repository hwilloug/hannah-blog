import logging
import re
import sys


if __name__ == "__main__":
    args = sys.argv
    title = args[1]
    subtitle = args[2]
    img = args[3]
    img_alt = args[4]
    category = args[5]
    subcategory = args[6]
    slug = args[7]

    subcategory = subcategory.split(", ")

    sql = f"INSERT INTO articles (title, subtitle, img, img_alt, category, subcategory, slug) VALUES ('{title}', '{subtitle}', '{img}', '{img_alt}', '{category}', ARRAY {subcategory}, '{slug}')"

    print(sql)