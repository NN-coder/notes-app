import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { TAppActions } from './appActions';
import { IAppState } from './reducers/rootReducer';

type TAppDispatch = ThunkDispatch<IAppState, unknown, TAppActions>;

export const useAppDispatch = (): TAppDispatch => useDispatch<TAppDispatch>();
export const useAppSelector: TypedUseSelectorHook<IAppState> = useSelector;
