import Container from 'typedi';
import { createConnection, ConnectionOptions, useContainer } from 'typeorm';

export async function createDatabaseConnection() {
  try {
    const connectionOpts: ConnectionOptions = {
      type: 'mysql',
      host: process.env.TYPEORM_HOST,
      port: Number(process.env.TYPEORM_PORT),
      username: process.env.TYPEORM_USERNAME,
      password: process.env.TYPEORM_PASSWORD,
      database: process.env.TYPEORM_DATABASE,
      synchronize: true,
      logging: false,
      entities: ['src/entity/*{.ts,.js}'],
    };

    useContainer(Container);

    const connection = await createConnection(connectionOpts);

    return connection;
  } catch (error) {
    throw error;
  }
}
