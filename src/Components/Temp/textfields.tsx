// import React from 'react';
// import { Input, InputGroup, InputGroupText } from 'reactstrap';
// import './textfields.scss'; // Import the SCSS file

// interface CustomTextFieldProps {
//   id: string;
//   placeholder: string;
//   type?: string;
//   iconType: 'person' | 'lock';
//   value: string;
//   onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
// }

// const CustomTextField: React.FC<CustomTextFieldProps> = ({ id, placeholder, type = 'text', iconType, value, onChange }) => {
//   const getIcon = () => {
//     switch (iconType) {
//       case 'person':
//         return <i className="fas fa-user"></i>;
//       case 'lock':
//         return <i className="fas fa-lock"></i>;
//       default:
//         return null;
//     }
//   };

//   return (
//     <InputGroup>
//       <InputGroupText className="custom-input-icon">
//         {getIcon()}
//       </InputGroupText>
//       <Input
//         id={id}
//         type={type}
//         placeholder={placeholder}
//         value={value}
//         onChange={onChange}
//         className="custom-input"
//       />
//     </InputGroup>
//   );
// };

// export default CustomTextField;