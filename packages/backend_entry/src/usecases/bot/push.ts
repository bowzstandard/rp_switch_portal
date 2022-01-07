import { FastifyRequest, FastifyReply } from 'fastify';
import { Static } from '@sinclair/typebox';
import { Bot, Fixtures } from '@bowzstandard_switch_portal/api_interfaces';
import * as http from 'http';
import { SwitchbotAgent } from '../../entities/switch_bot_agent';

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
  if (
    !Object.keys(Fixtures.Bot.BotID.properties).includes(request.params.bot_id)
  ) {
    reply.code(401).send({
      causedBy: 'invalid bot id',
    });
    return;
  }

  try {
    const bot = new SwitchbotAgent(
      Fixtures.Bot.BotID.properties[request.params.bot_id].pattern
    );

    await bot.init();
    await bot.scanAndPress();

    reply.code(200).send({});
  } catch (e) {
    reply.code(401).send({
      causedBy: e,
    });
  }
};
