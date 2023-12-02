const Item = require('../models/Item');

async function getAll() {
	return Item.find({});
}

async function getByUserId(userId) {
	return Item.find({ _ownerId: userId });
}

async function getById(id) {
	return Item.findById(id);
}

async function create(item) {
	return Item.create(item);
}

async function update(id, item) {
	const existingItem = await Item.findById(id);

	existingItem.make = item.make;
	existingItem.model = item.model;
	existingItem.year = item.year;
	existingItem.description = item.description;
	existingItem.price = item.price;
	existingItem.img = item.img;
	existingItem.material = item.material;

	return existingItem.save();
}

async function deleteById(id) {
	return Item.findByIdAndDelete(id);
}

module.exports = {
	getAll,
	getById,
	create,
	update,
	deleteById,
	getByUserId
}