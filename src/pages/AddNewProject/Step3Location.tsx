import React, { useState } from "react";
import { Form, FormGroup, Label, Input, Button, Row, Col } from "reactstrap";

interface Step3Props {
  nextStep: () => void;
  prevStep: () => void;
  formData: any;
  updateFormData: (data: any) => void;
}

const Step3Location = ({ nextStep, prevStep, formData, updateFormData }: Step3Props) => {
  const [locationData, setLocationData] = useState({
    city: "",
    district: "",
    address: "",
    coordinates: "",
    locationSize: "",
    ...formData,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setLocationData({ ...locationData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    updateFormData(locationData);
    nextStep();
  };

  // Placeholder image for map
  const mapImage = "https://via.placeholder.com/800x400?text=خريطة+الموقع";

  return (
    <div className="step-content">
      <h4 className="mb-4">موقع المشروع</h4>
      <Form onSubmit={handleSubmit}>
        <Row>
          <Col md={6}>
            <FormGroup>
              <Label for="city">المدينة</Label>
              <Input
                type="select"
                id="city"
                name="city"
                value={locationData.city}
                onChange={handleChange}
                required
              >
                <option value="">اختر المدينة</option>
                <option value="riyadh">الرياض</option>
                <option value="jeddah">جدة</option>
                <option value="dammam">الدمام</option>
                <option value="mecca">مكة المكرمة</option>
                <option value="medina">المدينة المنورة</option>
              </Input>
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="district">الحي</Label>
              <Input
                type="text"
                id="district"
                name="district"
                value={locationData.district}
                onChange={handleChange}
                placeholder="أدخل اسم الحي"
                required
              />
            </FormGroup>
          </Col>
        </Row>

        <FormGroup>
          <Label for="address">العنوان التفصيلي</Label>
          <Input
            type="textarea"
            id="address"
            name="address"
            value={locationData.address}
            onChange={handleChange}
            placeholder="اكتب العنوان التفصيلي للموقع"
            rows={3}
            required
          />
        </FormGroup>

        <FormGroup className="mb-4">
          <Label for="locationSize">مساحة الموقع (م²)</Label>
          <Input
            type="number"
            id="locationSize"
            name="locationSize"
            value={locationData.locationSize}
            onChange={handleChange}
            placeholder="أدخل مساحة الموقع بالمتر المربع"
          />
        </FormGroup>

        <div className="mb-4">
          <Label className="mb-2">حدد الموقع على الخريطة</Label>
          <div className="border rounded">
            <img src={mapImage} alt="خريطة الموقع" className="img-fluid rounded" />
          </div>
          <div className="mt-2 text-muted small">انقر على الخريطة لتحديد موقع المشروع</div>
        </div>

        <FormGroup>
          <Label for="coordinates">الإحداثيات (سيتم تعبئتها تلقائيًا)</Label>
          <Input
            type="text"
            id="coordinates"
            name="coordinates"
            value={locationData.coordinates}
            onChange={handleChange}
            placeholder="خط العرض، خط الطول"
            disabled
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

export default Step3Location;
