# Express-React Scaffold

node v-12.18.4

### This is a basic Node-React Application Scaffold for streamlining project setup.

#### Env setup

- yarn install

```
CONNECTION_STRING=postgres://postgres:password@host:port/db_name
DB_USE_SSL=false
secretOrKey=1234xxxx
DB_HOST=host
DB_PORT=port
DB_NAME=db_name
DB_PASSWORD=password
DB_USERNAME=username
```

#### Sequelize db setup

##### Contains User model with basic JWT authentication strategy

###### Set up instructions:

- Run migrations: `npx sequelize-cli db:migrate`

- Run seeders: `npx sequelize-cli db:seed:all`