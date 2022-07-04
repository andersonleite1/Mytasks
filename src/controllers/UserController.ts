import { NextFunction, Request, Response } from 'express';
import UserService from "../services/UserService";

class UserController {
  private _userService: UserService;

  constructor() {
    this._userService = new UserService();
  }

  public create = async (req: Request, res: Response, next: NextFunction)  => {
    try {
      const { username, password } = req.body;
      const userCreated = await this._userService.setUser({ username, password });
      return res.status(201).json(userCreated);
    } catch (err) {
      next(err);
    }
  }
};

export default UserController;
