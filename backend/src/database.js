import mysql from 'mysql';
import { promisify } from 'util'

import 'dotenv/config'

// Connection to MySQL
const pool = mysql.createPool({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE
});

pool.getConnection((err, connection) => {
    if(err) {
        console.log(err.message);
    }
    if (connection) {
        connection.release();
        console.log('Mysql connected')
    }
});

promisify(pool.query);

export default pool;