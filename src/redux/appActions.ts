import { TLayoutActions } from './actions/layoutActions';
import { TNotesActions } from './actions/notesActions';
import { TSetSearchText } from './actions/searchActions';

export type TAppActions = TNotesActions | TSetSearchText | TLayoutActions;
