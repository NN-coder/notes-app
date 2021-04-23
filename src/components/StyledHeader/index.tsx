import React from 'react';
import styled from 'styled-components';
import { SearchInput } from './SearchInput';

export interface Props {
  className?: string;
}

const Header: React.FC<Props> = ({ className }) => (
  <header className={className}>
    <SearchInput />
  </header>
);

export const StyledHeader = styled(Header)`
  margin-bottom: 5px;
  padding: 8px;
`;
