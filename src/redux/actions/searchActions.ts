import { createActionCreator, IAction } from '../utils/createActionCreator';

export type TSetSearchText = IAction<'SET_SEARCH_TEXT', string>;

export const setSearchText = createActionCreator<TSetSearchText>('SET_SEARCH_TEXT');
