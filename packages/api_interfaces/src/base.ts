import { Static, TSchema, TypeBuilder } from '@sinclair/typebox';

export type GetApiBase<
  S extends `/${string}`,
  T extends Static<TSchema>,
  U extends Static<TSchema>,
  V extends Static<TSchema>,
  W extends Static<TSchema>,
  X extends Static<TSchema>
> = {
  route: S;
  headers: T;
  querystring: U;
  params: V;
  reply: W;
  error: X;
};

export type PostApiBase<
  S extends `/${string}`,
  T extends Static<TSchema>,
  U extends Static<TSchema>,
  V extends Static<TSchema>,
  W extends Static<TSchema>,
  X extends Static<TSchema>
> = {
  route: S;
  headers: T;
  body: U;
  params: V;
  reply: W;
  error: X;
};
