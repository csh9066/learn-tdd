import request from 'supertest';
import testApp from '../../utils/testApp';

beforeAll(async () => {
  return await new Promise<void>((resolve) => setTimeout(() => resolve(), 500));
});

describe('POST /api/products', () => {
  it('유효성 검사에 실패하면 status 400 코드를 반환한다', async () => {
    const mockProduct = {
      description: 1,
      name: 'asd',
    };
    const response = await request(testApp)
      .post('/api/products')
      .send(mockProduct);

    return expect(response.status).toBe(400);
  });

  it('성공하면 200 status와 생성된 product를 반환한다', async () => {
    const mockProduct = {
      description: 'asd',
      name: 'asd',
    };
    const response = await request(testApp)
      .post('/api/products')
      .send(mockProduct);

    return expect(response.status).toBe(200);
  });
});
