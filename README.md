/
  -src/   [all core logic here]
    index.js [server]
    models/
    controllers/
    middlewares/
    services/
    utils/
    config/
    repository/

  -test/   [later] [used for unit testing,not to be deployed]

  # Welcome To Flight services
  
  ## Project setup
  - clone the project on your local
  -Execute 'npm install' on the same path as of your root directory of the downloaded project.
  -Create a '.env' file in the root directory and add the following environment variable.
  -PORT=3000
  -Inside the config 'src/config' folder create a new file 'config.json' and then add the following piece of json

  ``````
  {
  "development": {
    "username": "<YOUR_DB_LOGIN_NAME>",
    "password": "<YOUR_DB_PASSWORD>",
    "database": "Flights_Search_db",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
  ``````