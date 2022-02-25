
import express from 'express';
import connection from '../database.js'


const router = express.Router();

router.post('/add', async (req, res) => {
    const { placa, modelo, serie, color, marca } = { ...req.body };

    try {
        connection.connect(err => {
            if (err) throw err;
            console.log("Connected!");
        });
        const query = `INSERT INTO vehiculos ( placa, modelo, marca, serie, color ) VALUES ( '${placa}', '${modelo}', '${marca}', '${serie}', '${color}' );`;
        connection.query(query, (error, results) => {
            if (error) {
                return console.error(error.message);
            };

            console.log(results);
        });

        res.status(201);
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
    try {
        connection.connect(err => {
            if (err) throw err;
            console.log("Connected!");
        });
        const query = `SELECT * FROM vehiculos;`;
        connection.query(query, (error, results) => {
            if (error) {
                return console.error(error.message);
            };
            res.json(results);
        });

        res.status(200);
    } catch (error) {
        console.error(error);
        res.status(404);
        res.send('Not found')
    } finally {
        connection.end();
    }
});


router.put('/:id', (req, res) => {
    res.status(501);
});

router.delete('/:id', ( req, res ) => {
    res.status(501);
})

export default router;