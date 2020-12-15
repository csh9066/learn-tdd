import { Request, Response } from 'express';
import Container from 'typedi';
import ProductService from '../services/ProductService';

export default class ProductController {
  private productService: ProductService;
  constructor() {
    this.productService = Container.get(ProductService);
  }

  public async create(req: Request, res: Response): Promise<void> {}
}
