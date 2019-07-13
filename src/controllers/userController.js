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

export class userController{
    static register()
        db('users').insert({
            name: req.body.name,
            email: req.body.email,
            joined: new Date()
        })
        .then(user => {
            res.status(200).json({
                message: 'User Created',
                user: {
                    name: user.name,
                    email: user.email
            }
            
        })

    deb(req.body)
    })
}

}

export default userController;