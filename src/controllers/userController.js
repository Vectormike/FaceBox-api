import knex from 'knex';
import debug from 'debug';
const deb = debug('app:app.register')

const db = knex({
    client: 'pg',
    connection: {
        host : '127.0.0.1',
        user : 'facebox',
        password : '0000',
        database : 'facebox'
    }
});

export function register(req, res) {
    const {email, name} = req.body;
    deb(req.body)
        db('users').insert({
            email: email,
            name: name,
            joined: new Date()
        })
        .then(user => {
            res.status(200).json({
                message: 'User Created',
                user: {
                    email: user.email,
                    name: user.name
            }
        })
    })
}

