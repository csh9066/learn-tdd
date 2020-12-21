import ProductService from '../../src/services/ProductService';

describe('ProductService', () => {
  const productMockRepo = {
    save: jest.fn(),
  };

  const mockProduct = {
    id: 1,
    description: 'asd',
    name: 'asd',
    kimchi: 'nice',
  };

  productMockRepo.save.mockReturnValue(mockProduct);

  describe('create', () => {
    it('성공시 product를 반환한다', async () => {
      const productService = new ProductService(productMockRepo as any);
      const product = await productService.create(mockProduct);

      expect(product).toBe(mockProduct);
    });
  });
});
