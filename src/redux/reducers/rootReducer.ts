import { combineReducers } from 'redux';
import { INotesState, notesReducer } from './notesReducer';
import { ISearchState, searchReducer } from './searchReducer';

export interface IAppState {
  notes: INotesState;
  search: ISearchState;
}

export const rootReducer = combineReducers<IAppState>({
  notes: notesReducer,
  search: searchReducer,
});
