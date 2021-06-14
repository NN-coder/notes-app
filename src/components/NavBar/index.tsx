import React, { useCallback, useState, useEffect } from 'react';
import { setIsNavbarOpened } from '../../redux/actions/layoutActions';
import { useAppDispatch, useAppSelector } from '../../redux/utils/hooks';
import { mainAppTitleClass, navbarBgClass, navbarClass } from './style.css';

export const NavBar: React.FC = () => {
  const dispatch = useAppDispatch();
  const isNavbarOpened = useAppSelector(({ layoutState }) => layoutState.isNavbarOpened);

  const [animationPercentages, setPercentages] = useState(0);

  const increasePercentages = useCallback(
    () => setPercentages((prevVal) => (prevVal < 100 ? prevVal + 1 : prevVal)),
    []
  );
  const decreasePercentages = useCallback(
    () => setPercentages((prevVal) => (prevVal > 0 ? prevVal - 1 : prevVal)),
    []
  );

  useEffect(() => {
    if (isNavbarOpened && animationPercentages < 100) setTimeout(increasePercentages, 1);
    if (!isNavbarOpened && animationPercentages > 0) setTimeout(decreasePercentages, 1);
  }, [isNavbarOpened, animationPercentages]);

  const handleNavbarBgClick = useCallback(() => dispatch(setIsNavbarOpened(false)), []);

  return (
    <>
      <div className={navbarClass} style={{ left: `${-100 + animationPercentages}%` }}>
        <h1 className={mainAppTitleClass}>Notes app</h1>
      </div>
      {animationPercentages > 0 && (
        <div
          className={navbarBgClass}
          style={{
            opacity: (0.5 * animationPercentages) / 100,
          }}
          onClick={handleNavbarBgClick}
          aria-hidden
        />
      )}
    </>
  );
};
