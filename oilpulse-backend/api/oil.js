export default async function handler(req, res) {

    const API_KEY = process.env.OIL_API_KEY;

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

        res.status(200).json(data);

    } catch (err) {

        res.status(500).json({
            error: 'Error obteniendo datos'
        });
    }
}