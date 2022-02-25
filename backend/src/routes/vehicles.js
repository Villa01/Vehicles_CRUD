
import express from 'express';
import pool from '../database.js'


const router = express.Router();



router.post('/add', async (req, res) => {
    const { placa, modelo, serie, color, marca } = { ...req.body };

    try {
        const query = `INSERT INTO vehiculos ( placa, modelo, marca, serie, color ) VALUES ( '${placa}', '${modelo}', '${marca}', '${serie}', '${color}' );`;
        await pool.query(query);

        res.status(201);
        res.send('Received')
    } catch (error) {
        console.error(error)
        res.status(500)
        res.send('Not created')
    }
});

router.get('/', async (req, res) => {
    try {
        const query = `SELECT * FROM vehiculos;`;
        pool.query(query, ( err, data ) => {
            if ( err ) {
                console.error(err);
                res.status(404);
                res.send('Not found')
            } else {
                res.status(200);
                res.send(data)
            }
        });
    } catch (error) {
        console.error(error);
        res.status(404);
        res.send('Not found')
    }
});


router.put('/:placa', async (req, res) => {
    const { placa } = req.params;
    const { marca, modelo, serie, color } = req.body;
    const query = `UPDATE vehiculos SET placa = '${placa}', marca = '${marca}', modelo = '${modelo}', serie = '${serie}', color = '${color}'
    WHERE placa = '${placa}';`;
    await pool.query(query, ( err ) => {
        if ( err ) {
            console.error(err);
            res.status(404);
            res.send('Not found')
        } else {
            res.status(200);
            res.send({ placa, marca, modelo, serie, color });
        }
    });
});

router.delete('/:placa', async (req, res) => {
    const { placa } = req.params;
    console.log(placa)

    if (!placa) {
        res.status(404)
        return;
    }
    try {
        const query = `DELETE FROM vehiculos WHERE placa = '${placa}';`;
        await pool.query(query, err => {
            if (err) {
                res.status(404);
                res.send('Not found')
            } else {
                res.status(204);
                res.send('Deleted');
            }
        });
    } catch (error) {
        console.error(error);
        res.status(404);
        res.send('Not found')
    }

})

export default router;