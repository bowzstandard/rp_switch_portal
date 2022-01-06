import { Type } from '@sinclair/typebox';

export const BotID = Type.Object({
  livingWindow: Type.String({ pattern: 'F5:ED:06:BB:41:ED' }),
  livingKitchen: Type.String({ pattern: 'D6:D5:6C:01:7B:1A' }),
  bedRoom: Type.String({ pattern: 'CC:A9:15:DD:20:C6' }),
});
