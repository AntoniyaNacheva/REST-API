const { register } = require('../services/userService');

const authController = require('express').Router();

authController.post('/register', async (req, res) => {
	try {
		const token = register(req.body.email, req.body.password);

		res.json(token);
	} catch (err) {
		res.status(400).json({
			message: err.message
		});
	}
});

module.exports = authController;