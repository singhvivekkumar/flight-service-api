# Welcome to flight search service

## Project Setup
- clone the project on your local machine
- Execute `npm install` on the same path as of your directory of the download project
- Create a `.env` file in the root directory and add the following env variable
	- PORT=3000
- Inside the `src/config` folder create a new file `config.json` and add the following code
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
- Once you have added your db config as listed above, go to the src folder from your terminal and execute 
  `npm sequelize db:create`

## Database Design
  - Airplane Table
    1. id
    2. model_Number
    3. capacity
    4. created_date
    5. updated_date

  - Flight Table
    1. id
    2. src_airport_id
    3. dest_airport_id
    4. depature_date
    5. arrival_date
    6. depature_time
    7. arrival_time

  - Airport Table
    1. id
    2. name
    3. city_id
    4. address

  - City Table
    1. id
    2. name

### Relationship between tables 
- Airplane and flight = 1:n
- City and airport = 1:n
- Airport and flight = 1:n

### Creation of migration and model (sequelize cli)
- sequelize cli write code for us by offically sequelize.
- create a new model means create javascript classes futher we can make changes in js class.
  `npx sequelize model:generate --name City --attributes name:string`
- migrate a model means sync with database 
- migration meaning commit change with database.
  `npx sequelize db:migrate`
- for more details to sequelize site or sequlize cli https://www.npmjs.com/package/sequelize-cli.
- if you want to rollback
  `npx sequelize db:seed:undo:all`

- Through the migration we can set constraint on database level.

- Through the model we can set constraint on javascript level.
  means going to db for create a new tuple then it checks all the constraint to javascript level. if migration and model constraint is not same then database give error to that javascript function. hence we should to maintain at both level(js or db) constraint same.

- how can we interact with models
  all the interaction should happen to the model through repositry layer.
- how will we get access to models.
  