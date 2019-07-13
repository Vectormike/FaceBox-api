import express from 'express';
const router = express.Router();


// import Middleware from '../middleware/middleware';
import  Controller from '../controllers/userController';

const { register } = Controller;

router.post('/register', register)

export default router;