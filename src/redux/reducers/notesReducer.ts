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
  value: INote[];
}

const initialState: INotesState = {
  isLoading: true,
  hasError: false,
  value: [],
};

export const notesReducer: Reducer<INotesState, TNotesActions> = (state = initialState, action) => {
  switch (action.type) {
    case setNotesLoadingStatus.type:
      return { ...state, isLoading: action.payload };

    case setNotesErrorStatus.type:
      return { ...state, hasError: action.payload };

    case addNotes.type:
      return { ...state, value: state.value.concat(action.payload) };

    case removeNotes.type:
      return { ...state, value: state.value.filter(({ id }) => !action.payload.includes(id)) };

    default:
      return state;
  }
};
