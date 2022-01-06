import { createApp } from './app';
import awsLambdaFastify from 'aws-lambda-fastify';
import fastify from 'fastify';

const server = createApp(fastify());

export const handler = awsLambdaFastify(server, {
  callbackWaitsForEmptyEventLoop: true,
});
