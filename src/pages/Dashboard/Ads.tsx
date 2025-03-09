import React from 'react';
import { Card, CardBody, CardHeader } from 'reactstrap';
import CartImg from '../../assets/template/card.png';
import ReactApexChart from 'Components/Common/ReactApexChart';

// Subcomponents
const NewsHeader = () => (
    <div className="d-flex justify-content-between">
        <div>
            <h4 className="fw-medium fw-semibold mb-0"> إعلانات الفرص</h4>
            <p className="mt-4 ff-secondary text-muted">
            مربع لأهم الاخبار والاعلانات الخاصة
            </p>
        </div>
        <div className="flex-shrink-0">
            <button className="btn btn-ghost-primary">إطلع أكثر</button>
        </div>
    </div>
);

const AddProjectCard = () => (
    <Card className="me-2 border border-primary bg-light-primary d-flex align-items-center justify-content-center"
        style={{ minWidth: '13rem', maxWidth: '100%', backgroundColor: '#e0f7fa' }}>
        <CardBody className="text-center d-flex flex-column align-items-center justify-content-center">
            <div className="display-4 text-primary">+</div>
            <p className="card-text mt-2 text-primary">اضف مشروع</p>
        </CardBody>
    </Card>
);
const ProjectCard = ({ index }: { index?: number }) => (
    <Card key={index} className="me-2" style={{ minWidth: '17rem', width: '100%', maxWidth: '17rem', height: '230px' }}>
        <img src={CartImg} className="card-img-top" alt="Project" style={{ width: '100%', height: 'auto' }} />
        <CardBody>
            <h5 className="card-title mb-1">Card wraps to a new line</h5>
            <p className="card-text">This is a longer card additional content.</p>
        </CardBody>
    </Card>
);

const ActionCard = ({ title, buttonText }: { title: string, buttonText: string }) => (
    <div className="text-center d-flex flex-column" style={{ minWidth: '120px', flex: 1 }}>
        <p className="mb-3">{title}</p>
        <div className="flex-grow-1 d-flex align-items-center justify-content-center">
            <button className="btn btn-primary">{buttonText}</button>
        </div>
    </div>
);

const ChartCard = () => (
    <div className="text-center d-flex flex-column align-items-center" style={{ minWidth: '120px', flex: 2 }}>
        <p className="">نسبة العمل</p>
        <div className="d-flex flex-grow-1 align-items-center">
            <ReactApexChart
                type="radialBar"
                series={[70]}
                options={{
                    chart: { height: 80, type: 'radialBar' },
                    plotOptions: {
                        radialBar: {
                            hollow: { size: '70%' },
                            dataLabels: {
                                name: { show: false },
                                value: {
                                    fontSize: '12px',
                                    show: true,
                                    formatter: (val) => `${val}%`,
                                    offsetY: 5 // Adjust this value to center the percentage
                                }
                            }
                        }
                    },
                    colors: ['#f46a6a'],
                    labels: ['Progress']
                }}
            />
        </div>
    </div>
);

// Add this component for vertical dividers
const VerticalDivider = () => (
    <div className="border-start my-auto" style={{ height: '170px', opacity: 1, borderColor: '#000' }}></div>
);

const Widgets = () => {
    return (
        <Card className="card-animate">
            <CardBody>
                <NewsHeader />
                <div className="d-flex overflow-auto">
                    {[...Array(4)].map((_, index) => (
                        <ProjectCard key={index} index={index} />
                    ))}
                </div>

                <div className="d-flex overflow-auto">
                    {[...Array(4)].map((_, index) => (
                        <ProjectCard key={index} index={index} />
                    ))}
                </div>
                <div className="d-flex overflow-auto">
                    {[...Array(4)].map((_, index) => (
                        <ProjectCard key={index} index={index} />
                    ))}
                </div>

            </CardBody>
        </Card>
    );
};

export default Widgets;