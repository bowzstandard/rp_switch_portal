import { FastifyInstance } from 'fastify';
import sensible from 'fastify-sensible';
import { BotPushUseCase } from './usecases/bot/push';
import { Bot } from '@bowzstandard_switch_portal/api_interfaces';
import { Static } from '@sinclair/typebox';

export const createApp = (server: FastifyInstance) => {
  server.register(sensible);

  server.post<{
    Params: Static<typeof Bot.PushAPI.Params>;
    Headers: Static<typeof Bot.PushAPI.Headers>;
    Reply: Static<typeof Bot.PushAPI.Reply>;
  }>(
    Bot.PushAPI.Route,
    {
      schema: {
        headers: Bot.PushAPI.Headers,
        params: Bot.PushAPI.Params,
        response: {
          200: Bot.PushAPI.Reply,
          401: Bot.PushAPI.Error,
          403: Bot.PushAPI.Error,
        },
      },
    },
    BotPushUseCase
  );

  return server;
};
