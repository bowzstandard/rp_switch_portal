import { PostApiBase } from '../base';
import { Static, Type } from '@sinclair/typebox';
import { BotID } from '../fixtures/bot';

export const Route = '/bot/:bot_id/push/' as const;

export const Headers = Type.Object({
  Authorization: Type.String(),
});

export const Body = Type.Object({});

export const Params = Type.Object({
  bot_id: Type.KeyOf(BotID),
});

export const Reply = Type.Object({});

export const Error = Type.Object({
  causedBy: Type.String(),
});

export type Struct = PostApiBase<
  typeof Route,
  Static<typeof Headers>,
  Static<typeof Body>,
  Static<typeof Params>,
  Static<typeof Reply>,
  Static<typeof Error>
>;
