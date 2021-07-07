import React from 'react';
import { dateOfChangeClass } from './style.css';

const formatDateOfChange = (dateOfChange: Date) => {
  const currentDate = new Date();

  if (currentDate.getFullYear() !== dateOfChange.getFullYear()) {
    return dateOfChange.toLocaleString('en', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  }

  if (
    currentDate.getMonth() === dateOfChange.getMonth() &&
    currentDate.getDate() === dateOfChange.getDate()
  ) {
    return dateOfChange.toLocaleString('en', {
      hour12: false,
      hour: '2-digit',
      minute: '2-digit',
    });
  }

  return dateOfChange.toLocaleString('en', {
    month: 'short',
    day: 'numeric',
  });
};

export interface Props {
  dateOfChange: Date;
}

export const DateOfChange: React.FC<Props> = ({ dateOfChange }) => (
  <div className={dateOfChangeClass}>Edited {formatDateOfChange(dateOfChange)}</div>
);
