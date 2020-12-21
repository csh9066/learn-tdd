import { Container } from 'typedi';
import express from 'express';
import dotenv from 'dotenv';
import ProductRoute from './routes/ProductRoute';
import morgan from 'morgan';
import { createDatabaseConnection } from './database';

dotenv.config();

export default class App {
  private app: express.Application;

  constructor() {
    this.app = express();
  }

  public getApp() {
    return this.app;
  }

  public async linsten(port: number = 3005) {
    await this.setDatabase();
    this.setMiddleWares();
    this.setRoutes();

    return this.app.listen(port, () => {
      console.log(`server listening ${port} port`);
    });
  }

  private async setDatabase(): Promise<void> {
    try {
      await createDatabaseConnection();
    } catch (error) {
      console.log(error);
    }
  }

  private setMiddleWares(): void {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: false }));
    this.app.use(morgan('dev') as any);
  }

  private setRoutes(): void {
    this.app.use('/api/products', Container.get(ProductRoute).getRouter());
  }
}
