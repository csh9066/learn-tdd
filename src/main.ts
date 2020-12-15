import { createConnection } from 'typeorm';
import App from './App';

async function main() {
  try {
    const port: number = 3005;
    const app = new App();
    app.linsten(port);
    await createConnection();
    console.log('db 연결 완료');
  } catch (e) {
    console.error(e);
  }
}

main();
