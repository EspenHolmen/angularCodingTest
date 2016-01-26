var Users = require('./models/users');

function getUsers(res) {
    Users.find(function (err, users) {

        if (err) {
            res.send(err)
        }
        else {
            res.json(users); // return all todos in JSON format
        }
    });
};

module.exports = function (app) {
    app.post('/api/users', function (req, res) {
        Users.create({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            age: req.body.age,
            active: req.body.active,
            added: req.body.added
        }, function (err, todo) {
            if (err) {
                res.send(err)
            }
            else {
                getUsers(res);
            }
        });

    });

    app.delete('/api/users/:user_id', function (req, res) {
        Users.remove({
            _id: req.params.user_id
        }, function (err, user) {
            if (err) {
                res.send(err)
            }
            else {
                getUsers(res);
            }
        });
    });

    app.get('/api/users/:user_id', function (req, res) {
        console.log('jere')
        Users.findOne({
            _id: req.params.user_id
        }, function (err, user) {
            if (err) {
                res.send(err)
            }
            else {
                res.json(user)
            }
        });
    });


    app.put('/api/users/:user_id', function (req, res) {
        Users.findByIdAndUpdate(req.params.user_id,
            {
                $set: {
                    firstName: req.body.firstName,
                    lastName: req.body.lastName,
                    email: req.body.email,
                    age: req.body.age,
                    active: req.body.active,
                    added: req.body.added
                }
            }, null,
            function (err, user) {
                if (err) {
                    res.send(err);
                }
                else {
                    res.json(user)
                }
            });
    });

    app.get('/api/users', function (req, res) {
        getUsers(res);
    });


    // application -------------------------------------------------------------
    app.get('/', function (req, res) {
        res.sendfile('./public/index.html'); // load the single view file (angular will handle the page changes on the front-end)
    });

    app.get('index.html', function (req, res) {
        res.sendfile('./public/index.html'); // load the single view file (angular will handle the page changes on the front-end)
    });

    app.get('*', function (req, res) {
        res.status(404).send('<h1>404 - File not found</h1>Check your paths');
    });

};
