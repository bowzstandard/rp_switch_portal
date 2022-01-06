import { FastifyRequest, FastifyReply } from 'fastify';
import { Static } from '@sinclair/typebox';
import { Bot } from '@bowzstandard_switch_portal/api_interfaces';
import * as http from 'http';

export const BotPushUseCase = async (
  request: FastifyRequest<
    {
      Params: Static<typeof Bot.PushAPI.Params>;
      Headers: Static<typeof Bot.PushAPI.Headers>;
      Reply: Static<typeof Bot.PushAPI.Reply>;
    },
    http.Server,
    http.IncomingMessage,
    unknown
  >,
  reply: FastifyReply<
    http.Server,
    http.IncomingMessage,
    http.ServerResponse,
    {
      Params: Static<typeof Bot.PushAPI.Params>;
      Headers: Static<typeof Bot.PushAPI.Headers>;
      Reply: Static<typeof Bot.PushAPI.Reply>;
    },
    unknown
  >
) => {
  return {};
};
