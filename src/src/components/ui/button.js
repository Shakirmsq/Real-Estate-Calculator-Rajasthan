// src/components/ui/button.js
import React from 'react';

export const Button = ({ onClick, className, children }) => (
  <button
    onClick={onClick}
    className={`bg-blue-500 text-white rounded p-2 ${className}`}
  >
    {children}
  </button>
);
