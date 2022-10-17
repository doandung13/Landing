const express = require('express');
const path = require('path');
const morgan = require('morgan');

const route = require('./routes')

const db = require('./config/db/server');
// //connect to DB
db.connect();

const app = express();
const port = 3000;

//HTTP logger
app.use(morgan('dev'));

//router
route(app);

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
})
