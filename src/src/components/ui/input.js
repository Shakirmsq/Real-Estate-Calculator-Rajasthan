// src/components/ui/input.js
import React from 'react';

export const Input = ({ type, name, value, onChange, placeholder, className }) => (
  <input
    type={type}
    name={name}
    value={value}
    onChange={onChange}
    placeholder={placeholder}
    className={`border rounded p-2 ${className}`}
  />
);
