import { IAction, TActionCreator } from './types';

export function createActionCreator<A extends IAction<string, unknown>>(
  type: A['type']
): TActionCreator<A> {
  const actionCreator = (payload: A['payload']) => ({ type, payload });
  return Object.assign(actionCreator, { type }) as TActionCreator<A>;
}
