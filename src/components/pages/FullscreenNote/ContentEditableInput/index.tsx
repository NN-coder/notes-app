import React from 'react';
import { containerClass, inputClass, placeholderClass } from './style.css';

export interface Props {
  value: string;
  handleInput: (event: React.FormEvent<HTMLDivElement>) => void;
  placeholder?: string;
  className?: string;
}

export const ContentEditableInput: React.FC<Props> = ({
  className,
  value,
  handleInput,
  placeholder,
}) => (
  <div className={`${containerClass} ${className}`}>
    {!!placeholder && ['', '\n'].includes(value) && (
      <div className={placeholderClass}>{placeholder}</div>
    )}
    <div
      contentEditable
      suppressContentEditableWarning
      role="textbox"
      className={inputClass}
      onInput={handleInput}
    >
      {value}
    </div>
  </div>
);
