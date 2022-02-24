
import mysql from 'mysql';


require('dotenv').config();


// Connection to MySQL
let connection = mysql.createConnection(
    {
        host : process.env.host, 
        user: process.env.user,
        password: process.env.password
    }
);

export const connectToDB = () => {
    connection.connect( (err) => {
        if(err) throw err;
        console.log('Connected to MySQL');
    })
}
