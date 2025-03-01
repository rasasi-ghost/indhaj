import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Logo from '../assets/logo.png'; // Import the logo image
import './Footer.scss';

const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <Container fluid>
                <Row className="py-5">
                    <Col xs="12" md="3">
                        <img src={Logo} alt="Logo" className="footer-logo" />
                        <p className="footer-text">بعض النصوص تحت الشعار</p>
                    </Col>
                    <Col xs="12" md="2">
                        <h5>الفئة 1</h5>
                        <ul className="list-unstyled">
                            <li><a href="#">العنصر 1</a></li>
                            <li><a href="#">العنصر 2</a></li>
                            <li><a href="#">العنصر 3</a></li>
                            <li><a href="#">العنصر 4</a></li>
                        </ul>
                    </Col>
                    <Col xs="12" md="2">
                        <h5>الفئة 2</h5>
                        <ul className="list-unstyled">
                            <li><a href="#">العنصر 1</a></li>
                            <li><a href="#">العنصر 2</a></li>
                            <li><a href="#">العنصر 3</a></li>
                            <li><a href="#">العنصر 4</a></li>
                        </ul>
                    </Col>
                    <Col xs="12" md="2">
                        <h5>الفئة 3</h5>
                        <ul className="list-unstyled">
                            <li><a href="#">العنصر 1</a></li>
                            <li><a href="#">العنصر 2</a></li>
                            <li><a href="#">العنصر 3</a></li>
                            <li><a href="#">العنصر 4</a></li>
                        </ul>
                    </Col>
                    <Col xs="12" md="2">
                        <h5>الفئة 4</h5>
                        <ul className="list-unstyled">
                            <li><a href="#">العنصر 1</a></li>
                            <li><a href="#">العنصر 2</a></li>
                            <li><a href="#">العنصر 3</a></li>
                            <li><a href="#">العنصر 4</a></li>
                        </ul>
                    </Col>
                </Row>
                <hr />
                <Row className="py-3">
                    <Col xs="12" md="6" className="d-flex justify-content-center">
                        <a href="#" className="footer-link">زر نصي 1</a>
                        <a href="#" className="footer-link">زر نصي 2</a>
                        <a href="#" className="footer-link">زر نصي 3</a>
                    </Col>
                    <Col xs="12" md="6" className="d-flex justify-content-center">
                        <a href="#" className="social-icon"><FacebookIcon /></a>
                        <a href="#" className="social-icon"><TwitterIcon /></a>
                        <a href="#" className="social-icon"><InstagramIcon /></a>
                        <a href="#" className="social-icon"><LinkedInIcon /></a>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;
