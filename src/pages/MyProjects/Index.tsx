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

    const ProjectCard2 = ({ index }: { index?: number }) => (
        <Card key={index} className="me-2" style={{ minWidth: '17rem', width: '100%', maxWidth: '17rem', height: '200px' }}>
            <img src={CartImg} className="card-img-top" alt="Project" style={{ width: '100%', height: 'auto' }} />
            <CardBody>
                <h5 className="card-title mb-1">Card wraps to a new line</h5>
                <p className="card-text">This is a longer card additional content.</p>
            </CardBody>
        </Card>
    );
    const ProjectCard = () => (
        <Card className="me-2 border border-primary bg-light-primary d-flex align-items-center justify-content-center"
            style={{ minWidth: '13rem', maxWidth: '100%', backgroundColor: '#e0f7fa' }}>
            <CardBody className="text-center d-flex flex-column align-items-center justify-content-center">
                <div className="display-4 text-primary">+</div>
                <p className="card-text mt-2 text-primary">اضف مشروع</p>
            </CardBody>
        </Card>
    );

    // Define an array of project types with icons and descriptions
    const projectTypes = [
        { id: 1, icon: "ri-building-line", text: "جديد انضج", description: "مشاريع تطويرية واستثمارية" },
        { id: 2, icon: "ri-store-2-line", text: "مشاريع ", description: "فرص تجارية متنوعة" },
        { id: 3, icon: "ri-community-line", text: " مجتمعية", description: "مبادرات لخدمة المجتمع" },
        { id: 4, icon: "ri-plant-line", text: " زراعية", description: "استثمارات في القطاع الزراعي" }
    ];

    // Modified AddProjectCard component with description text
    const AddProjectCard = ({ icon, text, description }: { icon: string, text: string, description: string }) => (
        <Card className="border border-primary d-flex align-items-center justify-content-center project-card"
            style={{
                minWidth: '13rem',
                maxWidth: '100%',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
            }}>
            <CardBody className="text-center d-flex flex-column align-items-center justify-content-center">
                <i className={`${icon} fs-1 text-primary mb-2`}></i>
                <p className="card-text mb-1 text-primary fw-semibold">{text}</p>
                <p className="card-text text-muted small">{description}</p>
            </CardBody>
        </Card>
    );

    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid>
                    {/* Add custom CSS for hover effect */}
                    <style>
                        {`
                        .project-card {
                            background-color: rgba(0, 173, 131, 0.05);
                        }
                        .project-card:hover {
                            transform: translateY(-5px);
                            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
                            background-color: rgba(0, 173, 131, 0.1);
                        }
                        .project-card:hover i {
                            transform: scale(1.1);
                        }
                        .project-card i {
                            transition: transform 0.3s ease;
                        }
                        `}
                    </style>

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

                                    <div className="d-flex  flex-wrap overflow-auto px-1 py-3">
                                        {projectTypes.map((project, index) => (
                                            <Col key={project.id} xs="12" sm="6" md="4" lg="3" className={`mb-3 ${index !== projectTypes.length - 1 ? 'pe-2' : ''}`}>
                                                <AddProjectCard
                                                    icon={project.icon}
                                                    text={project.text}
                                                    description={project.description}
                                                />
                                            </Col>
                                        ))}
                                    </div>
                                    <div className="d-flex overflow-auto px-1">
                                        <ProjectCard />
                                        {[...Array(4)].map((_, index) => (
                                            <ProjectCard2 key={index} index={index} />
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

