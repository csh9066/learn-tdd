import dotenv from 'dotenv';
import App from './App';

async function main() {
  const port: number = Number(process.env.PORT) || 3005;
  const app = new App();
  app.linsten(port);
}

main();
