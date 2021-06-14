/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback, useEffect } from 'react';
import { setMobileMode } from '../redux/actions/layoutActions';
import { fetchNotes } from '../redux/actions/notesActions';
import { useAppDispatch, useAppSelector } from '../redux/utils/hooks';
import { Main } from './Main';
import { Header } from './Header';
import { darkThemeClass, lightThemeClass } from '../themes.css';

const mediaQuery = window.matchMedia('(max-width: 800px)');
const rootElement = document.querySelector(':root');

export const App: React.FC = () => {
  const dispatch = useAppDispatch();

  const isLoading = useAppSelector((state) => state.notesState.isLoading);
  const hasError = useAppSelector((state) => state.notesState.hasError);

  useEffect(() => {
    if (isLoading || hasError) {
      dispatch(fetchNotes());
    }
  }, []);

  const mediaQueryEventListener = useCallback(
    ({ matches }: MediaQueryListEvent) => dispatch(setMobileMode(matches)),
    []
  );

  useEffect(() => {
    mediaQuery.addEventListener('change', mediaQueryEventListener);
    return () => mediaQuery.removeEventListener('change', mediaQueryEventListener);
  }, []);

  const theme = useAppSelector((state) => state.layoutState.theme);

  useEffect(() => {
    const isDark = theme === 'dark';
    rootElement?.classList.remove(isDark ? lightThemeClass : darkThemeClass);
    rootElement?.classList.add(isDark ? darkThemeClass : lightThemeClass);
  }, [theme]);

  return (
    <>
      <Header />
      <Main />
    </>
  );
};
