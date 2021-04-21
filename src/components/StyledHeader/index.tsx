import React from 'react';
import styled from 'styled-components/macro';
import { StyledSearchInput } from './StyledSearchInput';

export interface Props {
  className?: string;
}

const Header: React.FC<Props> = ({ className }) => (
  <header className={className}>
    <StyledSearchInput />
  </header>
);

export const StyledHeader = styled(Header)`
  padding: 8px;
`;
