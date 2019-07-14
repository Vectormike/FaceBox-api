import knex from 'knex';
import debug from 'debug';

const deb = debug('app:app.register');

const database = knex({
  client: 'pg',
  connection: {
    host: '127.0.0.1',
    user: 'facebox',
    password: '0000',
    database: 'facebox',
  },
});

class userController {
  static register(req, res) {
    const { name, email, password } = req.body;

    // Check if user exists with email else create account
    database('users')
      .where({ email })
      .then(user => {
        if (user) {
          res.status(409).json({
            message: 'User exists',
            code: 409,
          });
        } else {
          database('users')
            .insert({
              name,
              email,
              joined: new Date(),
            })
            .then(user => {
              res.status(201).json({
                message: 'User Created',
                user: {
                  name: user.name,
                  email: user.email,
                },
              });
            });
        }
      });
  }
}

export default userController;
