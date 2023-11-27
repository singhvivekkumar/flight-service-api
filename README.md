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
  in this layer we write all the operation on database.

### seeders
  - What is seeders in backend folders and why we need it?
    seeding a database is a process in which an initial set of data is provided to a database when it is being installed.
  - How to create seeder files.
  -for more https://medium.com/@darrand37/migrations-and-seeding-made-easy-in-node-js-using-sequelize-80bd13620b45

  ```npx sequalize seed:generate --name add-airports```
  
  ```npx sequalize db:seed:all```


## Environment Setup:

### Prerequisites:

1. Clone the repository:

   ```shell
   git clone https://github.com/singhvivekkumar/api-gateway.git
   ```

2. Move to the backend folder:

   ```shell
   cd api-gateway
   ```

3. Install and set up Docker.

	```shell
   npm install
   ```

### Create Database

Create Database with the following command:

```shell
npx sequelize db:create
```

### Run Migrations:

Run database migrations with the following command:

```shell
npx sequelize db:migrate
```


### Create a `.env` file in the project's root directory.

The `.env` file should contain the following environment variables:

```shell
PORT=3001
```


### Start the Backend Server:

To start the backend server, run the following command:

```shell
npm start
```

Congratulations! Your backend is now running at http://localhost:3005/api/home.


# REST API

The REST API to the example app is described below.

## Get list of Things

### Request

`GET /thing/`

    curl -i -H 'Accept: application/json' http://localhost:7000/thing/

### Response

    HTTP/1.1 200 OK
    Date: Thu, 24 Feb 2011 12:36:30 GMT
    Status: 200 OK
    Connection: close
    Content-Type: application/json
    Content-Length: 2

    []

## Create a new Thing

### Request

`POST /thing/`

    curl -i -H 'Accept: application/json' -d 'name=Foo&status=new' http://localhost:7000/thing

### Response

    HTTP/1.1 201 Created
    Date: Thu, 24 Feb 2011 12:36:30 GMT
    Status: 201 Created
    Connection: close
    Content-Type: application/json
    Location: /thing/1
    Content-Length: 36

    {"id":1,"name":"Foo","status":"new"}

## Get a specific Thing

### Request

`GET /thing/id`