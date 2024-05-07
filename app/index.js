// index.js
const pool = require('./database/config');

// Ahora puedes usar `pool` para hacer consultas a la base de datos
pool.query('SELECT * FROM cliente', (err, res) => {
    if (err) {
        console.error('Error executing query', err.stack);
    } else {
        console.log(res.rows);
    }
});