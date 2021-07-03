import { Reducer } from 'redux';
import { INote } from '../../api/types';
import {
  setNotesStatus,
  addNotes,
  updateNote,
  moveNotesToTrash,
  restoreNotesFromTrash,
  deleteNotes,
  TNotesActions,
} from '../actions/notesActions';

export interface INotesState {
  isLoading: boolean;
  hasError: boolean;
  isPreviouslyFetched: boolean;
  notes: INote[];
  trash: string[];
}

const initialState: INotesState = {
  isLoading: true,
  hasError: false,
  isPreviouslyFetched: false,
  notes: [],
  trash: [],
};

export const notesReducer: Reducer<INotesState, TNotesActions> = (state = initialState, action) => {
  switch (action.type) {
    case addNotes.type:
      return { ...state, notes: state.notes.concat(action.payload) };

    case moveNotesToTrash.type:
      return { ...state, trash: [...new Set(state.trash.concat(action.payload))] };

    case restoreNotesFromTrash.type:
      return { ...state, trash: state.trash.filter((id) => !action.payload.includes(id)) };

    case setNotesStatus.type:
      return {
        ...state,
        isLoading: action.payload.isLoading ?? state.isLoading,
        hasError: action.payload.hasError ?? state.isLoading,
      };

    case deleteNotes.type: {
      const notes = state.notes.filter(({ id }) => !action.payload.includes(id));
      const trash = state.trash.filter((id) => !action.payload.includes(id));
      return { ...state, notes, trash };
    }

    case updateNote.type: {
      const notes = state.notes.slice();
      const noteIndex = notes.findIndex(({ id }) => id === action.payload.id);

      if (noteIndex === -1) return state;

      const currentNote = notes[noteIndex];

      (Object.keys(currentNote) as (keyof INote)[]).forEach((key) => {
        currentNote[key] = action.payload[key] ?? currentNote[key];
      });

      return { ...state, notes };
    }

    default:
      return state;
  }
};
