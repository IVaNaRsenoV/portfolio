import React from 'react';
import './button.css';

interface ButtonProps {
  label: string;
}


export const UiButton = ({
  label,
}: ButtonProps) => {

  return (
    <button className="btn">
      {label}
    </button>
  );
};
