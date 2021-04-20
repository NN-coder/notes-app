import { TNotesActions } from './actions/notesActions';
import { TNotesState } from './reducers/notesReducer';

export type TAppActions = TNotesActions;

export interface IAppState {
  notes: TNotesState;
}
