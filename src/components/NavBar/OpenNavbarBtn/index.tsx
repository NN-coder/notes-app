import React, { useCallback } from 'react';
import { MdMenu } from 'react-icons/md';
import { setIsNavbarOpened } from '../../../redux/actions/layoutActions';
import { useAppDispatch } from '../../../redux/utils/hooks';
import { openNavbarBtnClass } from './style.css';

export const OpenNavbarBtn: React.FC = () => {
  const dispatch = useAppDispatch();
  const handleClick = useCallback(() => dispatch(setIsNavbarOpened(true)), []);

  return (
    <button className={openNavbarBtnClass} type="button" onClick={handleClick}>
      <MdMenu size="100%" />
    </button>
  );
};
