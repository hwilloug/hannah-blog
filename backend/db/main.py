from sqlalchemy import create_engine
from config import config


def connect():
    """ Connect to the PostgreSQL database server """

    try:
        # read connection params
        params = config()

        conn_string = f"postgresql://{params['username']}:{params['password']}@{params['hostname']}:{params['port']}/{params['database']}"

        # connect to PostgreSQL server
        print('Connecting...')
        engine = create_engine(conn_string)

        connection = engine.connect()

        return connection
    except:
        return print("Connection failed.")

# for debug
if __name__ == '__main__':
    connection = connect()
    result = connection.execute("select version();")
    for row in result:
        print(row)
    connection.close()