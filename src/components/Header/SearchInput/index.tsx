import React, { useCallback, ChangeEvent } from 'react';
import { MdClose } from 'react-icons/md';
import { setSearchText } from '../../../redux/actions/searchActions';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import { clearInputBtnClass, inputClass, inputContainerClass } from './style.css';

export const SearchInput: React.FC = () => {
  const searchText = useAppSelector((state) => state.searchState.searchText);
  const dispatch = useAppDispatch();

  const handleInputChange = useCallback(
    ({ target }: ChangeEvent<HTMLInputElement>) => dispatch(setSearchText(target.value)),
    [dispatch]
  );

  const handleClearBtnClick = useCallback(() => dispatch(setSearchText('')), [dispatch]);

  return (
    <div className={inputContainerClass}>
      <input
        className={inputClass}
        type="text"
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
