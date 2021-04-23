/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { setMobileMode } from '../redux/actions/layoutActions';
import { fetchNotes } from '../redux/actions/notesActions';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { themes } from '../themes';
import { GlobalStyle } from './GlobalStyle';
import { Main } from './Main';
import { StyledHeader } from './StyledHeader';

const mediaQuery = window.matchMedia('(max-width: 800px)');

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

  return (
    <ThemeProvider theme={themes[theme]}>
      <GlobalStyle />
      <StyledHeader />
      <Main />
    </ThemeProvider>
  );
};
