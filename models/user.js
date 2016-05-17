const Mongoose = require('../database').Mongoose;

//Define Schema for the Model
const Schema = Mongoose.Schema;
const userSchema = new Schema({
	firstName: {type: String},
	lastName: {type: String},
	username: {type: String , required: true , unique: true},
	email: {type: String , required: true , unique: true},
	password: {type: String , required: true}
});

//Create the Model/Collection
const User = Mongoose.model('users', userSchema);

exports.User = User
