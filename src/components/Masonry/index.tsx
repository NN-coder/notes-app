import React, { ReactNode } from 'react';
import shortid from 'shortid';
import { MasonryColumn } from './MasonryColumn';

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
}

export const Masonry: React.FC<Props> = ({
  columnsCount,
  children,
  columnGap = '0',
  rowGap = '0',
}) => (
  <div
    style={{
      display: 'grid',
      gridTemplateColumns: `repeat(${columnsCount}, 1fr)`,
      columnGap: formatGapValue(columnGap),
    }}
  >
    {createColumns(columnsCount, children).map((column, index) => (
      <MasonryColumn key={columnKeys[index] || getNewColumnKey()} gap={formatGapValue(rowGap)}>
        {column}
      </MasonryColumn>
    ))}
  </div>
);
