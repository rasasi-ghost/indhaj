import React from 'react';
import { Button } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';
import './style.scss';
import Logo from '../../assets/logo.png';
import CustomButton from '../../components/button_default';
import HomeLandingImg from '../../assets/home_landing.png';
import HomePlayImg from '../../assets/play-video.png';
import Avatar from '../../assets/avatar.png'; // Assuming you have an avatar image
import StarIcon from '@mui/icons-material/Star';
import { useNavigate } from 'react-router-dom';
import Footer from '../../components/Footer';

const HomePage: React.FC = () => {
    const navigate = useNavigate();

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
                <Container className="home-page py-5" style={{ width: '82%' }}>
                    <Row className="header align-items-center">
                        <Col xs="4" className='md'>
                            <img src={Logo} alt="Logo" className="logo logo-home" />
                        </Col>
                        <Col xs="4" className="d-flex justify-content-center">
                            <div className="nav-buttons">
                                <Button color="link" style={{ fontWeight: 700 }}>خدمات انضج </Button>
                                <Button color="link" style={{ fontWeight: 700 }}>مدونة انضج</Button>
                                <Button color="link" style={{ fontWeight: 700 }}>عن أنضج</Button>
                            </div>
                        </Col>
                        <Col style={{ paddingLeft: 20 }} xs="4" className="d-flex justify-content-end">
                            <CustomButton color="primary" onClick={() => { handleLoginClick() }} className="">تسجيل الدخول</CustomButton>
                        </Col>
                    </Row>
                    <div style={{ padding: '20px 0' }}></div>
                    <Row className="content-section pt-5" style={{ backgroundColor: '#3088C8', borderRadius: '41px', height: '65vh', width: '100%' }}>
                        <Col xs="6" className="d-flex align-items-center justify-content-center flex-column">
                            <Row style={{}} className="w-100">
                                <h1 style={{ fontSize: 'calc(1.8em + 2.5vw)', textAlign: 'right', color: '#0e223A' }}>
                                    نساعدكم على   <span style={{ color: 'white' }}> بلوغ أهدافكم</span>  بأحدث التكنلوجيات
                                </h1>
                            </Row>
                            <Row className="pt-5">
                                <p style={{ color: 'white', fontSize: '1.2em' }}>يُستخدم في صناعات المطابع ودور النشر. كان لوريم إيبسوم ولايزال المعيار</p>
                            </Row>
                            <Row className="pt-3">
                                <Button color="link" style={{ fontWeight: 700, color: 'white', textDecoration: 'none' }}>
                                    تعرَف أكثر <span style={{ marginLeft: '5px' }}>←</span>
                                </Button>
                            </Row>
                        </Col>
                        <Col xs="6" className="d-flex align-items-center justify-content-center">
                            <img src={HomeLandingImg} alt="Home Landing" style={{ position: 'relative', left: '-15%', width: '130%' }} />
                        </Col>
                    </Row>
                    <Row style={{ justifyContent: 'center', }} className="w-100 py-5">
                        <h1 style={{ fontSize: 'calc(1.8em + 1vw)', textAlign: 'center', color: '#0e223A', width: '60%' }}>
                            فيديو دعائي لتعريف خدمات                </h1>

                        <h1 style={{ fontSize: 'calc(1.8em + 1vw)', textAlign: 'center', color: '#3088C8', width: '60%' }}>
                            انضج الرئيسية            </h1>


                        <p className='pt-5' style={{ textAlign: 'center', color: 'black', width: '60%', }}>

                            هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو.
                        </p>
                    </Row>
                    <Row style={{ height: 100 }}></Row>
                    <Row className="content-section pt-5" style={{ backgroundColor: '#3088C8', borderRadius: '41px', height: '45vh', width: '100%', position: 'relative', justifyContent: 'center', paddingTop: 30, }}>
                        <img src={HomePlayImg} alt="Play Video" style={{ position: 'absolute', top: '-26%', width: '80%', height: '150%', borderRadius: '44px', filter: 'blur(5px)' }} />
                    </Row>

                    <Row style={{ height: 50 }}></Row>

                    <Row style={{ justifyContent: 'center', }} className=" py-5">

                        <p className='pt-5' style={{ textAlign: 'center', color: '#0090C3', width: '60%', fontWeight: 'bold' }}>

                            المحتوى المقروء لصفحة                </p>
                        <h1 style={{ fontSize: 'calc(1.8em + 1vw)', textAlign: 'center', color: '#0e223A', width: '60%' }}>
                            فيديو دعائي لتعريف خدمات                </h1>
                        <p className='pt-5' style={{ textAlign: 'center', color: 'black', width: '60%', }}>
                            هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات في الصفحة التي يقرأها.</p>


                    </Row>

                    <Row style={{ height: 50 }}></Row>
                    <Row className="d-flex justify-content-center" style={{ height: '50vh' }}>
                        <Col xs="5" className="card shadow-lg m-3 d-flex flex-column align-items-center" style={{ height: '100%', borderRadius: '15px', border: 'none' }}>
                            <img src={HomeLandingImg} alt="Card Image" style={{ width: '100%', height: '60%', objectFit: 'cover', borderTopLeftRadius: '15px', borderTopRightRadius: '15px' }} />
                            <div className="p-3 text-center" style={{ overflow: 'hidden' }}>
                                <h5>افضل الخدمات</h5>
                                <p>هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء.</p>
                                <Button color="link" style={{ fontWeight: 700, color: '#0090C3', textDecoration: 'none' }}>
                                    تعرَف أكثر <span style={{ marginLeft: '5px' }}>←</span>
                                </Button>                    </div>
                        </Col>
                        <Col xs="5" className="card shadow-lg m-3 d-flex flex-column align-items-center" style={{ height: '100%', borderRadius: '15px', border: 'none' }}>
                            <img src={HomeLandingImg} alt="Card Image" style={{ width: '100%', height: '60%', objectFit: 'cover', borderTopLeftRadius: '15px', borderTopRightRadius: '15px' }} />
                            <div className="p-3 text-center" style={{ overflow: 'hidden' }}>
                                <h5>افضل الخدمات</h5>
                                <p>هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء.</p>

                                <Button color="link" style={{ fontWeight: 700, color: '#0090C3', textDecoration: 'none' }}>
                                    تعرَف أكثر <span style={{ marginLeft: '5px' }}>←</span>
                                </Button>
                                {/* <Button color="link" style={{ fontWeight: 700 }}>Read More</Button> */}
                            </div>
                        </Col>
                    </Row>
                    <Row style={{ height: 30 }}></Row>

                    <Row className="d-flex justify-content-center" style={{ height: '50vh' }}>
                        <Col xs="5" className="card shadow-lg m-3 d-flex flex-column align-items-center" style={{ height: '100%', borderRadius: '15px', border: 'none' }}>
                            <img src={HomeLandingImg} alt="Card Image" style={{ width: '100%', height: '60%', objectFit: 'cover', borderTopLeftRadius: '15px', borderTopRightRadius: '15px' }} />
                            <div className="p-3 text-center" style={{ overflow: 'hidden' }}>
                                <h5>افضل الخدمات</h5>
                                <p>هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء.</p>
                                <Button color="link" style={{ fontWeight: 700, color: '#0090C3', textDecoration: 'none' }}>
                                    تعرَف أكثر <span style={{ marginLeft: '5px' }}>←</span>
                                </Button>                    </div>
                        </Col>
                        <Col xs="5" className="card shadow-lg m-3 d-flex flex-column align-items-center" style={{ height: '100%', borderRadius: '15px', border: 'none' }}>
                            <img src={HomeLandingImg} alt="Card Image" style={{ width: '100%', height: '60%', objectFit: 'cover', borderTopLeftRadius: '15px', borderTopRightRadius: '15px' }} />
                            <div className="p-3 text-center" style={{ overflow: 'hidden' }}>
                                <h5>افضل الخدمات</h5>
                                <p>هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء.</p>
                                <Button color="link" style={{ fontWeight: 700, color: '#0090C3', textDecoration: 'none' }}>
                                    تعرَف أكثر <span style={{ marginLeft: '5px' }}>←</span>
                                </Button>                    </div>
                        </Col>
                    </Row>
                    <Row style={{ height: 40 }}></Row>

                    <Row className="d-flex justify-content-center">
                        <div style={{ width: "50%", display: 'flex', justifyContent: 'center' }}>
                            <CustomButton color="primary" onClick={() => { handleRegisterClick() }} className="">إنشاء حساب</CustomButton>
                        </div>
                    </Row>


                    <Row style={{ justifyContent: 'center', }} className=" py-3">

                        <p className='pt-5' style={{ textAlign: 'center', color: '#0090C3', width: '60%', fontWeight: 'bold' }}>

                            المحتوى المقروء لصفحة                </p>
                        <h1 style={{ fontSize: 'calc(1.8em + 1vw)', textAlign: 'center', color: '#0e223A', width: '60%' }}>
                            عملاء سعيدين بالتعامل معنا              </h1>
                        <p className='pt-5' style={{ textAlign: 'center', color: 'black', width: '60%', }}>
                            هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات في الصفحة التي يقرأها.</p>


                    </Row>



                    <Row className="d-flex justify-content-center" style={{ height: '30vh' }}>
                        <Col xs="12" md="3" className="card shadow-lg m-2 d-flex flex-column align-items-center" style={{ height: '80%', borderRadius: '15px', border: 'none' }}>
                            <div className="p-2 text-center" style={{ overflow: 'hidden' }}>
                                <div className="d-flex justify-content-start">
                                    {[...Array(5)].map((_, i) => (
                                        <StarIcon key={i} style={{ color: '#ffc107' }} />
                                    ))}
                                </div>
                                <p style={{ fontSize: '0.9em', textAlign: 'right' }}>هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات في الصفحة التي يقرأها.</p>
                                <div className="d-flex align-items-center justify-content-start" style={{ width: '100%' }}>
                                    <img src={Avatar} alt="Avatar" style={{ width: '40px', height: '40px', borderRadius: '50%' }} />
                                    <div className="mr-2">
                                        <h6 style={{ fontSize: '0.9em', textAlign: 'right', fontWeight: 'bold' }}>اسم المستخدم</h6>
                                        <p style={{ fontSize: '0.8em', textAlign: 'right' }}>موقع المستخدم</p>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col xs="12" md="3" className="card shadow-lg m-2 d-flex flex-column align-items-center" style={{ height: '80%', borderRadius: '15px', border: 'none' }}>
                            <div className="p-2 text-center" style={{ overflow: 'hidden' }}>
                                <div className="d-flex justify-content-start">
                                    {[...Array(5)].map((_, i) => (
                                        <StarIcon key={i} style={{ color: '#ffc107' }} />
                                    ))}
                                </div>
                                <p style={{ fontSize: '0.9em', textAlign: 'right' }}>هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات في الصفحة التي يقرأها.</p>
                                <div className="d-flex align-items-center justify-content-start" style={{ width: '100%' }}>
                                    <img src={Avatar} alt="Avatar" style={{ width: '40px', height: '40px', borderRadius: '50%' }} />
                                    <div className="mr-2">
                                        <h6 style={{ fontSize: '0.9em', textAlign: 'right', fontWeight: 'bold' }}>اسم المستخدم</h6>
                                        <p style={{ fontSize: '0.8em', textAlign: 'right' }}>موقع المستخدم</p>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col xs="12" md="3" className="card shadow-lg m-2 d-flex flex-column align-items-center" style={{ height: '80%', borderRadius: '15px', border: 'none' }}>
                            <div className="p-2 text-center" style={{ overflow: 'hidden' }}>
                                <div className="d-flex justify-content-start">
                                    {[...Array(5)].map((_, i) => (
                                        <StarIcon key={i} style={{ color: '#ffc107' }} />
                                    ))}
                                </div>
                                <p style={{ fontSize: '0.9em', textAlign: 'right' }}>هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات في الصفحة التي يقرأها.</p>
                                <div className="d-flex align-items-center justify-content-start" style={{ width: '100%' }}>
                                    <img src={Avatar} alt="Avatar" style={{ width: '40px', height: '40px', borderRadius: '50%' }} />
                                    <div className="mr-2">
                                        <h6 style={{ fontSize: '0.9em', textAlign: 'right', fontWeight: 'bold' }}>اسم المستخدم</h6>
                                        <p style={{ fontSize: '0.8em', textAlign: 'right' }}>موقع المستخدم</p>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <Row style={{ justifyContent: 'center', }} className=" py-3">


                        <h1 style={{ fontSize: 'calc(1.8em + 1vw)', textAlign: 'center', color: '#0e223A', width: '60%' }}>
                            لنبدأ رحلة ممتعة حيث نساهم في  <span style={{ color: '#56cb96' }}> نجاح مشروعك </span>
                        </h1>


                    </Row>
                    <Row className="d-flex justify-content-center" style={{ padding: '20px 0' }}>
                        <Col xs="auto" className="d-flex justify-content-end" style={{ width: '50%' }}>
                            <CustomButton color="primary" onClick={() => { }} className="">إنشاء حساب</CustomButton>
                        </Col>
                        <Col xs="auto" className="d-flex justify-content-start" style={{ width: '50%' }}>
                            <CustomButton color="primary" onClick={() => { }} className="">إنشاء حساب</CustomButton>
                        </Col>
                    </Row>
                </Container>
                <Footer />
            </div>
        </div>
    );
};

export default HomePage;