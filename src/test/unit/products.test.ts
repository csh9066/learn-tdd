import { assert } from 'console';
import ProductService from '../../services/ProductService';

describe('products service', () => {
  const productMockRepo = {
    save: jest.fn(),
  };

  const mockProduct = {
    id: 1,
    description: 'asd',
    name: 'asd',
  };

  productMockRepo.save.mockReturnValue(mockProduct);

  describe('create', () => {
    it('성공시 product를 반환한다', async () => {
      const productService = new ProductService(productMockRepo as any);
      const product = await productService.create(mockProduct);

      expect(productMockRepo.save).toBeCalled();
      expect(product).toBe(mockProduct);
    });
  });
});
