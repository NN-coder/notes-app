import { Reducer } from 'redux';
import { INote } from '../../api/types';
import {
  setNotesErrorStatus,
  setNotesLoadingStatus,
  addNotes,
  moveNotesToTrash,
  deleteNotes,
  TNotesActions,
} from '../actions/notesActions';

export interface INotesState {
  isLoading: boolean;
  hasError: boolean;
  notes: INote[];
  trash: string[];
}

const initialState: INotesState = {
  isLoading: true,
  hasError: false,
  notes: [],
  trash: ['LOsnh-5Hib', 'V-MGF0czW_'],
};

export const notesReducer: Reducer<INotesState, TNotesActions> = (state = initialState, action) => {
  switch (action.type) {
    case setNotesLoadingStatus.type:
      return { ...state, isLoading: action.payload };

    case setNotesErrorStatus.type:
      return { ...state, hasError: action.payload };

    case addNotes.type:
      return { ...state, notes: state.notes.concat(action.payload) };

    case moveNotesToTrash.type:
      return { ...state, trash: [...new Set(state.trash.concat(action.payload))] };

    case deleteNotes.type: {
      const notes = state.notes.filter(({ id }) => !action.payload.includes(id));
      const trash = state.trash.filter((id) => !action.payload.includes(id));
      return { ...state, notes, trash };
    }

    default:
      return state;
  }
};
