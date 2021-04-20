import React from 'react';
import styled from 'styled-components/macro';
import { INote } from '../api/types';

export interface Props extends INote {
  className?: string;
}

const Note: React.FC<Props> = ({ text, className }) => <div className={className}>{text}</div>;

export const StyledNote = styled(Note)`
  padding: 15px;
  font-size: 1.5rem;
  border: 1px solid var(--border-color);
  border-radius: 5px;
`;
