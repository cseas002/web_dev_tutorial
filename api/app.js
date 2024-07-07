const express = require('express');

const { Pool } = require('pg');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

const pool = new Pool({
    user: 'postgres',
    password: 'postgres',
    database: 'postgres',
    host: 'database',
    port: 5432
})

app.use(express.json());
app.use(cors());

app.get('/api/items', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM public."Items"');
        res.json(result.rows);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Error');
    }
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
})