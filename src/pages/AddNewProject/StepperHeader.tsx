import React from "react";
import { Row, Col } from "reactstrap";

interface StepperHeaderProps {
  currentStep: number;
  totalSteps: number;
  goToStep: (step: number) => void;
}

const StepperHeader = ({ currentStep, totalSteps, goToStep }: StepperHeaderProps) => {
  // Define step icons and labels
  const steps = [
    { icon: "ri-file-info-line", label: "معلومات أساسية" },
    { icon: "ri-draft-line", label: "وصف المشروع" },
    { icon: "ri-map-pin-line", label: "الموقع" },
    { icon: "ri-money-dollar-circle-line", label: "الميزانية" },
    { icon: "ri-team-line", label: "فريق العمل" },
    { icon: "ri-file-upload-line", label: "المستندات" },
    { icon: "ri-check-double-line", label: "المراجعة" },
  ];

  return (
    <div className="stepper-header mb-4">
      <div className="position-relative mb-4">
        <div className="progress" style={{ height: "2px" }}>
          <div
            className="progress-bar"
            role="progressbar"
            style={{ width: `${((currentStep - 1) / (totalSteps - 1)) * 100}%` }}
            aria-valuenow={((currentStep - 1) / (totalSteps - 1)) * 100}
            aria-valuemin={0}
            aria-valuemax={100}
          ></div>
        </div>
        
        <Row className="text-center">
          {steps.map((step, index) => (
            <Col key={index} className="px-0">
              <div 
                className="stepper-item"
                onClick={() => goToStep(index + 1)} 
                style={{ cursor: "pointer" }}
              >
                <div 
                  className={`stepper-icon d-flex align-items-center justify-content-center rounded-circle mx-auto mb-2 ${
                    currentStep > index + 1 
                      ? "bg-success text-white" 
                      : currentStep === index + 1 
                      ? "bg-primary text-white" 
                      : "bg-light text-muted"
                  }`}
                  style={{ width: "50px", height: "50px", position: "relative", zIndex: "5" }}
                >
                  <i className={`${step.icon} fs-4`}></i>
                </div>
                <div className={`stepper-label mt-2 ${currentStep === index + 1 ? "text-primary fw-semibold" : "text-muted"}`} style={{ fontSize: "0.85rem" }}>
                  {step.label}
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default StepperHeader;
