require("dotenv").config();

const { Sequelize } = require('sequelize');

const connectionString = process.env.CONNECTION_STRING;
const enableSSL = process.env.DB_USE_SSL === "false" ? false : true;
const sequelize = new Sequelize( connectionString, {
  dialect: 'postgres',
  ssl: enableSSL, 
  dialectOptions: {
    ssl: enableSSL && {
	  require: enableSSL, // This will help you. But you will see nwe error
	  rejectUnauthorized: false
    }
  }
});

sequelize.sync({force: false})

const testConnection = async (sequelize) => {
	try {
	  await sequelize.authenticate();
	  console.log('Connection has been established successfully!!!\n', sequelize.models );
	} catch (error) {
	  console.error('Unable to connect to the database:', error);
	}	
}

testConnection(sequelize);

module.exports =  sequelize;