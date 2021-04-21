import { Reducer } from 'redux';
import { setSearchText, TSetSearchText } from '../actions/searchActions';

export interface ISearchState {
  searchText: string;
}

const initialState: ISearchState = {
  searchText: '',
};

export const searchReducer: Reducer<ISearchState, TSetSearchText> = (
  state = initialState,
  action
) => {
  // eslint-disable-next-line sonarjs/no-small-switch
  switch (action.type) {
    case setSearchText.type:
      return { searchText: action.payload };

    default:
      return state;
  }
};
