import { Reducer } from 'redux';
import { INote } from '../../api/types';
import {
  setNotesErrorStatus,
  setNotesLoadingStatus,
  addNotes,
  removeNotes,
  TNotesActions,
} from '../actions/notesActions';

export interface INotesState {
  isLoading: boolean;
  hasError: boolean;
  notes: INote[];
}

const initialState: INotesState = {
  isLoading: true,
  hasError: false,
  notes: [],
};

export const notesReducer: Reducer<INotesState, TNotesActions> = (state = initialState, action) => {
  switch (action.type) {
    case setNotesLoadingStatus.type:
      return { ...state, isLoading: action.payload };

    case setNotesErrorStatus.type:
      return { ...state, hasError: action.payload };

    case addNotes.type:
      return { ...state, notes: state.notes.concat(action.payload) };

    case removeNotes.type:
      return { ...state, notes: state.notes.filter(({ id }) => !action.payload.includes(id)) };

    default:
      return state;
  }
};
