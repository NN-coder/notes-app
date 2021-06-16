import React, { ReactNode } from 'react';
import { masonryColumnClass } from './style.css';

export interface Props {
  children: ReactNode;
}

export const MasonryColumn: React.FC<Props> = ({ children }) => (
  <div className={masonryColumnClass}>{children}</div>
);
