import express from 'express';
const router = express.Router();

import Middleware from '../middleware/middleware';

router.post('/register', Middleware.authorize)

export default router;