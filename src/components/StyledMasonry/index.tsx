import React, { ReactNode } from 'react';
import shortid from 'shortid';
import styled from 'styled-components';
import { StyledMasonryColumn } from './StyledMasonryColumn';

const formatGapValue = (gap: number | string) => (typeof gap === 'number' ? `${gap}px` : gap);

const createColumns = (columnsCount: number, children: ReactNode) => {
  const columns = Array.from({ length: columnsCount }, () => [] as ReactNode[]);
  React.Children.forEach(children, (child, index) => columns[index % columnsCount].push(child));
  return columns;
};

const columnKeys: string[] = [];
const getNewColumnKey = () => columnKeys[columnKeys.push(shortid.generate()) - 1];

export interface Props {
  columnsCount: number;
  children: ReactNode;
  columnGap?: number | string;
  rowGap?: number | string;
  className?: string;
}

const Masonry: React.FC<Props> = ({ columnsCount, children, className, columnGap = '0' }) => (
  <div
    className={className}
    style={{
      display: 'grid',
      gridTemplateColumns: `repeat(${columnsCount}, 1fr)`,
      columnGap: formatGapValue(columnGap),
    }}
  >
    {createColumns(columnsCount, children).map((column, index) => (
      <StyledMasonryColumn key={columnKeys[index] || getNewColumnKey()}>
        {column}
      </StyledMasonryColumn>
    ))}
  </div>
);

export const StyledMasonry = styled(Masonry)`
  ${StyledMasonryColumn} > *:nth-child(n + 2) {
    margin-top: ${({ rowGap = '0' }) => formatGapValue(rowGap)};
  }
`;
