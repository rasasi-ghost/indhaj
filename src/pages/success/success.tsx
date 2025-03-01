import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import './success.scss';
import SuccessImage from '../../assets/success.png'; // Import the image

import LandingImage from '../../assets/landing_login.png'; // Import the image
import Logo from '../../assets/logo.png'; // Import the image
import BGImage from '../../assets/image.png'; // Import the background image
import CustomTextField from '../../components/textfields'; // Import the CustomTextField component
import RegisterLayout from '../../components/register_layout'; // Import the RegisterLayout component
const SuccessPage: React.FC = () => {
    return (
        <div className="d-flex flex-column align-items-center justify-content-center vh-100" style={{ backgroundImage: `url(${BGImage})`, backgroundRepeat: 'no-repeat' }}>
            <img src={Logo} alt="Top Left" className="img-fluid logo-image" />
            <img src={SuccessImage} alt="Center" className="img-fluid landing-image" style={{ objectFit: 'contain', height: '60vh' }} />
            <h1 className="new-styles"> شكرا، تم إنشاء حسابك بنجاح. </h1>
            <p> سيتم التواصل معك في اقرب وقت من طرف فريقنا.</p>
        </div>
    );
};

export default SuccessPage;