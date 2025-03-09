import BreadCrumb from "Components/Common/BreadCrumb";
import React from "react";
import { Card, CardBody, Col, Container, Row } from "reactstrap";
import News from "./News";
import Latest from "./Latest";
import Ads from "./Ads";
import New from "./New";
import { Link } from "react-router-dom";

// Dummy data for tradingArtworkData
const tradingArtworkData = [
    {
        id: 1,
        img: "https://via.placeholder.com/40",
        author: "Ahmed Mohammed",
        title: "Digital Artist",
        cardImg: "https://via.placeholder.com/300x200",
        likes: "23.2K",
        price: "97.8 ETH",
        category: "Abstract Painting",
        isActive: false
    },
    {
        id: 2,
        img: "https://via.placeholder.com/40",
        author: "Nora Ali",
        title: "3D Designer",
        cardImg: "https://via.placeholder.com/300x200",
        likes: "15.3K",
        price: "142.5 ETH",
        category: "Digital Sculpture",
        isActive: true
    },
    {
        id: 3,
        img: "https://via.placeholder.com/40",
        author: "Khalid Rahman",
        title: "Photographer",
        cardImg: "https://via.placeholder.com/300x200",
        likes: "9.1K",
        price: "56.4 ETH",
        category: "Nature Collection",
        isActive: false
    }
];

// Add the missing function
const favouriteBtn = (target: any) => {
    if (target.closest('button').classList.contains('active')) {
        target.closest('button').classList.remove("active");
    } else {
        target.closest('button').classList.add("active");
    }
};

const DashboardEcommerce = () => {
    document.title = "Dashboard | Velzon - React Admin & Dashboard Template";

    return (
        <React.Fragment>
            <Card className="card-animate">
                <CardBody>
                    <div className="d-flex justify-content-between">
                        <div>
                            <h4 className="fw-medium fw-semibold mb-0">{" احجز خبير"}</h4>
                            <p className="mt-4 ff-secondary  text-muted">
                                <span className="counter-value">
                                    {/* <CountUp
                                                    start={0}
                                                    end={item.counter}
                                                    // decimal={item.decimals}
                                                    suffix={item.suffix}
                                                    duration={3}
                                                /> */}
                                </span>
                                مربع لأهم الاخبار والاعلانات الخاصة
                            </p>


                        </div>

                        <div>
                            <div className=" flex-shrink-0">

                                <button className="btn btn-ghost-primary" >{"إطلع أكثر"}</button>
                            </div>
                        </div>


                    </div>

                    <Row className="">
                        {tradingArtworkData.map((item, key) => (
                            <Col key={key}>
                                <Card className="explore-box">
                                    <CardBody>
                                        <div className="d-flex align-items-center mb-3">
                                            <img src={item.img} alt="" className="avatar-xs rounded-circle" />
                                            <div className="ms-2 flex-grow-1">
                                                <h6 className="mb-0 fs-15">{item.author}</h6>
                                                <p className="mb-0 text-muted">{item.title}</p>
                                            </div>
                                            <div className="bookmark-icon">
                                              
                                            </div>
                                        </div>
                                        <div className="explore-place-bid-img overflow-hidden rounded">
                                            <img src={item.cardImg} alt="" className="img-fluid explore-img" />
                                            <div className="bg-overlay"></div>
                                            <div className="place-bid-btn">
                                                {/* <Link to="#" className="btn btn-success"><i className="ri-auction-fill align-bottom me-1"></i> Place Bid</Link> */}
                                            </div>
                                            <p>هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو.</p>
                                        </div>
                                      
                                        <button className="btn btn-primary">احجز استشاره</button>

                                    </CardBody>
                                </Card>
                            </Col>
                        ))}
                    </Row>

                </CardBody>
            </Card>

        </React.Fragment>
    );
};

export default DashboardEcommerce;

