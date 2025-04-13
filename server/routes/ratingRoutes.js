import express from 'express';
import { createRating, getStoreRatings } from '../controllers/ratingController.js';
import { authenticate } from '../middleware/authMiddleware.js';
const router = express.Router();

router.post('/', authenticate, createRating);
router.get('/:storeId', getStoreRatings);

export default router;
