import React from 'react';
import { TextField, InputAdornment } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import LockIcon from '@mui/icons-material/Lock';
import './textfields.scss'; // Import the SCSS file

interface CustomTextFieldProps {
  id: string;
  placeholder: string;
  type?: string;
  iconType: 'person' | 'lock';
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const CustomTextField: React.FC<CustomTextFieldProps> = ({ id, placeholder, type = 'text', iconType, value, onChange }) => {
  const getIcon = () => {
    switch (iconType) {
      case 'person':
        return <PersonIcon />;
      case 'lock':
        return <LockIcon />;
      default:
        return null;
    }
  };

  return (
    <TextField
      fullWidth
      id={id}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            {getIcon()}
          </InputAdornment>
        ),
        className: 'custom-input'
      }}
    />
  );
};

export default CustomTextField;