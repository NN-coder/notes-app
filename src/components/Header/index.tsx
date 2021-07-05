import React, { ChangeEvent, useCallback, useRef } from 'react';
import { MdClose } from 'react-icons/md';
import { setSearchText } from '../../redux/actions/searchActions';
import { useAppDispatch, useAppSelector } from '../../redux/utils/hooks';
import { OpenNavbarBtn } from '../NavBar/OpenNavbarBtn';
import { clearInputBtnClass, headerClass, inputClass, inputContainerClass } from './style.css';

export const Header: React.FC = () => {
  const searchText = useAppSelector((state) => state.searchState.searchText);
  const dispatch = useAppDispatch();

  const handleInputChange = useCallback(
    ({ target }: ChangeEvent<HTMLInputElement>) => dispatch(setSearchText(target.value)),
    []
  );

  const inputRef = useRef<HTMLInputElement>(null);

  const handleClearBtnClick = useCallback(() => {
    dispatch(setSearchText(''));
    inputRef.current?.focus();
  }, []);

  return (
    <header className={headerClass}>
      <div className={inputContainerClass}>
        <OpenNavbarBtn />
        <input
          className={inputClass}
          ref={inputRef}
          type="search"
          placeholder="Search your notes"
          value={searchText}
          onChange={handleInputChange}
        />
        {searchText.length > 0 && (
          <button className={clearInputBtnClass} type="button" onClick={handleClearBtnClick}>
            <MdClose size="100%" />
          </button>
        )}
      </div>
    </header>
  );
};
