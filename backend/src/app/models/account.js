const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Account = new Schema({
	username: {
		type: String,
		maxLength: 50,
	},
	password: {
		type: String,
		maxLength: 50,
	},
	createdAt: {
		type: Date,
		default: Date.now(),
	}
	updateAt: {
		type: Date,
		default: Date.now(),
	}
});

module.exports = mongoose.model('account',Account);
