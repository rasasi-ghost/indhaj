import React, { useState } from 'react';
import { Button, Collapse, Navbar, NavbarToggler, Nav, NavItem } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';
import './style.scss';
import Logo from '../../assets/template/logo.png';
import HomeLandingImg from '../../assets/template/home_landing.png';
import HomePlayImg from '../../assets/template/play-video.png';
import Avatar from '../../assets/template/avatar.png'; // Assuming you have an avatar image
import { useNavigate } from 'react-router-dom';
import CustomButton from 'Components/Temp/button_default';
// import Footer from '../../components/Footer';

// Font Awesome icons replacing MUI icons:
// Info: <i className="fas fa-info-circle"></i>
// Twitter: <i className="fab fa-twitter"></i>
// Instagram: <i className="fab fa-instagram"></i>
// LinkedIn: <i className="fab fa-linkedin"></i>
// WhatsApp: <i className="fab fa-whatsapp"></i>
// Star: <i className="fas fa-star"></i>

const HomePage: React.FC = () => {
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    const handleRegisterClick = () => {
        navigate('/registration');
    };
    const handleLoginClick = () => {
        navigate('/login');
    };
    return (
        <div>
            <div className="background-circles">
                <div className="circle circle-1"></div>
                {/* <div className="circle circle-2"></div>
                <div className="circle circle-3"></div>
                <div className="circle circle-4"></div> */}
                <div className="circle circle-5"></div>
                <div className="circle circle-6"></div>
            </div>
            <div className="">
                <Container className="home-page py-3 py-md-5" fluid="md">
                    {/* Responsive Navbar */}
                    <div className="mobile-navbar d-block d-md-none">
                        <Navbar color="transparent" light expand="md">
                            <div className="d-flex justify-content-between align-items-center w-100">
                                <img src={Logo} alt="Logo" className="logo logo-home" />
                                <NavbarToggler onClick={toggle} className="ms-auto" />
                            </div>
                            <Collapse isOpen={isOpen} navbar>
                                <Nav className="ml-auto" navbar>
                                    <NavItem>
                                        <Button color="link" className="w-100 text-right" style={{ fontWeight: 700 }}>خدمات انضج</Button>
                                    </NavItem>
                                    <NavItem>
                                        <Button color="link" className="w-100 text-right" style={{ fontWeight: 700 }}>مدونة انضج</Button>
                                    </NavItem>
                                    <NavItem>
                                        <Button color="link" className="w-100 text-right" style={{ fontWeight: 700 }}>عن أنضج</Button>
                                    </NavItem>
                                    <NavItem className="mt-2">
                                        <CustomButton color="primary" onClick={() => { handleLoginClick() }} className="w-100">تسجيل الدخول</CustomButton>
                                    </NavItem>
                                </Nav>
                            </Collapse>
                        </Navbar>
                    </div>

                    {/* Desktop Navbar */}
                    <Row className="header align-items-center d-none d-md-flex">
                        <Col md="4">
                            <img src={Logo} alt="Logo" className="logo logo-home" />
                        </Col>
                        <Col md="4" className="d-flex justify-content-center">
                            <div className="nav-buttons">
                                <Button color="link" style={{ fontWeight: 700 }}>خدمات انضج </Button>
                                <Button color="link" style={{ fontWeight: 700 }}>مدونة انضج</Button>
                                <Button color="link" style={{ fontWeight: 700 }}>عن أنضج</Button>
                            </div>
                        </Col>
                        <Col md="4" className="d-flex justify-content-end">
                            <CustomButton color="primary" onClick={() => { handleLoginClick() }} className="btn-sm">تسجيل الدخول</CustomButton>
                        </Col>
                    </Row>

                    <div style={{ padding: '20px 0' }}></div>
                    
                    {/* Hero section with responsive adjustments - reduced top padding on desktop */}
                    <Row className="content-section pt-2 pt-md-3" style={{ backgroundColor: '#3088C8', borderRadius: '20px', minHeight: '400px', width: '100%' }}>
                        <Col xs="12" md="5" className="d-flex align-items-center justify-content-center flex-column py-4 py-md-0">
                            <Row className="w-100">
                                <h1 className="responsive-heading text-right" style={{ color: '#0e223A' }}>
                                    نساعدكم على <span style={{ color: 'white' }}> بلوغ أهدافكم</span> بأحدث التكنلوجيات
                                </h1>
                            </Row>
                            <Row className="pt-3 pt-md-5">
                                <p style={{ color: 'white', fontSize: '1em' }} className="text-right">يُستخدم في صناعات المطابع ودور النشر. كان لوريم إيبسوم ولايزال المعيار</p>
                            </Row>
                            <Row className="pt-3">
                                <Button color="link" style={{ fontWeight: 700, color: 'white', textDecoration: 'none' }}>
                                    تعرَف أكثر <span style={{ marginLeft: '5px' }}>←</span>
                                </Button>
                            </Row>
                        </Col>
                        <Col xs="12" md="6" className="d-flex align-items-center justify-content-center overflow-visible">
                            <div className="hero-image-container">
                                <img src={HomeLandingImg} alt="Home Landing" className="hero-image" />
                            </div>
                        </Col>
                    </Row>
                    
                    <Row className="text-center py-4 py-md-5">
                        <h1 className="responsive-heading mx-auto" style={{ color: '#0e223A', maxWidth: '100%' }}>
                            فيديو دعائي لتعريف خدمات
                        </h1>

                        <h1 className="responsive-heading mx-auto" style={{ color: '#3088C8', maxWidth: '100%' }}>
                            انضج الرئيسية
                        </h1>

                        <p className="pt-3 pt-md-5 mx-auto" style={{ maxWidth: '90%', marginBottom: '2rem' }}>
                            هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو.
                        </p>
                    </Row>
                    
                    <div className="spacer"></div>
                    
                    {/* Video section */}
                    <Row className="content-section pt-3 pt-md-5 position-relative" 
                         style={{ backgroundColor: '#3088C8', borderRadius: '20px', minHeight: '300px', width: '100%', justifyContent: 'center', marginBottom: '3rem' }}>
                        <img src={HomePlayImg} alt="Play Video" className="video-preview-img" />
                    </Row>

                    <Row className="text-center py-4">
                        <p className="pt-3 pt-md-5 mx-auto" style={{ color: '#0090C3', fontWeight: 'bold', maxWidth: '90%' }}>
                            المحتوى المقروء لصفحة
                        </p>
                        <h1 className="responsive-heading mx-auto" style={{ color: '#0e223A', maxWidth: '90%' }}>
                            فيديو دعائي لتعريف خدمات
                        </h1>
                        <p className="pt-3 pt-md-5 mx-auto" style={{ maxWidth: '90%', marginBottom: '2rem' }}>
                            هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات في الصفحة التي يقرأها.
                        </p>
                    </Row>

                    <div className="spacer"></div>
                    
                    {/* Service cards - first row */}
                    <Row className="service-cards">
                        <Col xs="12" md="6" className="mb-4">
                            <div className="card shadow-lg d-flex flex-column align-items-center h-100" style={{ borderRadius: '15px', border: 'none' }}>
                                <img src={HomeLandingImg} alt="Card Image" className="card-img-top" />
                                <div className="p-3 text-center" style={{ overflow: 'hidden' }}>
                                    <h5>افضل الخدمات</h5>
                                    <p>هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء.</p>
                                    <Button color="link" style={{ fontWeight: 700, color: '#0090C3', textDecoration: 'none' }}>
                                        تعرَف أكثر <span style={{ marginLeft: '5px' }}>←</span>
                                    </Button>
                                </div>
                            </div>
                        </Col>
                        <Col xs="12" md="6" className="mb-4">
                            <div className="card shadow-lg d-flex flex-column align-items-center h-100" style={{ borderRadius: '15px', border: 'none' }}>
                                <img src={HomeLandingImg} alt="Card Image" className="card-img-top" />
                                <div className="p-3 text-center" style={{ overflow: 'hidden' }}>
                                    <h5>افضل الخدمات</h5>
                                    <p>هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء.</p>
                                    <Button color="link" style={{ fontWeight: 700, color: '#0090C3', textDecoration: 'none' }}>
                                        تعرَف أكثر <span style={{ marginLeft: '5px' }}>←</span>
                                    </Button>
                                </div>
                            </div>
                        </Col>
                    </Row>

                    {/* Service cards - second row */}
                    <Row className="service-cards">
                        <Col xs="12" md="6" className="mb-4">
                            <div className="card shadow-lg d-flex flex-column align-items-center h-100" style={{ borderRadius: '15px', border: 'none' }}>
                                <img src={HomeLandingImg} alt="Card Image" className="card-img-top" />
                                <div className="p-3 text-center" style={{ overflow: 'hidden' }}>
                                    <h5>افضل الخدمات</h5>
                                    <p>هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء.</p>
                                    <Button color="link" style={{ fontWeight: 700, color: '#0090C3', textDecoration: 'none' }}>
                                        تعرَف أكثر <span style={{ marginLeft: '5px' }}>←</span>
                                    </Button>
                                </div>
                            </div>
                        </Col>
                        <Col xs="12" md="6" className="mb-4">
                            <div className="card shadow-lg d-flex flex-column align-items-center h-100" style={{ borderRadius: '15px', border: 'none' }}>
                                <img src={HomeLandingImg} alt="Card Image" className="card-img-top" />
                                <div className="p-3 text-center" style={{ overflow: 'hidden' }}>
                                    <h5>افضل الخدمات</h5>
                                    <p>هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء.</p>
                                    <Button color="link" style={{ fontWeight: 700, color: '#0090C3', textDecoration: 'none' }}>
                                        تعرَف أكثر <span style={{ marginLeft: '5px' }}>←</span>
                                    </Button>
                                </div>
                            </div>
                        </Col>
                    </Row>

                    {/* CTA button */}
                    <Row className="d-flex justify-content-center my-4">
                        <Col xs="12" sm="6" className="text-center">
                            <CustomButton color="primary" onClick={() => { handleRegisterClick() }} className="w-75">إنشاء حساب</CustomButton>
                        </Col>
                    </Row>

                    {/* Testimonials section */}
                    <Row className="text-center py-4">
                        <p className="pt-3 pt-md-5 mx-auto" style={{ color: '#0090C3', fontWeight: 'bold', maxWidth: '90%' }}>
                            المحتوى المقروء لصفحة
                        </p>
                        <h1 className="responsive-heading mx-auto" style={{ color: '#0e223A', maxWidth: '90%' }}>
                            عملاء سعيدين بالتعامل معنا
                        </h1>
                        <p className="pt-3 pt-md-5 mx-auto" style={{ maxWidth: '90%', marginBottom: '2rem' }}>
                            هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات في الصفحة التي يقرأها.
                        </p>
                    </Row>

                    {/* Testimonial cards */}
                    <Row className="testimonial-cards">
                        <Col xs="12" md="4" className="mb-3">
                            <div className="card shadow-lg h-100" style={{ borderRadius: '15px', border: 'none' }}>
                                <div className="p-3" style={{ overflow: 'hidden' }}>
                                    <div className="d-flex justify-content-start">
                                        {[...Array(5)].map((_, i) => (
                                            <i key={i} className="fas fa-star" style={{ color: '#ffc107' }}></i>
                                        ))}
                                    </div>
                                    <p style={{ fontSize: '0.9em', textAlign: 'right' }}>هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات في الصفحة التي يقرأها.</p>
                                    <div className="d-flex align-items-center justify-content-start" style={{ width: '100%' }}>
                                        <img src={Avatar} alt="Avatar" style={{ width: '40px', height: '40px', borderRadius: '50%' }} />
                                        <div className="mr-2 ms-2">
                                            <h6 style={{ fontSize: '0.9em', textAlign: 'right', fontWeight: 'bold' }}>اسم المستخدم</h6>
                                            <p style={{ fontSize: '0.8em', textAlign: 'right' }}>موقع المستخدم</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col xs="12" md="4" className="mb-3">
                            <div className="card shadow-lg h-100" style={{ borderRadius: '15px', border: 'none' }}>
                                <div className="p-3" style={{ overflow: 'hidden' }}>
                                    <div className="d-flex justify-content-start">
                                        {[...Array(5)].map((_, i) => (
                                            <i key={i} className="fas fa-star" style={{ color: '#ffc107' }}></i>
                                        ))}
                                    </div>
                                    <p style={{ fontSize: '0.9em', textAlign: 'right' }}>هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات في الصفحة التي يقرأها.</p>
                                    <div className="d-flex align-items-center justify-content-start" style={{ width: '100%' }}>
                                        <img src={Avatar} alt="Avatar" style={{ width: '40px', height: '40px', borderRadius: '50%' }} />
                                        <div className="mr-2 ms-2">
                                            <h6 style={{ fontSize: '0.9em', textAlign: 'right', fontWeight: 'bold' }}>اسم المستخدم</h6>
                                            <p style={{ fontSize: '0.8em', textAlign: 'right' }}>موقع المستخدم</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col xs="12" md="4" className="mb-3">
                            <div className="card shadow-lg h-100" style={{ borderRadius: '15px', border: 'none' }}>
                                <div className="p-3" style={{ overflow: 'hidden' }}>
                                    <div className="d-flex justify-content-start">
                                        {[...Array(5)].map((_, i) => (
                                            <i key={i} className="fas fa-star" style={{ color: '#ffc107' }}></i>
                                        ))}
                                    </div>
                                    <p style={{ fontSize: '0.9em', textAlign: 'right' }}>هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات في الصفحة التي يقرأها.</p>
                                    <div className="d-flex align-items-center justify-content-start" style={{ width: '100%' }}>
                                        <img src={Avatar} alt="Avatar" style={{ width: '40px', height: '40px', borderRadius: '50%' }} />
                                        <div className="mr-2 ms-2">
                                            <h6 style={{ fontSize: '0.9em', textAlign: 'right', fontWeight: 'bold' }}>اسم المستخدم</h6>
                                            <p style={{ fontSize: '0.8em', textAlign: 'right' }}>موقع المستخدم</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>

                    {/* Final CTA section */}
                    <Row className="text-center py-5">
                        <h1 className="responsive-heading mx-auto" style={{ color: '#0e223A', maxWidth: '90%' }}>
                            لنبدأ رحلة ممتعة حيث نساهم في  <span style={{ color: '#56cb96' }}> نجاح مشروعك </span>
                        </h1>
                    </Row>

                    {/* Final CTA buttons */}
                    <Row className="d-flex justify-content-center mb-5">
                        <Col xs="12" sm="6" md="5" className="d-flex justify-content-center justify-content-md-end mb-3 mb-md-0">
                            <CustomButton color="primary" onClick={() => { }} className="w-75">إنشاء حساب</CustomButton>
                        </Col>
                        <Col xs="12" sm="6" md="5" className="d-flex justify-content-center justify-content-md-start">
                            <CustomButton color="primary" onClick={() => { }} className="w-75">إنشاء حساب</CustomButton>
                        </Col>
                    </Row>
                </Container>
                {/* <Footer /> */}
            </div>
        </div>
    );
};

export default HomePage;