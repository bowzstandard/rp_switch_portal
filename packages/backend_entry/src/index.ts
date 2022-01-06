import { createApp } from './app';
import { fastifySwagger } from 'fastify-swagger';
import fastify from 'fastify';

const server = fastify();

server.register(fastifySwagger, {
  routePrefix: '/docs',
  exposeRoute: true,
  swagger: {
    info: {
      title: 'puppetmaker-api',
      description: '',
      version: '0.0.1',
    },
  },
});

createApp(server);

server.listen(8080, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Server listening at ${address}`);
});
