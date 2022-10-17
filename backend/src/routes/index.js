const accRouter = require('./accounts') 

function route(app){
	app.use('/account',accRouter);
}

module.exports = route;