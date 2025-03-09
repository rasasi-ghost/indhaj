import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
// Import Bootstrap in a way that doesn't affect other components
import { 
  Button,
  Card,
  CardBody,
  Form,
  Alert,
  Spinner,
  Label,
  Row,
  Input,
} from 'reactstrap';
import LandingImage from '../../assets/template/landing_login.png';
import Logo from '../../assets/template/logo.png';
import BGImage from '../../assets/template/image.png';
import RegisterLayout from '../../Components/Temp/register_layout';
import { observer } from 'mobx-react-lite';
import loginState from '../../states/login_state';
import { login } from '../../controllers/auth';
// For validation
import * as Yup from "yup";
import { useFormik } from "formik";

// Create a component that imports Bootstrap CSS locally
const BootstrapContainer = ({ children }) => {
  // This creates a dynamic import for Bootstrap CSS that only applies to this component tree
  // It uses React's useEffect to import the CSS when the component mounts
  useEffect(() => {
    // Create a link element
    const bootstrapLink = document.createElement('link');
    bootstrapLink.rel = 'stylesheet';
    bootstrapLink.href = 'https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css';
    bootstrapLink.integrity = 'sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3';
    bootstrapLink.crossOrigin = 'anonymous';
    
    // Add an id to easily find and remove this later
    bootstrapLink.id = 'login-bootstrap-css';
    
    // Append to head
    document.head.appendChild(bootstrapLink);
    
    // Clean up function to remove the link when component unmounts
    return () => {
      const linkElement = document.getElementById('login-bootstrap-css');
      if (linkElement) {
        document.head.removeChild(linkElement);
      }
    };
  }, []);
  
  return <>{children}</>;
};

// Custom inline styles to replace SCSS dependencies
const styles: any = {
  formControl: {
    backgroundColor: '#0A1C32',
    color: 'white',
    border: 'none', // Ensuring no border
    borderRadius: '7px',
    textAlign: 'right' as 'right',
    height: '50px',
    paddingLeft: '35px',
    paddingRight: '15px',
  },
  formLabel: {
    color: '#c1c1c1'
  },
  card: {
    backgroundColor: '#0E223A',
    border: 'none',
    borderRadius: '15px',
    boxShadow: '0 5px 15px rgba(0, 0, 0, 0.2)'
  },
  primaryButton: {
    backgroundColor: '#56CB96',
    color: '#0E223A',
    border: 'none',
    borderRadius: '44px',
    width: '100%',
    height: '50px'
  },
  textButton: {
    color: '#c1c1c1',
    textDecoration: 'none'
  },
  welcomeText: {
    fontWeight: 'bold',
    color: 'white'
  },
  formIconContainer: {
    position: 'relative' as 'relative',
  },
  formIcon: {
    position: 'absolute',
    left: '15px',
    top: '50%',
    transform: 'translateY(-50%)',
    color: 'white',
    zIndex: 10
  },
  socialButton: {
    width: '36px',
    height: '36px',
    padding: '0',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '50%',
    margin: '0 0.25rem'
  },
  divider: {
    position: 'relative',
    textAlign: 'center',
    marginBottom: '1rem',
    marginTop: '1rem'
  },
  dividerLine: {
    position: 'absolute',
    width: '100%',
    height: '1px',
    backgroundColor: 'rgba(255,255,255,0.1)',
    top: '50%',
    left: '0',
    zIndex: '0'
  },
  dividerTitle: {
    display: 'inline-block',
    position: 'relative',
    zIndex: '1',
    backgroundColor: '#0E223A',
    padding: '0 1rem',
    color: '#c1c1c1',
    fontSize: '13px'
  },
  outlineButton: {
    color: 'white',
    borderColor: 'white',
    borderRadius: '44px',
    position: 'absolute',
    top: '30px',
    right: '30px',
    width: '30%',
    height: '50px'
  },
  passwordToggleButton: {
    position: 'absolute',
    top: '50%',
    right: '15px',
    transform: 'translateY(-50%)',
    background: 'transparent',
    border: 'none',
    color: '#c1c1c1',
    cursor: 'pointer',
    padding: '0',
    zIndex: '10'
  }
};

// Image with text component
const ImageWithText = () => (
  <div className="d-flex flex-column align-items-center">
    <img src={LandingImage} alt="Center" className="img-fluid" style={{ width: '90%' }} />
    <h1 className="fw-bold text-primary"> نقدم لك افضل تجربة مستخدم </h1>
    <p className="text-white"> هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما.</p>
  </div>
);

const FormComponent = observer(() => {
  const [passwordShow, setPasswordShow] = useState<boolean>(false);
  const navigate = useNavigate();

  const validation = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    validationSchema: Yup.object({
      username: Yup.string().required("الرجاء إدخال اسم المستخدم"),
      password: Yup.string().required("الرجاء إدخال كلمة المرور"),
    }),
    onSubmit: async (values) => {
      loginState.setLoading(true);
      try {
        const success = await login(values.username, values.password);
        if (success) {
          navigate('/dashboard');
        }
      } finally {
        loginState.setLoading(false);
      }
    }
  });

  useEffect(() => {
    if (loginState.isError) {
      setTimeout(() => {
        loginState.setError(false, "");
      }, 3000);
    }
  }, [loginState.isError]);

  return (
    <div className="w-75">
      <div className="text-center pt-5">
        <h2 style={styles.welcomeText}>مرحبا!!</h2>
        <p className="text-white">تفضل بتسجيل الدخول الى حسابك</p>
      </div>
      <div className="mt-4">
        <div className="p-4">
          {loginState.isError && <Alert color="danger">{loginState.errorMessage}</Alert>}
          <div className="p-2 mt-4">
            <Form
              onSubmit={(e) => {
                e.preventDefault();
                validation.handleSubmit();
                return false;
              }}
              action="#"
            >
              <div className="mb-3">
                <Label htmlFor="username" style={styles.formLabel}>اسم المستخدم</Label>
                <div className="form-icon position-relative">
                  <Input
                    id="username"
                    name="username"
                    className="form-control form-control-icon"
                    style={{ 
                      background: '#0A1C32', 
                      color: 'white', 
                      border: 'none',   // Ensuring no border
                      outline: 'none'    // Removing outline too
                    }}
                    placeholder="أدخل اسم المستخدم"
                    value={validation.values.username || ""}
                    onChange={validation.handleChange}
                    invalid={validation.touched.username && validation.errors.username ? true : false}
                  />
                  <i className="ri-user-line position-absolute"
                    style={{  color: 'grey' }}></i>
                </div>
                {validation.touched.username && validation.errors.username ? (
                  <div className="text-danger">{validation.errors.username}</div>
                ) : null}
              </div>

              <div className="mb-3">
                <div className="d-flex justify-content-between">
                  <Label htmlFor="password" style={styles.formLabel}>كلمة المرور</Label>
                </div>
                <div className="form-icon position-relative">
                  <Input
                    id="password"
                    name="password"
                    type={passwordShow ? "text" : "password"}
                    placeholder="أدخل كلمة المرور"
                    value={validation.values.password || ""}
                    onChange={validation.handleChange}
                    style={{ 
                      background: '#0A1C32', 
                      color: 'white', 
                      border: 'none',   // Ensuring no border
                      outline: 'none'    // Removing outline too 
                    }}
                    className="form-control form-control-icon"
                    invalid={validation.touched.password && validation.errors.password ? true : false}
                  />
                  <i className="ri-lock-line position-absolute"
                    style={{  color: 'grey' }}></i>
                  <button
                    type="button"
                    onClick={() => setPasswordShow(!passwordShow)}
                    style={styles.passwordToggleButton}
                    className="bg-transparent border-0 text-white-50"
                  >
                    <i className={passwordShow ? "fas fa-eye-slash" : "fas fa-eye"}></i>
                  </button>
                </div>
                {validation.touched.password && validation.errors.password ? (
                  <div className="text-danger">{validation.errors.password}</div>
                ) : null}
              </div>

              <div className="form-check text-end mt-2">
                <input className="form-check-input" type="checkbox" id="auth-remember-check" />
                <label className="form-check-label text-white" htmlFor="auth-remember-check">تذكرني</label>
              </div>

              <div className="pt-4">
                <Button
                  color="primary"
                  type="submit"
                  disabled={loginState.isLoading}
                  style={styles.primaryButton}
                  className="w-100"
                >
                  {loginState.isLoading ? (
                    <>
                      <Spinner size="sm" className="me-2" /> جاري التحميل...
                    </>
                  ) : "تسجيل الدخول"}
                </Button>
              </div>

              <div className="mt-4 text-center">
                <div style={styles.divider}>
                  <div style={styles.dividerLine}></div>
                  <h5 style={styles.dividerTitle}>تحتاج مساعدة  </h5>
                </div>
                <Row>
                  <div className="d-flex justify-content-center gap-2">
                    <Button color="primary" style={styles.socialButton}>
                      <i className="ri-facebook-fill fs-16"></i>
                    </Button>
                    <Button color="danger" style={styles.socialButton}>
                      <i className="ri-google-fill fs-16"></i>
                    </Button>
                    <Button color="dark" style={styles.socialButton}>
                      <i className="ri-github-fill fs-16"></i>
                    </Button>
                    <Button color="info" style={styles.socialButton}>
                      <i className="ri-twitter-fill fs-16"></i>
                    </Button>
                  </div>
                </Row>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
});

function LoginPage() {
  const navigate = useNavigate();

  const handleRegisterClick = () => {
    navigate('/register');
  };

  return (
    <BootstrapContainer>
      <RegisterLayout
        form={<FormComponent />}
        logo={Logo}
        icon={<></>}
        texts={<ImageWithText />}
        backgroundImage={BGImage}
        floatingButton={
          <Button outline color="white" style={styles.outlineButton} onClick={handleRegisterClick}> أنشئ حساب</Button>
        }
      />
    </BootstrapContainer>
  );
}

export default LoginPage;