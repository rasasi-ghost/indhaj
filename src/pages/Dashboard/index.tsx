import BreadCrumb from "Components/Common/BreadCrumb";
import React from "react";
import { Col, Container, Row } from "reactstrap";
import News from "./News";
import Latest from "./Latest";
import Ads from "./Ads";
import New from "./New";
import Book from "./book";

const DashboardEcommerce = () => {
    document.title = "Dashboard | Velzon - React Admin & Dashboard Template";

    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid>
                    <News />
                    {/* <BreadCrumb title={"Ecommerce"} pageTitle={"Dashboard"} /> */}

                    <Row>
                        <Col md="8">
                            <Latest />
                        </Col>
                        <Col md="4">
                            <Ads />
                        </Col>
                    </Row>
                    <News />

                    <New />
                    <Book />

                </Container>

            </div>
        </React.Fragment>
    );
};

export default DashboardEcommerce;

