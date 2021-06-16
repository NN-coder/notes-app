import React, { useCallback, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { setIsNavbarOpened } from '../../redux/actions/layoutActions';
import { useAppDispatch, useAppSelector } from '../../redux/utils/hooks';
import { Nav } from './Nav';
import { mainAppTitleClass, navbarBgClass, navbarClass } from './style.css';

export const NavBar: React.FC = () => {
  const dispatch = useAppDispatch();
  const isNavbarOpened = useAppSelector(({ layoutState }) => layoutState.isNavbarOpened);

  const closeNavbar = useCallback(() => dispatch(setIsNavbarOpened(false)), []);
  const { pathname } = useLocation();

  useEffect(() => {
    closeNavbar();
  }, [pathname]);

  const handleEscPress = useCallback(({ key }: KeyboardEvent) => {
    if (key === 'Escape') closeNavbar();
  }, []);

  useEffect(() => {
    document.addEventListener('keyup', handleEscPress);
    return () => document.removeEventListener('keyup', handleEscPress);
  }, []);

  return (
    <>
      <div className={isNavbarOpened ? navbarClass.opened : navbarClass.closed}>
        <h1 className={mainAppTitleClass}>Notes app</h1>
        <Nav />
      </div>
      <div
        className={isNavbarOpened ? navbarBgClass.opened : navbarBgClass.closed}
        onClick={closeNavbar}
        aria-hidden
      />
    </>
  );
};
