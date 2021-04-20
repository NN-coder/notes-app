import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { IAppState, TAppActions } from './types';

type TAppDispatch = ThunkDispatch<IAppState, unknown, TAppActions>;

export const useAppDispatch = (): TAppDispatch => useDispatch<TAppDispatch>();
export const useAppSelector: TypedUseSelectorHook<IAppState> = useSelector;
