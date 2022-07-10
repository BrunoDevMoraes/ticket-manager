import express from 'express';
import SigninRouter from './routes/signRoute';

class App {
  public app: express.Express;

  constructor() {
    this.app = express();
    this.app.use(express.json());
    this.config();
    this.routes();
  }

  private config():void {
    const accessControl: express.RequestHandler = (_req, res, next) => {
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Methods', 'GET,POST,DELETE,OPTIONS,PUT,PATCH');
      res.header('Access-Control-Allow-Headers', '*');
      next();
    };

    this.app.use(accessControl);
  }

  public start(PORT: string | number):void {
    this.app.listen(PORT);
    console.log(`App listening to port ${PORT}!`)
  }

  public routes(): void {
    this.app.use(SigninRouter)
  }
}

export { App };