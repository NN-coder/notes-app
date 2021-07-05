import React from 'react';
import { MdMenu } from 'react-icons/md';
import { setIsNavbarOpened } from '../../../redux/actions/layoutActions';
import { store } from '../../../redux/store';
import { openNavbarBtnClass } from './style.css';

const handleClick = () => store.dispatch(setIsNavbarOpened(true));

export const OpenNavbarBtn: React.FC = () => (
  <button className={openNavbarBtnClass} type="button" onClick={handleClick}>
    <MdMenu size="100%" />
  </button>
);
