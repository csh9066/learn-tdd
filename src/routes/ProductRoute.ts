import { Router } from 'express';
import { Service } from 'typedi';
import ProductController from '../controllers/ProductController';

@Service()
export default class ProductRoute {
  private router: Router;

  constructor(private productController: ProductController) {
    this.router = Router();
    this.iniializeRouter();
  }

  public getRouter() {
    return this.router;
  }

  private iniializeRouter() {
    this.router.post('/', this.productController.create);
  }
}
