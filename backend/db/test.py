import psycopg2

# Replace these with your actual connection parameters
params = {
    "host": "hannahshobbyroom.cluster-cvwpg9lwovqd.us-east-1.rds.amazonaws.com",
    "port": "5432",
    "user": "postgres",
    "password": "Test123!",
    "database": "hannahshobbyroom",
    "connect_timeout": 200  # Adjust the timeout as needed
}

conn = psycopg2.connect(**params)
