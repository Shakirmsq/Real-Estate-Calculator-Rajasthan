// src/components/ui/alert.js
import React from 'react';

export const Alert = ({ className, children }) => (
  <div className={`bg-yellow-100 border border-yellow-400 text-yellow-700 p-4 rounded ${className}`}>
    {children}
  </div>
);

export const AlertTitle = ({ children }) => (
  <h3 className="font-bold text-lg">
    {children}
  </h3>
);

export const AlertDescription = ({ children }) => (
  <p>
    {children}
  </p>
);
