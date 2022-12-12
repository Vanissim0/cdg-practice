import React from 'react';

export const Button = ({ children, onClick, ariaLabel, ...props }) => {
  return (
    <button
      {...props}
      aria-label={ariaLabel}
      type="button"
      className="blue"
      onClick={onClick}
    >
      {children}
    </button>
  );
};