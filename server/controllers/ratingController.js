import Rating from '../models/Rating.js';

export const createRating = async (req, res) => {
  const { storeId, rating, comment } = req.body;
  const newRating = new Rating({ store: storeId, user: req.user.id, rating, comment });
  await newRating.save();
  res.status(201).json(newRating);
};

export const getStoreRatings = async (req, res) => {
  const ratings = await Rating.find({ store: req.params.storeId }).populate('user');
  res.json(ratings);
};
