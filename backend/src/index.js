
import express from 'express';
import { connectToDB } from './database';
import { homeHandler } from './crud.routes'


const app = express();

const port = 5000;

connectToDB();

// Routes

app.use('/', homeHandler);

app.listen(port, () => {
    console.log(`Sever on port ${port}`);
})