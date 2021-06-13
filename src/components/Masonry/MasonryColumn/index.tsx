import React, { Children, ReactNode } from 'react';
import { masonryColumnClass } from './style.css';

export interface Props {
  children: ReactNode;
  gap: string;
}

export const MasonryColumn: React.FC<Props> = ({ children, gap }) => (
  <div className={masonryColumnClass}>
    {Children.map(children, (child, index) => (
      <div style={{ marginTop: index === 0 ? '0' : gap }}>{child}</div>
    ))}
  </div>
);
