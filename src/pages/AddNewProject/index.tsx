import React, { useState } from "react";
import { Card, CardBody, Container, Row, Col } from "reactstrap";
import StepperHeader from "./StepperHeader";
import Step1BasicInfo from "./Step1BasicInfo";
import Step2Description from "./Step2Description";
import Step3Location from "./Step3Location";
import Step4Budget from "./Step4Budget";
import Step5Team from "./Step5Team";
import Step6Documents from "./Step6Documents";
import Step7Review from "./Step7Review";

const AddNewProject = () => {
  document.title = "إضافة مشروع جديد | أنضج";
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    basicInfo: {},
    description: {},
    location: {},
    budget: {},
    team: {},
    documents: {},
  });

  // Total number of steps
  const totalSteps = 7;

  // Update form data from each step
  const updateFormData = (step: string, data: any) => {
    setFormData({
      ...formData,
      [step]: data,
    });
  };

  // Navigate to next step
  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
      // Scroll to top when changing steps
      window.scrollTo(0, 0);
    }
  };

  // Navigate to previous step
  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
      // Scroll to top when changing steps
      window.scrollTo(0, 0);
    }
  };

  // Go to a specific step
  const goToStep = (step: number) => {
    if (step >= 1 && step <= totalSteps) {
      setCurrentStep(step);
      // Scroll to top when changing steps
      window.scrollTo(0, 0);
    }
  };

  // Render current step component
  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <Step1BasicInfo
            nextStep={nextStep}
            formData={formData.basicInfo}
            updateFormData={(data) => updateFormData("basicInfo", data)}
          />
        );
      case 2:
        return (
          <Step2Description
            nextStep={nextStep}
            prevStep={prevStep}
            formData={formData.description}
            updateFormData={(data) => updateFormData("description", data)}
          />
        );
      case 3:
        return (
          <Step3Location
            nextStep={nextStep}
            prevStep={prevStep}
            formData={formData.location}
            updateFormData={(data) => updateFormData("location", data)}
          />
        );
      case 4:
        return (
          <Step4Budget
            nextStep={nextStep}
            prevStep={prevStep}
            formData={formData.budget}
            updateFormData={(data) => updateFormData("budget", data)}
          />
        );
      case 5:
        return (
          <Step5Team
            nextStep={nextStep}
            prevStep={prevStep}
            formData={formData.team}
            updateFormData={(data) => updateFormData("team", data)}
          />
        );
      case 6:
        return (
          <Step6Documents
            nextStep={nextStep}
            prevStep={prevStep}
            formData={formData.documents}
            updateFormData={(data) => updateFormData("documents", data)}
          />
        );
      case 7:
        return (
          <Step7Review
            prevStep={prevStep}
            formData={formData}
            submitForm={() => alert("تم إرسال النموذج بنجاح!")}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="page-content">
      <Container fluid>
        <Row>
          <Col lg={12}>
            <Card className="mb-4">
              <CardBody className="p-4">
                <div className="text-center mb-4">
                  <h3 className="mb-3">إضافة مشروع جديد</h3>
                  <p className="text-muted">
                    أدخل تفاصيل مشروعك الجديد من خلال الخطوات التالية
                  </p>
                </div>

                {/* Stepper Header with Icons */}
                <StepperHeader
                  currentStep={currentStep}
                  totalSteps={totalSteps}
                  goToStep={goToStep}
                />
              </CardBody>
            </Card>

            {/* Content of current step */}
            <Card>
              <CardBody className="p-4">
                {renderStep()}
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AddNewProject;
