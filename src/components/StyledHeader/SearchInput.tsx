import React, { useCallback, ChangeEvent } from 'react';
import styled from 'styled-components';
import { MdClose } from 'react-icons/md';
import { setSearchText } from '../../redux/actions/searchActions';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';

const InputContainer = styled.div`
  position: relative;
`;

const Input = styled.input.attrs({ type: 'text', placeholder: 'Search your notes' })`
  width: 100%;
  height: 45px;
  padding: 0 60px;
  font-size: 1.6rem;
  background-color: ${({ theme }) => theme.searchInput.bg};
  border: none;
  border-radius: 5px;
  box-shadow: ${({ theme }) => theme.searchInput.shadow};
  &::placeholder {
    color: ${({ theme }) => theme.searchInput.controls};
    opacity: 0.8;
  }
`;

const ClearInputBtn = styled.button.attrs({ type: 'button' })`
  position: absolute;
  top: calc(50% - 15px);
  right: 10px;
  width: 30px;
  height: 30px;
  color: ${({ theme }) => theme.searchInput.controls};
`;

export const SearchInput: React.FC = () => {
  const searchText = useAppSelector((state) => state.searchState.searchText);
  const dispatch = useAppDispatch();

  const handleInputChange = useCallback(
    ({ target }: ChangeEvent<HTMLInputElement>) => dispatch(setSearchText(target.value)),
    [dispatch]
  );

  const handleClearBtnClick = useCallback(() => dispatch(setSearchText('')), [dispatch]);

  return (
    <InputContainer>
      <Input value={searchText} onChange={handleInputChange} />
      {searchText.length > 0 && (
        <ClearInputBtn type="button" onClick={handleClearBtnClick}>
          <MdClose size="100%" />
        </ClearInputBtn>
      )}
    </InputContainer>
  );
};
