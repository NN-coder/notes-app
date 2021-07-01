import React, { useEffect } from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';
import { fetchNotes } from '../redux/actions/notesActions';
import { useAppDispatch, useAppSelector } from '../redux/utils/hooks';
import { darkThemeClass, lightThemeClass } from '../themes.css';
import { NavBar } from './NavBar';
import { FullscreenNote } from './pages/FullscreenNote';
import { Home } from './pages/Home';
import { Trash } from './pages/Trash';

const rootElement = document.querySelector(':root');

export const App: React.FC = () => {
  const dispatch = useAppDispatch();
  const isNotesPreviouslyFetched = useAppSelector(
    ({ notesState }) => notesState.isPreviouslyFetched
  );

  useEffect(() => {
    if (!isNotesPreviouslyFetched) dispatch(fetchNotes());
  }, []);

  const theme = useAppSelector((state) => state.layoutState.theme);

  useEffect(() => {
    const isDark = theme === 'dark';
    rootElement?.classList.remove(isDark ? lightThemeClass : darkThemeClass);
    rootElement?.classList.add(isDark ? darkThemeClass : lightThemeClass);
  }, [theme]);

  return (
    <>
      <NavBar />
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/trash" component={Trash} />
        <Route path="/:id" component={FullscreenNote} />
        <Redirect from="/" to="/home" />
      </Switch>
    </>
  );
};
