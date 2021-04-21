import { TNotesActions } from './notesActions';
import { TSetSearchText } from './searchActions';

export type TAppActions = TNotesActions | TSetSearchText;
