const dataController = require('express').Router();

dataController.get('/', (req, res) => {
	// console.log(req.user);
	res.json([]);
});

dataController.post('/', (req, res) => {
	console.log(req.body);
	res.end();
});

module.exports = dataController;