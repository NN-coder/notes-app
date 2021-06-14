import { TThemeName } from '../../themes.css';
import { createActionCreator, IAction } from '../utils/createActionCreator';

type TChangeTheme = IAction<'CHANGE_THEME', TThemeName>;
type TSetMobileMode = IAction<'SET_MOBILE_MODE', boolean>;
type TSetIsNavbarOpened = IAction<'SET_IS_NAVBAR_OPENED', boolean>;
export type TLayoutActions = TChangeTheme | TSetMobileMode | TSetIsNavbarOpened;

export const changeTheme = createActionCreator<TChangeTheme>('CHANGE_THEME');
export const setMobileMode = createActionCreator<TSetMobileMode>('SET_MOBILE_MODE');
export const setIsNavbarOpened = createActionCreator<TSetIsNavbarOpened>('SET_IS_NAVBAR_OPENED');
