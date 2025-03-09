import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import './register_layout.scss'; // Import the SCSS file

interface RegisterLayoutProps {
  form: React.ReactNode;
  logo: string;
  icon: React.ReactNode;
  texts: React.ReactNode;
  backgroundImage: string;
  floatingButton: React.ReactNode;
}

const RegisterLayout: React.FC<RegisterLayoutProps> = ({ form, logo, icon, texts, backgroundImage, floatingButton }) => {
  return (
    <div className="register-layout">
      <Container fluid className="vh-100 position-relative">
        <Row className="h-100">
          <Col md="4" className="form-column d-flex align-items-center position-relative">
            {floatingButton}
            {form}
          </Col>
          <Col md="8" className="d-flex flex-column justify-content-between landing-column" style={{ backgroundImage: `url(${backgroundImage})` }}>
            <img src={logo} alt="Top Left" className="img-fluid logo-image" />
            <div className="d-flex justify-content-center align-items-center flex-grow-1">
              {texts}
            </div>
            <div className="d-flex justify-content-center mt-3 pt-3">
              {icon}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default RegisterLayout;