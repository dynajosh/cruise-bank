import {Sequelize} from 'sequelize';
import dotenv from 'dotenv';

dotenv.config()


const DB_NAME = process.env.DATABASE_NAME as string
const DB_PASSWORD = process.env.DATABASE_PASSWORD as string
const DB_PORT = process.env.DATABASE_PORT as string
const DB_HOST = process.env.DATABASE_HOST as string
const DB_USER = process.env.DATABASE_USER as string


const sequelizeConnection = new Sequelize(
    DB_NAME,
    DB_USER,
    DB_PASSWORD
    ,
    {
        host: DB_HOST,
        dialect: 'postgres'
    }
)

export default sequelizeConnection;