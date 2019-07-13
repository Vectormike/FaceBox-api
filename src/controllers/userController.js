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

class userController{
        static register(req, res) {
            const { name, email, password} = req.body;
            db('users').insert({
                name: name,
                email: email,
                joined: new Date()
            })
            .then(user => {
                res.status(201).json({
                    message: 'User Created',
                    user: {
                        name: user.name,
                        email: user.email
                }      
            })
        })
    }
}

export default userController;