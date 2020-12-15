import { Repository } from 'typeorm';
import { Service } from 'typedi';
import Product from '../entity/Product';

@Service()
export default class ProductService {
  private productRepository: Repository<Product>;

  constructor(productRepository: Repository<Product>) {
    this.productRepository = productRepository;
  }

  public async create(product: Product): Promise<Product> {
    const createdProduct = this.productRepository.save(product);
    return createdProduct;
  }
}
