import { Pool, ResultSetHeader } from 'mysql2/promise';
import IUser from '../interfaces/IUser';
import connection from './connection';

class UserController {
  private _connection: Pool;
  private DATABASE = 'mytasks_db';

  constructor() {
    this._connection = connection;
  }

  public async setUser(user: IUser): Promise<IUser> {
    const QUERY = `
      INSERT INTO 
        ${this.DATABASE}.Users (username, password) 
      VALUES (?, ?);
    `;

    const result = this._connection.execute<ResultSetHeader>(
      QUERY,
      [user.username, user.password],
    );

    const [dataInserted] = await result;
    const { insertId } = dataInserted;
    return { id: insertId, ...user };
  }
}

export default UserController;
