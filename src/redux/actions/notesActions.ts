import { Dispatch } from 'redux';
import { fetchNotes as apiFetchNotes } from '../../api/fetchNotes';
import { INote } from '../../api/types';
import { createActionCreator } from './createActionCreator';
import { IAction } from './types';

type TSuccessfulNotesFetch = IAction<'SUCCESSFUL_NOTES_FETCH', INote[]>;
type TFailedNotesFetch = IAction<'FAILED_NOTES_FETCH', Error>;
export type TNotesActions = TSuccessfulNotesFetch | TFailedNotesFetch;

export const successfulNotesFetch = createActionCreator<TSuccessfulNotesFetch>(
  'SUCCESSFUL_NOTES_FETCH'
);
export const failedNotesFetch = createActionCreator<TFailedNotesFetch>('FAILED_NOTES_FETCH');

export const fetchNotes = () => {
  return (dispatch: Dispatch<TNotesActions>): void => {
    apiFetchNotes()
      .then((notes) => dispatch(successfulNotesFetch(notes)))
      .catch((error) => dispatch(failedNotesFetch(error as Error)));
  };
};
