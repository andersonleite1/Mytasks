import * as express from 'express';
import TaskController from '../controllers/TaskController';

const router = express.Router();

const task = new TaskController();

router.post('/', task.create);

export default router;
