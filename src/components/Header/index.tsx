import React from 'react';
import { SearchInput } from './SearchInput';
import { headerClass } from './style.css';

export const Header: React.FC = () => (
  <header className={headerClass}>
    <SearchInput />
  </header>
);
