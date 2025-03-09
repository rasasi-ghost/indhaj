import React, { useState } from "react";
import { Form, FormGroup, Label, Input, Button, Row, Col } from "reactstrap";

interface Step2Props {
  nextStep: () => void;
  prevStep: () => void;
  formData: any;
  updateFormData: (data: any) => void;
}

const Step2Description = ({ nextStep, prevStep, formData, updateFormData }: Step2Props) => {
  const [projectData, setProjectData] = useState({
    description: "",
    objectives: "",
    benefits: "",
    challenges: "",
    ...formData,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setProjectData({ ...projectData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    updateFormData(projectData);
    nextStep();
  };

  return (
    <div className="step-content">
      <h4 className="mb-4">وصف المشروع</h4>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label for="description">وصف المشروع</Label>
          <Input
            type="textarea"
            id="description"
            name="description"
            value={projectData.description}
            onChange={handleChange}
            placeholder="اكتب وصفًا تفصيليًا للمشروع"
            rows={4}
            required
          />
        </FormGroup>

        <Row>
          <Col md={6}>
            <FormGroup>
              <Label for="objectives">أهداف المشروع</Label>
              <Input
                type="textarea"
                id="objectives"
                name="objectives"
                value={projectData.objectives}
                onChange={handleChange}
                placeholder="اذكر الأهداف الرئيسية للمشروع"
                rows={3}
                required
              />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="benefits">الفوائد المتوقعة</Label>
              <Input
                type="textarea"
                id="benefits"
                name="benefits"
                value={projectData.benefits}
                onChange={handleChange}
                placeholder="ما هي الفوائد المتوقعة من هذا المشروع؟"
                rows={3}
                required
              />
            </FormGroup>
          </Col>
        </Row>

        <FormGroup>
          <Label for="challenges">التحديات المتوقعة</Label>
          <Input
            type="textarea"
            id="challenges"
            name="challenges"
            value={projectData.challenges}
            onChange={handleChange}
            placeholder="اذكر أي تحديات متوقعة قد تواجه المشروع"
            rows={3}
          />
        </FormGroup>

        <div className="d-flex justify-content-between mt-4">
          <Button color="light" onClick={prevStep}>
            <i className="ri-arrow-right-line me-1"></i> السابق
          </Button>
          <Button color="primary" type="submit">
            التالي <i className="ri-arrow-left-line ms-1"></i>
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default Step2Description;
