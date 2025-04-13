import Store from '../models/Store.js';

export const getAllStores = async (req, res) => {
  const stores = await Store.find();
  res.json(stores);
};

export const createStore = async (req, res) => {
  const { name, address } = req.body;
  const store = new Store({ name, address, owner: req.user.id });
  await store.save();
  res.status(201).json(store);
};