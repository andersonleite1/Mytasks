import UserModel from '../models/UserModel';
import IUSer from '../interfaces/IUser';


class UserService {
  private _userModel: UserModel;

  constructor() {
    this._userModel = new UserModel();
  }

  public  async setUser (user: IUSer): Promise<IUSer> {
    const userCreated = await this._userModel.setUser(user);
    return userCreated;
  }
}

export default UserService;
