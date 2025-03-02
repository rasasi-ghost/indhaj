import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'reactstrap';
import InfoIcon from '@mui/icons-material/Info'; // Import the information icon from MUI
import TwitterIcon from '@mui/icons-material/Twitter'; // Import Twitter icon from MUI
import InstagramIcon from '@mui/icons-material/Instagram'; // Import Instagram icon from MUI
import LinkedInIcon from '@mui/icons-material/LinkedIn'; // Import LinkedIn icon from MUI
import WhatsAppIcon from '@mui/icons-material/WhatsApp'; // Import WhatsApp icon from MUI
import '../../configs/style.scss'; // Import the global style file
import './registration.scss'; // Import the SCSS file
import LandingImage from '../../assets/landing_login.png'; // Import the image
import Logo from '../../assets/logo.png'; // Import the image
import BGImage from '../../assets/image.png'; // Import the background image
import CustomTextField from '../../components/textfields'; // Import the CustomTextField component
import RegisterLayout from '../../components/register_layout'; // Import the RegisterLayout component
import { useNavigate } from 'react-router-dom';
import { handleRegister } from '../../controllers/auth';
import registerState from '../../states/register_state';

const ImageWithText = () => (
    <div className="d-flex flex-column align-items-center">
        <img src={LandingImage} alt="Center" className="img-fluid landing-image" />
        <h1 className="new-styles"> نقدم لك افضل تجربة مستخدم </h1>
        <p> هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما.</p>
    </div>
);

const FormComponent = () => {
    const [name, setName] = useState('');
    const [mobile, setMobile] = useState('');
    const [email, setEmail] = useState('');
    const [department, setDepartment] = useState('');

    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const success = await handleRegister(name, mobile, email, department);
        if (success) {
            navigate('/success');
        }
    };

    return (
        <div className="w-75">
            <div className="text-center pt-5">
                <h2 className="welcome-text">مرحبا!!</h2>
                <p>تفضل بتسجيل حساب جديد</p>
            </div>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">الاسم</label>
                    <CustomTextField
                        id="name"
                        placeholder="أدخل الاسم"
                        iconType="person"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="mobile" className="form-label">رقم الجوال</label>
                    <CustomTextField
                        id="mobile"
                        placeholder="أدخل رقم الجوال"
                        iconType="person"
                        value={mobile}
                        onChange={(e) => setMobile(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="box" className="form-label">البريد</label>
                    <CustomTextField
                        id="box"
                        placeholder="أدخل البريد"
                        iconType="person"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="department" className="form-label">اسم الجهة</label>
                    <CustomTextField
                        id="department"
                        placeholder="أدخل اسم الجهة"
                        iconType="person"
                        value={department}
                        onChange={(e) => setDepartment(e.target.value)}
                    />
                </div>
                <div className="text-start mt-3">
                    <Button style={{ color: '#56CB96' }} color="link" className="p-0 text-button">اطلب دومين لمؤسستك</Button>
                </div>
                <div className="pt-5"> {/* Add vertical padding */}
                    <Button color="primary" type="submit" disabled={registerState.loading}>
                        {registerState.loading ? 'جاري التسجيل...' : 'تسجيل'}
                    </Button>
                </div>
            </form>
            <div className="text-center mt-3">
                <Button color="link" className="p-0 text-button">
                    <InfoIcon className="me-1" /> تحتاج مساعدة
                </Button>
            </div>
            <div className="d-flex justify-content-center mt-3 pt-3"> {/* Add top padding */}
                <TwitterIcon className="me-3 icon-color" fontSize='medium' />
                <InstagramIcon className="me-3 icon-color" fontSize="medium" />
                <LinkedInIcon className="me-3 icon-color" fontSize="medium" />
                <WhatsAppIcon className="me-3 icon-color" fontSize="medium" />
            </div>
        </div>
    );
};

function Registration() {

    const navigate = useNavigate();

    const handleRegisterClick = () => {
        navigate('/login');
    };
    return (
        <RegisterLayout
            form={<FormComponent />}
            logo={Logo}
            icon={
                <>

                </>
            }
            texts={<ImageWithText />}
            backgroundImage={BGImage}
            floatingButton={
                <Button outline color="white" className="position-absolute btn-outline" onClick={() => { handleRegisterClick() }}> تسجيل دخول</Button>
            }
        />
    );
}

export default Registration;
