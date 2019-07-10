import express from 'express';
const router = express.Router();


// import Middleware from '../middleware/middleware';
import * as Controller from '../controllers/userController';

router.post('/register', Controller.register)

export default router;