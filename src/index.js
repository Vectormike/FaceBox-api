import express from 'express';
import index from '../src/routes/index';
import knex from 'knex';

const db = knex({
    client: 'pg',
    connection: {
        host : '127.0.0.1',
        user : 'facebox',
        password : '0000',
        database : 'facebox'
    }
});

db.select('*').from('users').then(data =>{
    console.log(data)
});

const app = express();


app.use('/', index);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}...`))