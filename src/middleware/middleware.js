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


class Middleware {
    authorize(req, res, next) {
        const {email, name, password} = req.body;
        db('users').insert({
            email: email,
            name: name,
            joined: new Date()
        })
        .then(res.json(database))
    }
}


export default Middleware;