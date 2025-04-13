import express from 'express';
import { getAllStores, createStore } from '../controllers/storeController.js';
import { authenticate, authorizeRoles } from '../middleware/authMiddleware.js';
const router = express.Router();

router.get('/', getAllStores);
router.post('/', authenticate, authorizeRoles('store_owner'), createStore);

export default router;