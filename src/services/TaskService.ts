import TaskModel from '../models/TaskModel';
import ITask from '../interfaces/ITask';


class TaskService {
  private _taskModel: TaskModel;

  constructor() {
    this._taskModel = new TaskModel();
  }

  public  async setTask (Task: ITask): Promise<ITask> {
    const taskCreated = await this._taskModel.setTask(Task);
    return taskCreated;
  }
}

export default TaskService;
