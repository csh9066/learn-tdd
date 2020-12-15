import { Router } from 'express';
import ProductController from '../controllers/ProductController';

export default class ProductRoute {
  private router: Router;
  private productController: ProductController;

  constructor() {
    this.router = Router();
    this.productController = new ProductController();
    this.iniializeRouter();
  }

  public getRouter() {
    return this.router;
  }

  private iniializeRouter() {
    this.router.post('/', this.productController.create);
  }
}
