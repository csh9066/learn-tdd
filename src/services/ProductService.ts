import { InjectRepository } from 'typeorm-typedi-extensions';
import { Service } from 'typedi';
import Product from '../entity/Product';
import ProductRepository from '../repositories/ProductRepository';

@Service()
export default class ProductService {
  constructor(
    @InjectRepository() private productRepository: ProductRepository
  ) {}

  public async create(product: Product): Promise<Product> {
    try {
      const createdProduct = await this.productRepository.save(product);
      return createdProduct;
    } catch (e) {
      throw e;
    }
  }
}
