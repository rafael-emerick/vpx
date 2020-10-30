import express from 'express';
import routes from './routes';

const server = express();

server.get('/', (request, response) => response.json({ message: 'Hello world!' }));

server.listen(3333, () => {
  console.log('Server running on 3333');
});
