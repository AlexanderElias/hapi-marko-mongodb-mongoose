const Mongoose = require('mongoose');

//Database credentials
const dbCreds = {
	url: 'mongodb://db-host:27017/db-name',
	options: {
		user: 'user',
	      pass: 'pass'
	}
}
Mongoose.connect(dbCreds.url, dbCreds.options);

const db =  Mongoose.connection;
db.on('error', console.error.bind(console , 'Connection error'));
db.once('open', function callback() {
	console.log('Connection with database succeeded');
});

exports.Mongoose = Mongoose;
