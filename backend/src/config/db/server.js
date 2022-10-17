const mongoose = require('mongoose');

async function connect() {
	try {
		await mongoose.connect('mongodb://localhost:27017/landing_dev');
		console.log("log:connect successfully");
	} catch (e) {
		console.log("log:"+e);
	}
}

module.exports = {
	connect
};
