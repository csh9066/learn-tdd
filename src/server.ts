import express from 'express';
import { createConnection } from 'typeorm';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

createConnection()
  .then(() => {
    console.log('connect success');
  })
  .catch((e) => {
    console.log(e);
  });

app.get('/', (req, res) => {
  res.send('hello world');
});

app.listen(3005, () => {
  console.log('server listening 3005 port');
});
