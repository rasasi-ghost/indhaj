import React from 'react';
import { Card, CardBody, Col } from 'reactstrap';
// import CountUp from "react-countup";
// import { taskWidgets } from '../../../common/data';

import CartImg from '../../assets/template/card.png'

const Widgets = () => {
    return (
        <React.Fragment>
            <Card className="card-animate">
                <CardBody>
                    <div className="d-flex justify-content-between">
                        <div>
                            <h4 className="fw-medium fw-semibold mb-0">{"أخبار أنضج"}</h4>
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
                </CardBody>
            </Card>
        </React.Fragment>
    );
};

export default Widgets;