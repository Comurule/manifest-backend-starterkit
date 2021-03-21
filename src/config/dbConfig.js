const config = {  
  "development": {
    "username": "postgres",
    "password": "mystatus",
    "database": "testDB",
    "host": "127.0.0.1",
    "port": 5432,
    "dialect": "postgres"
  },
  "test": {
    "username": "postgres",
    "password": "mystatus",
    "database": "testDB",
    "host": "127.0.0.1",
    "port": 5432,
    "dialect": "postgres"
  },
  "production": {
    "database": process.env.DB_DATABASE,
    "username": process.env.DB_USERNAME,
    "password": process.env.DB_PASSWORD,
    "dialect": "postgres",
    "port": Number(process.env.DB_PORT),
    "host": process.env.DB_HOST
  }
};

module.exports = config;
