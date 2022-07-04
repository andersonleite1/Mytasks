import * as express from "express";
import * as cors from 'cors';
import routes from './routes';

class App {
  public app: express.Express;

  constructor() {
    this.app = express();
    this.config();
  }

  private config(): void {
    const accessControl: express.RequestHandler = (_req, res, next) => {
      res.header('Access-Control_allow-origin', '*');
      res.header('Access-Control_allow-Methods', 'GET,POST,DELETE,OPTIONS,PATCH,PUT');
      res.header('Access-Control_allow-Headers', '*');
      next();
    }

    this.app
      .use(cors())
      .use(express.json())
      .use(accessControl)
      .use('/login', routes.user)
      .use('/tasks', routes.task);
  }

  public start(PORT: number | string): void {
    this.app.get('/ping', (req, res, next) => {
      return res.status(200).send('pingou');
    });

    this.app.listen(PORT, () => console.log('listening on port ', PORT));
  }

}

export { App };
export const { app } = new App();
