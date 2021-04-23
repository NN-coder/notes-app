import React, { ReactNode } from 'react';
import styled from 'styled-components';

export interface Props {
  children: ReactNode;
  className?: string;
}

const MasonryColumn: React.FC<Props> = ({ children, className }) => (
  <div className={className}>{children}</div>
);

export const StyledMasonryColumn = styled(MasonryColumn)`
  display: flex;
  flex-direction: column;
`;
