import { combineReducers } from 'redux';
import { IAppState } from '../types';
import { notesReducer } from './notesReducer';

export const rootReducer = combineReducers<IAppState>({ notes: notesReducer });
