import { Pool, ResultSetHeader } from 'mysql2/promise';
import ITask from '../interfaces/ITask';
import connection from './connection';

class TaskController {
  private _connection: Pool;
  private DATABASE = 'mytasks_db';

  constructor() {
    this._connection = connection;
  }

  public async setTask(task: ITask): Promise<ITask> {
    const QUERY = `
    INSERT INTO 
      ${this.DATABASE}.Tasks (userId, task, status) 
    VALUES (?, ?, ?);
    `;

    const { userId, status } = task

    const result = this._connection.execute<ResultSetHeader>(
      QUERY,
      [userId, task.task, status],
    );

    const [dataInserted] = await result;
    const { insertId } = dataInserted;
    return { id: insertId, ...task };
  }
}

export default TaskController;
