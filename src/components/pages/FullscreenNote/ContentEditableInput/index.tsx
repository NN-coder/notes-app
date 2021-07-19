import React from 'react';
import { containerClass, inputClass, placeholderClass } from './style.css';

export interface Props {
  value: string;
  handleInput: (event: React.FormEvent<HTMLDivElement>) => void;
  placeholder?: string;
  disabled?: boolean;
  className?: string;
}

export const ContentEditableInput: React.FC<Props> = ({
  className,
  value,
  handleInput,
  placeholder,
  disabled,
}) => {
  const isPlaceholderNeeded = !!placeholder && ['', '\n', '\r', '\r\n'].includes(value);

  return (
    <div className={`${containerClass} ${className}`}>
      {isPlaceholderNeeded && (
        <div className={placeholderClass} aria-hidden>
          {placeholder}
        </div>
      )}
      <div
        contentEditable={!disabled}
        suppressContentEditableWarning
        role="textbox"
        className={inputClass}
        onInput={handleInput}
        {...(isPlaceholderNeeded && { 'aria-label': placeholder })}
      >
        {value}
      </div>
    </div>
  );
};
