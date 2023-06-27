import express, { Application } from 'express';

class App {
  public express: Application;

  constructor() {
    this.express = express();
    this.express.use(express.json());
    this.routes();
  }

  routes() {
    this.express.get('/', (req: any, res: any) => {
      res.send('Hello World');
    });
  }
}

export default new App().express;
