import { Reducer } from 'redux';
import { TThemeName } from '../../themes.css';
import {
  changeTheme,
  setMobileMode,
  setIsNavbarOpened,
  TLayoutActions,
} from '../actions/layoutActions';

export interface ILayoutState {
  theme: TThemeName;
  isMobile: boolean;
  isNavbarOpened: boolean;
}

const initialState: ILayoutState = {
  theme: window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light',
  isMobile: window.matchMedia('(max-width: 800px)').matches,
  isNavbarOpened: false,
};

export const layoutReducer: Reducer<ILayoutState, TLayoutActions> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case changeTheme.type:
      return { ...state, theme: action.payload };

    case setMobileMode.type:
      return { ...state, isMobile: action.payload };

    case setIsNavbarOpened.type:
      return { ...state, isNavbarOpened: action.payload };

    default:
      return state;
  }
};
