import React, { useCallback, useRef, ChangeEvent } from 'react';
import { MdClose } from 'react-icons/md';
import { setSearchText } from '../../../redux/actions/searchActions';
import { useAppDispatch, useAppSelector } from '../../../redux/utils/hooks';
import { clearInputBtnClass, inputClass, inputContainerClass } from './style.css';

export const SearchInput: React.FC = () => {
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
    <div className={inputContainerClass}>
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
  );
};
