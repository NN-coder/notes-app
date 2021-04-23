import { combineReducers } from 'redux';
import { layoutReducer, ILayoutState } from './layoutReducer';
import { INotesState, notesReducer } from './notesReducer';
import { ISearchState, searchReducer } from './searchReducer';

export interface IAppState {
  notesState: INotesState;
  searchState: ISearchState;
  layoutState: ILayoutState;
}

export const rootReducer = combineReducers<IAppState>({
  notesState: notesReducer,
  searchState: searchReducer,
  layoutState: layoutReducer,
});
