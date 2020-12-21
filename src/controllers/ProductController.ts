import { validate } from 'class-validator';
import { Request, Response } from 'express';
import { Service } from 'typedi';
import { CreateProductDto } from '../dtos/productDtos';
import ProductService from '../services/ProductService';

@Service()
export default class ProductController {
  constructor(private productService: ProductService) {}

  public create = async (req: Request, res: Response) => {
    try {
      const productDto: CreateProductDto = new CreateProductDto();
      productDto.description = req.body.description;
      productDto.name = req.body.name;

      const productDtoValidateError = await validate(productDto);
      if (productDtoValidateError.length > 0) {
        return res.status(400).send('Bad Request');
      }

      const product = await this.productService.create(productDto);
      res.json(product);
    } catch (e) {
      res.json(e);
    }
  };
}
