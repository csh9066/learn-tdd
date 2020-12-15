import express, { Router } from 'express';
import { Server } from 'http';
import ProductRoute from './routes/ProductRoute';

export default class App {
  private app: express.Application;
  private productRoute = new ProductRoute();

  constructor() {
    this.app = express();
    this.setMiddleWares();
    this.setRoutes();
  }

  public linsten(port: number = 3005): Server {
    return this.app.listen(3005, () => {
      console.log(`server listening ${port} port`);
    });
  }

  private setMiddleWares(): void {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: false }));
  }

  private setRoutes(): void {
    this.app.use('/api/product', this.productRoute.getRouter());
  }
}
