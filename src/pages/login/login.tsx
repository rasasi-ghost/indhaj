import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'reactstrap';
import InfoIcon from '@mui/icons-material/Info';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import '../../configs/style.scss';
import './login.scss';
import LandingImage from '../../assets/landing_login.png';
import Logo from '../../assets/logo.png';
import BGImage from '../../assets/image.png';
import CustomTextField from '../../components/textfields';
import RegisterLayout from '../../components/register_layout';
import { observer } from 'mobx-react-lite';
import loginState from '../../states/login_state';
import { login } from '../../controllers/auth';

const ImageWithText = () => (
  <div className="d-flex flex-column align-items-center">
        <img src={LandingImage} alt="Center" className="img-fluid landing-image" />
    <h1 className="new-styles"> نقدم لك افضل تجربة مستخدم </h1>
    <p> هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما.</p>
  </div>
);

const FormComponent = observer(() => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    if (!username || !password) {
      loginState.setError(true, "الرجاء إدخال البيانات بشكل صحيح");
      return;
    }
    loginState.setError(false, "");
    
    const success = await login(username, password);
    if (success) {
      navigate('/'); // Redirect to home page on successful login
    }
  };

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
    if (e.target.value && password) {
      loginState.setError(false, ""); // Clear error message when fields are valid
    }
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    if (username && e.target.value) {
      loginState.setError(false, ""); // Clear error message when fields are valid
    }
  };

  return (
    <div className="w-75">
      <div className="text-center pt-5">
        <h2 className="welcome-text">مرحبا!!</h2>
        <p>تفضل بتسجيل الدخول الى حسابك</p>
      </div>
      <form className="mt-4">
        <div className="mb-3">
          <label htmlFor="username" className="form-label">اسم المستخدم</label>
          <CustomTextField
            id="username"
            placeholder="أدخل اسم المستخدم"
            iconType="person"
            value={username}
            onChange={handleUsernameChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">كلمة المرور</label>
          <CustomTextField
            id="password"
            type="password"
            placeholder="أدخل كلمة المرور"
            iconType="lock"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        {loginState.isError && <div className="text-danger">{loginState.errorMessage}</div>}
        <div className="text-start mt-3">
          <Button color="link" className="p-0 text-button">هل نسيت كلمة السر؟</Button>
        </div>
        <div className="pt-5">
          <Button color="primary" onClick={handleLogin} disabled={loginState.isLoading}>
            {loginState.isLoading ? "جاري التحميل..." : "تسجيل الدخول"}
          </Button>
        </div>
      </form>
      <div className="text-center mt-3">
        <Button color="link" className="p-0 text-button">
          <InfoIcon className="me-1" /> تحتاج مساعدة
        </Button>
      </div>
      <div className="d-flex justify-content-center mt-3 pt-3">
        <TwitterIcon className="me-3 icon-color" fontSize='medium' />
        <InstagramIcon className="me-3 icon-color" fontSize="medium" />
        <LinkedInIcon className="me-3 icon-color" fontSize="medium" />
        <WhatsAppIcon className="me-3 icon-color" fontSize="medium" />
      </div>
    </div>
  );
});

function App() {
  const navigate = useNavigate();

  const handleRegisterClick = () => {
    navigate('/registration');
  };

  return (
    <RegisterLayout
      form={<FormComponent />}
      logo={Logo}
      icon={<></>}
      texts={<ImageWithText />}
      backgroundImage={BGImage}
      floatingButton={
                <Button outline color="white" className="position-absolute btn-outline" onClick={() => { handleRegisterClick() }}> أنشئ حساب</Button>
      }
    />
  );
}

export default App;
