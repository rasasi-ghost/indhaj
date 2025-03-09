import React, { useState, useEffect } from 'react';
import {
    Button,
    Input,
    Card,
    CardBody,
    Form,
    Alert,
    Label,
    Spinner
} from 'reactstrap';
import LandingImage from '../../assets/template/landing_login.png';
import Logo from '../../assets/template/logo.png';
import BGImage from '../../assets/template/image.png';
import RegisterLayout from '../../Components/Temp/register_layout';
import { useNavigate, Link } from 'react-router-dom';
import { handleRegister } from '../../controllers/auth';
import registerState from '../../states/register_state';
import * as Yup from "yup";
import { useFormik } from "formik";

// Create a component that imports Bootstrap CSS locally
const BootstrapContainer = ({ children }) => {
  // This creates a dynamic import for Bootstrap CSS that only applies to this component tree
  useEffect(() => {
    // Create a link element
    const bootstrapLink = document.createElement('link');
    bootstrapLink.rel = 'stylesheet';
    bootstrapLink.href = 'https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css';
    bootstrapLink.integrity = 'sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3';
    bootstrapLink.crossOrigin = 'anonymous';
    
    // Add an id to easily find and remove this later
    bootstrapLink.id = 'registration-bootstrap-css';
    
    // Append to head
    document.head.appendChild(bootstrapLink);
    
    // Clean up function to remove the link when component unmounts
    return () => {
      const linkElement = document.getElementById('registration-bootstrap-css');
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
    }
};

const ImageWithText = () => (
    <div className="d-flex flex-column align-items-center">
        <img src={LandingImage} alt="Center" className="img-fluid" style={{ width: '90%' }} />
        <h1 className="fw-bold text-primary"> نقدم لك افضل تجربة مستخدم </h1>
        <p className="text-white"> هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما.</p>
    </div>
);

const FormComponent = () => {
    const navigate = useNavigate();
    const [passwordShow, setPasswordShow] = useState<boolean>(false);

    const validation = useFormik({
        initialValues: {
            name: '',
            mobile: '',
            email: '',
            password: '',
            department: ''
        },
        validationSchema: Yup.object({
            mobile: Yup.string().required("الرجاء إدخال رقم الجوال"),
            email: Yup.string().email("البريد الإلكتروني غير صحيح").required("الرجاء إدخال البريد الإلكتروني"),
            password: Yup.string().required("الرجاء إدخال كلمة المرور"),
            department: Yup.string().required("الرجاء إدخال اسم الجهة")
        }),
        onSubmit: async (values) => {
            registerState.setLoading(true);
            try {
                const success = await handleRegister(values.mobile, values.email, values.password, values.department);
                if (success) {
                    navigate('/success');
                }
            } finally {
                registerState.setLoading(false);
            }
        }
    });

    return (
        <div className="w-75">
          
            <div className="mt-4">
                <div className="p-4">
                    {registerState.error && <Alert color="danger">{registerState.errorMessage}</Alert>}
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
                                <Label htmlFor="mobile" style={styles.formLabel}>رقم الجوال</Label>
                                <div className="form-icon position-relative">
                                    <Input
                                        id="mobile"
                                        name="mobile"
                                        placeholder="أدخل رقم الجوال"
                                        value={validation.values.mobile || ""}
                                        onChange={validation.handleChange}
                                        style={{ 
                                            background: '#0A1C32', 
                                            color: 'white', 
                                            border: 'none',   // Ensuring no border 
                                            outline: 'none'    // Removing outline too
                                        }}
                                        className="form-control form-control-icon"
                                        invalid={validation.touched.mobile && validation.errors.mobile ? true : false}
                                    />
                                    <i className="ri-smartphone-line position-absolute"
                                        style={{ color: 'grey' }}></i>
                                </div>
                                {validation.touched.mobile && validation.errors.mobile ? (
                                    <div className="text-danger">{validation.errors.mobile}</div>
                                ) : null}
                            </div>

                            <div className="mb-3">
                                <Label htmlFor="email" style={styles.formLabel}>البريد</Label>
                                <div className="form-icon position-relative">
                                    <Input
                                        id="email"
                                        name="email"
                                        placeholder="أدخل البريد"
                                        value={validation.values.email || ""}
                                        onChange={validation.handleChange}
                                        style={{ 
                                            background: '#0A1C32', 
                                            color: 'white', 
                                            border: 'none',   // Ensuring no border
                                            outline: 'none'    // Removing outline too
                                        }}
                                        className="form-control form-control-icon"
                                        invalid={validation.touched.email && validation.errors.email ? true : false}
                                    />
                                    <i className="ri-mail-line position-absolute"
                                        style={{ color: 'grey' }}></i>
                                </div>
                                {validation.touched.email && validation.errors.email ? (
                                    <div className="text-danger">{validation.errors.email}</div>
                                ) : null}
                            </div>

                            <div className="mb-3">
                                <Label htmlFor="password" style={styles.formLabel}>كلمة المرور</Label>
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
                                        style={{ color: 'grey' }}></i>
                                   
                                </div>
                                {validation.touched.password && validation.errors.password ? (
                                    <div className="text-danger">{validation.errors.password}</div>
                                ) : null}
                            </div>

                            <div className="mb-3">
                                <Label htmlFor="department" style={styles.formLabel}>اسم الجهة</Label>
                                <div className="form-icon position-relative">
                                    <Input
                                        id="department"
                                        name="department"
                                        placeholder="أدخل اسم الجهة"
                                        value={validation.values.department || ""}
                                        onChange={validation.handleChange}
                                        style={{ 
                                            background: '#0A1C32', 
                                            color: 'white', 
                                            border: 'none',   // Ensuring no border
                                            outline: 'none'    // Removing outline too
                                        }}
                                        className="form-control form-control-icon"
                                        invalid={validation.touched.department && validation.errors.department ? true : false}
                                    />
                                    <i className="ri-building-line position-absolute"
                                        style={{ color: 'grey' }}></i>
                                </div>
                                {validation.touched.department && validation.errors.department ? (
                                    <div className="text-danger">{validation.errors.department}</div>
                                ) : null}
                            </div>

                            <div className="text-start mt-3">
                                <Button color="link" className="p-0" style={{ ...styles.textButton, color: '#56CB96' }}>
                                    اطلب دومين لمؤسستك
                                </Button>
                            </div>

                            <div className="pt-4">
                                <Button
                                    color="primary"
                                    type="submit"
                                    disabled={registerState.loading}
                                    style={styles.primaryButton}
                                    className="w-100"
                                >
                                    {registerState.loading ? (
                                        <>
                                            <Spinner size="sm" className="me-2" /> جاري التسجيل...
                                        </>
                                    ) : "تسجيل"}
                                </Button>
                            </div>
                        </Form>
                    </div>
                </div>
            </div>

            <div className="mt-4 text-center">
                <div style={styles.divider}>
                    <div style={styles.dividerLine}></div>
                    <h5 style={styles.dividerTitle}>تحتاج مساعدة</h5>
                </div>
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
            </div>

        </div>
    );
};

function Registration() {
    const navigate = useNavigate();

    const handleLoginClick = () => {
        navigate('/login');
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
                    <Button outline color="white" style={styles.outlineButton} onClick={handleLoginClick}> تسجيل دخول</Button>
                }
            />
        </BootstrapContainer>
    );
}

export default Registration;
