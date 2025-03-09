import React, { useState, useEffect } from "react";
import { Form, FormGroup, Label, Input, Button, Row, Col } from "reactstrap";

interface Step1Props {
  nextStep: () => void;
  formData: any;
  updateFormData: (data: any) => void;
}

const Step1BasicInfo = ({ nextStep, formData, updateFormData }: Step1Props) => {
  const [projectData, setProjectData] = useState({
    title: "",
    category: "",
    startDate: "",
    endDate: "",
    priority: "",
    ...formData,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
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
      <h4 className="mb-4">المعلومات الأساسية للمشروع</h4>
      <Form onSubmit={handleSubmit}>
        <Row>
          <Col md={6}>
            <FormGroup>
              <Label for="title">اسم المشروع</Label>
              <Input
                type="text"
                id="title"
                name="title"
                value={projectData.title}
                onChange={handleChange}
                placeholder="أدخل اسم المشروع"
                required
              />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="category">فئة المشروع</Label>
              <Input
                type="select"
                id="category"
                name="category"
                value={projectData.category}
                onChange={handleChange}
                required
              >
                <option value="">اختر فئة</option>
                <option value="real_estate">مشاريع عقارية</option>
                <option value="commercial">مشاريع تجارية</option>
                <option value="community">مبادرات مجتمعية</option>
                <option value="agriculture">مشاريع زراعية</option>
              </Input>
            </FormGroup>
          </Col>
        </Row>

        <Row>
          <Col md={6}>
            <FormGroup>
              <Label for="startDate">تاريخ البدء المتوقع</Label>
              <Input
                type="date"
                id="startDate"
                name="startDate"
                value={projectData.startDate}
                onChange={handleChange}
                required
              />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="endDate">تاريخ الانتهاء المتوقع</Label>
              <Input
                type="date"
                id="endDate"
                name="endDate"
                value={projectData.endDate}
                onChange={handleChange}
                required
              />
            </FormGroup>
          </Col>
        </Row>

        <FormGroup>
          <Label for="priority">أولوية المشروع</Label>
          <Input
            type="select"
            id="priority"
            name="priority"
            value={projectData.priority}
            onChange={handleChange}
            required
          >
            <option value="">اختر الأولوية</option>
            <option value="high">عالية</option>
            <option value="medium">متوسطة</option>
            <option value="low">منخفضة</option>
          </Input>
        </FormGroup>

        <div className="d-flex justify-content-end mt-4">
          <Button color="primary" type="submit">
            التالي <i className="ri-arrow-left-line ms-1"></i>
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default Step1BasicInfo;
