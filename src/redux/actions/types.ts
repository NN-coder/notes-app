export interface IAction<T extends string, P> {
  type: T;
  payload: P;
}

export type TActionCreator<A extends IAction<string, unknown>> = ((payload: A['payload']) => A) & {
  type: A['type'];
};
