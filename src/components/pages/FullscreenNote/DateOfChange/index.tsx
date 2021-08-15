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

  if (currentDate.getMonth() === dateOfChange.getMonth()) {
    const changedToday = currentDate.getDate() - dateOfChange.getDate() === 0;
    const changedYesterday = currentDate.getDate() - dateOfChange.getDate() === 1;

    const formattedDate = dateOfChange.toLocaleString('en', {
      hour12: false,
      hour: '2-digit',
      minute: '2-digit',
    });

    if (changedYesterday) return `Yesterday, ${formattedDate}`;
    if (changedToday) return formattedDate;
  }

  return dateOfChange.toLocaleString('en', {
    month: 'short',
    day: 'numeric',
  });
};

export interface Props {
  dateOfChange: Date;
}

export const DateOfChange: React.FC<Props> = React.memo(({ dateOfChange }) => (
  <div className={dateOfChangeClass}>Edited {formatDateOfChange(dateOfChange)}</div>
));
