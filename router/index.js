import express from 'express';
import users from './users';

const router = express.Router();

router.use('/users', users);
router.use('/friends', friends);

export default router;