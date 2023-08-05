# Welcome to flight search service

## Project Setup
- clone the project on your local machine
- Execute `npm install` on the same path as of your directory of the download project
- Create a `.env` file in the root directory and add the following env variable
	- PORT=3000
-Inside the `src/config` folder create a new file `config.json` and add the following code
```
{
  "development": {
    "username": <YOUR_MySql_DB_USERNAME>,
    "password": <YOUR_MySql_BD_PASSWORD>,
    "database": "flight_search_DB",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
```

