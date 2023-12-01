const express = require('express');
const cors = require('./middlewares/cors');
const mongoose = require('mongoose');

const connectionString = 'mongodb://127.0.0.1:27017/furniture';

start();

async function start() {

	await mongoose.connect(connectionString);
	console.log('Database connected!');

	const app = express();

	app.use(express.json());
	app.use(cors());

	app.get('/', (req, res) => {
		res.json({ message: 'REST Service' });
	});

	app.listen(3030, () => console.log('REST service started!'));
}