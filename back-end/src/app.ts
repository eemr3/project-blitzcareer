import express, { Application } from 'express';
import { UserRouter } from './infra/routes';
class App {
  public express: Application;
  private userRoutes = new UserRouter();

  constructor() {
    this.express = express();
    this.express.use(express.json());
    this.routes();
  }

  private routes() {
    this.express.get('/', (req: any, res: any) => {
      res.send('Hello World');
    });
    this.express.use(this.userRoutes.routes);
  }
}

export default new App().express;
