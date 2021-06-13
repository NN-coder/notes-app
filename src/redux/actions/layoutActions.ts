import { TThemeName } from '../../themes.css';
import { createActionCreator, IAction } from './createActionCreator';

type TChangeTheme = IAction<'CHANGE_THEME', TThemeName>;
type TSetMobileMode = IAction<'SET_MOBILE_MODE', boolean>;
export type TLayoutActions = TChangeTheme | TSetMobileMode;

export const changeTheme = createActionCreator<TChangeTheme>('CHANGE_THEME');
export const setMobileMode = createActionCreator<TSetMobileMode>('SET_MOBILE_MODE');
