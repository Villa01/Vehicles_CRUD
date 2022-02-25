
import express from 'express';
import morgan from 'morgan';
import router from './routes/vehicles.js';

 // Settings 
const app = express();

app.set('port', process.env.PORT || 5000);

// Middlewares
app.use(morgan('dev'));
app.use(express.json());

// Routes
app.use( '/vehicles', router );


app.listen(app.get('port'), () => {
    console.log(`Sever on port ${app.get('port')}`);
})