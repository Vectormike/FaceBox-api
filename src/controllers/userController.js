import knex from 'knex';
// import debug from 'debug';

// const deb = debug('app:app.register');

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
    const { name, email } = req.body;

    // register
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
      })
      .catch(_err => res.status(400).json('Unable to register'));
  }

  static login(req, res) {
    const { name, email } = req.body;

    //login
    //database query
    //check if user exist, throw no user
    //If user exist, allow...
  }
}

export default userController;
