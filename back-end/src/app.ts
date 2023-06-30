import cors from 'cors';
import express, { Application } from 'express';
import { UserRouter, AuthRoutes, TaskRoutes } from './infra/routes';
class App {
  public express: Application;
  private authRoutes = new AuthRoutes();
  private userRoutes = new UserRouter();
  private taskRoutes = new TaskRoutes();

  constructor() {
    this.express = express();
    this.express.use(cors());
    this.express.use(express.json());
    this.routes();
  }

  private routes() {
    this.express.get('/', (req: any, res: any) => {
      res.send('Hello World');
    });
    this.express.use(this.authRoutes.routes);
    this.express.use(this.userRoutes.routes);
    this.express.use(this.taskRoutes.routes);
  }
}

export default new App().express;
