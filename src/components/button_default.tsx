import React from 'react';
import { Button } from 'reactstrap';
import './button_default.scss';

interface CustomButtonProps {
  outline?: boolean;
  color: string;
  className?: string;
  onClick: () => void;
  children: React.ReactNode;
}

const CustomButton: React.FC<CustomButtonProps> = ({ outline, color, className, onClick, children }) => {
  return (
    <Button outline={outline} color={color} className={`custom-button-relative ${className}`} onClick={onClick} >
      {children}
    </Button>
  );
};

export default CustomButton;
