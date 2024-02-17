import logging
import re
import sys


if __name__ == "__main__":
    args = sys.argv
    title = args[1]

    slug = "-".join(re.sub(r'[^\w\s]', '', title).lower().split(" "))

    print(slug)