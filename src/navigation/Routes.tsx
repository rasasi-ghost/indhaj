import React, { useRef } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Login from '../pages/login/login';
import Registration from '../pages/registration/registration';
import './Routes.scss'; // Import the SCSS file for animations
import '../pages/success/success'
import SuccessPage from '../pages/success/success';
import HomePage from '../pages/home/home_page'
const AnimatedRoutes = () => {
  const location = useLocation();
  const nodeRef = useRef(null);

  return (
    <TransitionGroup>
      {/* <CSSTransition key={location.key} classNames="fade" timeout={300} nodeRef={nodeRef}> */}
        <div ref={nodeRef}>
          <Routes location={location}>
            <Route path="/login" element={<Login />} />
            <Route path="/registration" element={<Registration />} />
            <Route path="/success" element={<SuccessPage />} />
            <Route path="/" element={<HomePage />} />


          </Routes>
        </div>
      {/* </CSSTransition> */}
    </TransitionGroup>
  );
};

const AppRoutes = () => {
  return (
    <Router>
      <AnimatedRoutes />
    </Router>
  );
};

export default AppRoutes;
