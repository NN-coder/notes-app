import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { TAppActions } from './actions/appActions';
import { IAppState } from './reducers/rootReducer';

type TAppDispatch = ThunkDispatch<IAppState, void, TAppActions>;

export const useAppDispatch = (): TAppDispatch => useDispatch<TAppDispatch>();
export const useAppSelector: TypedUseSelectorHook<IAppState> = useSelector;
