import * as express from 'express';
import UserController from '../controllers/UserController';

const router = express.Router();

const user = new UserController();

router.post('/', user.create);

export default router;
