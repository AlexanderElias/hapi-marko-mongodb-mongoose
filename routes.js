const User = require('./models/user.js').User;

module.exports = [
	{
		method: 'GET',
		path: '/',
		handler: function(req , res){
			res.marko('template' , {includeName:'../includes/index.marko' , title:'Boilerplate'});
		}
	},
	{
		method: 'GET',
		path: '/{path*}',
		handler: { directory:{ path: 'static' } }
	},
	{
		/*
			CREATE READ UPDATE DELETE
		*/
		method: 'GET',
		path: '/forms',
		handler: function(req , res){
			res.marko('template', {includeName:'../includes/forms.marko' , title:'Forms'});
		}
	},
	{
		/*
			CREATE
		*/
		method: 'POST',
		path: '/create',
		handler: function(req , res){

			//Create a new user to be saved in database
			const person = new User({
				firstName: req.payload.firstName,
				lastName: req.payload.lastName,
				username: req.payload.username,
				email: req.payload.email,
				password: req.payload.password
			});

			//Save to the database
			person.save(function(err , result) {
				if (err) {
					console.log(err);
					res(err.message);
				} else {
					res('User saved successfully!');
				}
			});
		}
	},
	{
		/*
			READ
		*/
		method: 'POST',
		path: '/read',
		handler: function(req , res) {
			if (req.payload.allOrSingle === 'all') {
				User.find({} , function(error , result){
					if (error) throw error;
					res(result);
				});
			}else{
				User.find({username: req.payload.username}, function(error , result){
					if(error) throw error;
					res(result);
				});
			}
		}
	},
	{
		/*
			UPDATE
		*/
		method: 'POST',
		path: '/update',
		handler: function(req , res) {

			const byValue = req.payload.byValue;
			const toValue = req.payload.toValue;
			console.log(req.query);
			User.update({username:byValue} , {firstName:toValue} , function(error , user){
				if(error) throw error;
				res(user.electionId);
			});
		}
	},
	{
		/*
			DELETE
		*/
		method: 'DELETE',
		path: '/delete',
		handler: function(req , res) {

			User.where().findOneAndRemove({username:'theonlyalex'}, function(error, result){
				if(error) throw error;
				res('User deleted: ' + result);
			});
		}
	}

];
