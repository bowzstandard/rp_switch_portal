import { Type } from '@sinclair/typebox';

export const BotID = Type.Object({
  livingWindow: Type.String({ pattern: 'f5:ed:06:bb:41:ed' }),
  livingKitchen: Type.String({ pattern: 'd6:d5:6c:01:7b:1a' }),
  bedRoom: Type.String({ pattern: 'cc:a9:15:dd:20:c6' }),
});
