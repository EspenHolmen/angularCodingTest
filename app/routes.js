var Users = require('./models/users');

function getUsers(res){
	Users.find(function(err, users) {

			if (err)
				res.send(err)

			res.json(users); // return all todos in JSON format
		});
};

module.exports = function(app) {
	app.get('/api/users', function(req, res) {
		getUsers(res);
	});

	app.post('/api/users', function(req, res) {
		Users.create({
			firstName : req.body.firstName,
			lastName : req.body.lastName,
			email : req.body.email,
			age : req.body.age,
			active : req.body.active,
			added : req.body.added
		}, function(err, todo) {
			if (err) {
				res.send(err);
			}

			getUsers(res);
		});

	});

	app.delete('/api/users/:user_id', function(req, res) {
		Users.remove({
			_id : req.params.user_id
		}, function(err, user) {
			if (err) {
				res.send(err);
			}

			getUsers(res);
		});
	});

	app.get('/api/users/:user_id', function(req, res) {
		Users.findOne({
			_id : req.params.user_id
		}, function(err, user) {
			if (err) {
				res.send(err);
			}

			getUsers(res);
		});
	});


	app.put('/api/users/:user_id', function(req, res) {
		Users.findByIdAndUpdate(req.params.user_id,
				{ $set: {
					firstName : req.body.firstName,
					lastName : req.body.lastName,
					email : req.body.email,
					age : req.body.age,
					active : req.body.active,
					added : req.body.added
				}}, null,
				 function(err, user) {
			if (err) {
				res.send(err);
			}

			getUsers(res);
		});
	});

	// application -------------------------------------------------------------
	app.get('*', function(req, res) {
		res.sendfile('./public/index.html'); // load the single view file (angular will handle the page changes on the front-end)
	});
};
