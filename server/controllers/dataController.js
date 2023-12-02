const dataController = require('express').Router();
const { hasUser } = require('../middlewares/guards');
const { getAll, create, getById } = require('../services/itemService');
const { parseError } = require('../util/parser');

dataController.get('/', async (req, res) => {
	const items = await getAll();
	res.json(items);
});

dataController.post('/', hasUser(), async (req, res) => {
	try {
		const data = Object.assign({ _ownerId: req.user._id }, req.body);
		const item = await create(data);
		res.json(item);
	} catch (err) {
		const message = parseError(err);
		res.status(400).json({ message });
	}
});

dataController.get('/:id', async (req, res) => {
	const item = await getById(req.params.id);
	res.json(item);
});

module.exports = dataController;