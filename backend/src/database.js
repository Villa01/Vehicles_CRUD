
import mysql from 'mysql';

import 'dotenv/config'

// Connection to MySQL
const connection = mysql.createConnection(
    {
        host: process.env.HOST,
        user: process.env.USER,
        password: process.env.PASSWORD,
        database: process.env.DATABASE
    }
);

export default connection;