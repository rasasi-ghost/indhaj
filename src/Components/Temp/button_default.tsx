import React from 'react';
import { Button } from 'reactstrap';
import './button_default.scss';

interface CustomButtonProps {
  outline?: boolean;
  color: string;
  className?: string;
  onClick: () => void;
  children: React.ReactNode;
  size?: 'default' | 'small';
  width?: string;
}

const CustomButton: React.FC<CustomButtonProps> = ({ 
  outline, 
  color, 
  className, 
  onClick, 
  children, 
  size = 'default',
  width
}) => {
  const buttonClass = `custom-button-relative ${size === 'small' ? 'custom-button-small' : ''} ${className || ''}`;
  
  const buttonStyle = width ? { width } : {};
  
  return (
    <Button 
      outline={outline} 
      color={color} 
      className={buttonClass} 
      onClick={onClick}
      style={buttonStyle}
    >
      {children}
    </Button>
  );
};

export default CustomButton;
