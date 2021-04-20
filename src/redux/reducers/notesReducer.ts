import { Reducer } from 'redux';
import { INote } from '../../api/types';
import { failedNotesFetch, successfulNotesFetch, TNotesActions } from '../actions/notesActions';

type TLoading = { status: 'loading'; value: null };
type TFailure = { status: 'failure'; value: Error };
type TSuccess = { status: 'success'; value: INote[] };

export type TNotesState = TLoading | TFailure | TSuccess;
const initialState: TNotesState = { status: 'loading', value: null };

export const notesReducer: Reducer<TNotesState, TNotesActions> = (state = initialState, action) => {
  switch (action.type) {
    case successfulNotesFetch.type:
      return { status: 'success', value: action.payload };

    case failedNotesFetch.type:
      return { status: 'failure', value: action.payload };

    default:
      return state;
  }
};
