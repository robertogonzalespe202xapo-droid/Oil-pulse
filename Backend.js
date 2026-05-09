import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors());

const API_KEY = process.env.OIL_API_KEY;

app.get('/api/oil', async (req, res) => {

    try {

        const response = await fetch(
            'https://api.oilpriceapi.com/v1/prices/latest',
            {
                headers: {
                    Authorization: `Token ${API_KEY}`
                }
            }
        );

        const data = await response.json();

        res.json(data);

    } catch (err) {

        res.status(500).json({
            error: 'Error obteniendo datos'
        });
    }
});

app.listen(3000, () => {
    console.log('Servidor activo');
});