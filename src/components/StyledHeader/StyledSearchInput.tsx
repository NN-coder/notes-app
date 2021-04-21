import React, { useCallback, ChangeEvent } from 'react';
import styled from 'styled-components/macro';
import { setSearchText } from '../../redux/actions/searchActions';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';

export interface Props {
  className?: string;
}

const SearchInput: React.FC<Props> = ({ className }) => {
  const searchText = useAppSelector((state) => state.search.searchText);
  const dispatch = useAppDispatch();

  const handleInputChange = useCallback(
    ({ target }: ChangeEvent<HTMLInputElement>) => dispatch(setSearchText(target.value)),
    [dispatch]
  );

  return (
    <input
      placeholder="Search your notes"
      className={className}
      value={searchText}
      onChange={handleInputChange}
    />
  );
};

export const StyledSearchInput = styled(SearchInput)`
  width: 100%;
  height: 45px;
  padding: 0 60px;
  font-size: 1.6rem;
  background-color: #2e2f33;
  border: none;
  border-radius: 5px;
`;
