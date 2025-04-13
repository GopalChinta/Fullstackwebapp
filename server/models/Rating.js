import mongoose from 'mongoose';

const ratingSchema = new mongoose.Schema({
  store: { type: mongoose.Schema.Types.ObjectId, ref: 'Store' },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  rating: { type: Number, min: 1, max: 5 },
  comment: String
});

const Rating = mongoose.model('Rating', ratingSchema);

export default Rating;
