export interface IAction<T extends string, P> {
  type: T;
  payload: P;
}

export type TActionCreator<A extends IAction<string, unknown>> = ((payload: A['payload']) => A) & {
  type: A['type'];
};

export function createActionCreator<A extends IAction<string, unknown>>(
  type: A['type']
): TActionCreator<A> {
  const actionCreator = (payload: A['payload']) => ({ type, payload });
  return Object.assign(actionCreator, { type }) as TActionCreator<A>;
}
