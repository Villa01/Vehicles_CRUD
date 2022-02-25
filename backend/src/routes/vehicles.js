
import express from 'express';
import connection from '../database.js'


const router = express.Router();

router.get('/', (req, res) => {
    res.json('Welcome to Vehicles');
});

router.post('/add', async (req, res) => {
    const { placa, modelo, serie, color, marca } = { ...req.body };

    try {
        connection.connect(err => {

            if (err) throw err;
            console.log("Connected!");
        });
        const query = `INSERT INTO vehiculos ( placa, modelo, marca, serie, color ) VALUES ( '${placa}', '${modelo}', '${marca}', '${serie}', '${color}' );`;
        console.log(query);
        connection.query(query, (error, results) => {
            if (error) {
                return console.error(error.message);
            };

            console.log(results);
        });

        res.status(200);
        res.send('Received')
    } catch (error) {
        console.error(error)
        res.status(500)
        res.send('Not created')
    } finally {
        connection.end();
    }

});

router.get('/', (req, res) => {
    res.status(501);
});

export default router;