import { NextFunction, Request, Response } from 'express';
import TaskService from "../services/TaskService";

class TaskController {
  private _taskService: TaskService;

  constructor() {
    this._taskService = new TaskService();
  }

  public create = async (req: Request, res: Response, next: NextFunction)  => {
    try {
      const { userId, task, status, created } = req.body;
      const taskCreated = await this._taskService.setTask({ userId, task, status, created });
      return res.status(201).json(taskCreated);
    } catch (err) {
      next(err);
    }
  }
};

export default TaskController;
