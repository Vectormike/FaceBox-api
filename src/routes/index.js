import express from 'express';

// import Middleware from '../middleware/middleware';
import Controller from '../controllers/userController';

const router = express.Router();

const { register } = Controller;

router.post('/register', register);

export default router;
