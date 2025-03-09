import React, { useState } from "react";
import { Card, CardBody, CardHeader, Col, Container, Nav, NavItem, NavLink, Row, TabContent, TabPane } from "reactstrap";
import classnames from "classnames";
import CartImg from "../../assets/template/card.png"; // Adjust the path as necessary


const DashboardEcommerce = () => {
    document.title = "Dashboard | Velzon - React Admin & Dashboard Template";

    // Light Nav
    const [lightNavTab, setlightNavTab] = useState<string>("1");
    const lightNavToggle = (tab: any) => {
        if (lightNavTab !== tab) {
            setlightNavTab(tab);
        }
    };
    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid>

                    <Card>
                        <CardBody>
                            <h3 className="py-3">فرص ومبادرات</h3>

                            <Nav pills className="nav nav-pills nav-custom nav-custom-light mb-3">


                                <NavItem>
                                    <NavLink style={{ cursor: "pointer", borderRadius: "10px" }} className={classnames({ active: lightNavTab === "1", })} onClick={() => { lightNavToggle("1"); }} >
                                        إطلع أكثر
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink style={{ cursor: "pointer", borderRadius: "10px" }} className={classnames({ active: lightNavTab === "2", })} onClick={() => { lightNavToggle("2"); }} >
                                        إطلع أكثر
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink style={{ cursor: "pointer", borderRadius: "10px" }} className={classnames({ active: lightNavTab === "3", })} onClick={() => { lightNavToggle("3"); }} >
                                        إطلع أكثر
                                    </NavLink>
                                </NavItem>
                            </Nav>

                            <TabContent activeTab={lightNavTab} className="text-muted">

                                <TabPane tabId="1" id="nav-light-home">
                                    <p className="py-3">اعلانات</p>

                                    <div className="d-flex overflow-auto px-1 ">

                                        {[...Array(3)].map((_, index) => (
                                            <Card key={index} className="me-2" style={{ minWidth: '18rem' }}>
                                                <img src={CartImg} className="card-img-top" alt="..." />
                                                <CardBody>
                                                    <h5 className="card-title mb-1">Card title that wraps to a new line</h5>
                                                    <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                                </CardBody>
                                            </Card>
                                        ))}
                                    </div>
                                </TabPane>

                                <TabPane tabId="2" id="nav-light-profile">
                                    <div className="d-flex mb-1">
                                        <div className="flex-grow-1 me-3">
                                            Just like in the image where we talked about using multiple fonts, you can see that the background in this graphic design is blurred. Whenever you put text on top of an image, it’s important that your viewers can understand the text, and sometimes that means applying a gaussian readable Any bypasser will stop to see what you have to see, even if your design has nothing to do with them.
                                        </div>
                                        <div className="flex-shrink-0">
                                        </div>
                                    </div>
                                    <p className="mb-0">It makes a statement, it’s impressive graphic design. Increase or decrease the letter spacing depending on the situation and try, try again until it looks right, and each letter has the perfect spot of its own. commodo enim craft beer mlkshk aliquip jean shorts ullamco.</p>
                                </TabPane>

                                <TabPane tabId="3" id="nav-colored-messages" >
                                    <div className="d-flex mb-1">
                                        <div className="flex-grow-1 me-3">
                                            Trust fund seitan letterpress, keytar raw denim keffiyeh etsy art party before they sold out master cleanse gluten-free squid scenester freegan cosby sweater. Fanny pack portland seitan DIY, art party locavore wolf cliche high life echo park Austin On the note of consistency, color consistency is a MUST. If you’re not trying to create crazy contrast in your design.
                                        </div>
                                        <div className="flex-shrink-0">
                                        </div>
                                    </div>
                                    <p className="mb-0">Big July earthquakes confound zany experimental vow. My girl wove six dozen plaid jackets before she quit. Six big devils from Japan quickly forgot how to waltz. try again until it looks right, and each assumenda labore aes Homo nostrud organic, assumenda labore aesthetic magna elements, buttons, everything.</p>
                                </TabPane>
                            </TabContent>
                        </CardBody>
                    </Card>

                </Container>

            </div>
        </React.Fragment>
    );
};

export default DashboardEcommerce;

