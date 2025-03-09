import React, { useState } from "react";
import { Form, FormGroup, Label, Button, Row, Col, Input, Table } from "reactstrap";

interface Step6Props {
  nextStep: () => void;
  prevStep: () => void;
  formData: any;
  updateFormData: (data: any) => void;
}

const Step6Documents = ({ nextStep, prevStep, formData, updateFormData }: Step6Props) => {
  const [documentsData, setDocumentsData] = useState({
    documents: [
      { id: 1, type: "project_plan", name: "", file: null, description: "", status: "pending" },
      { id: 2, type: "feasibility_study", name: "", file: null, description: "", status: "pending" },
    ],
    termsAgreed: false,
    ...formData,
  });

  const documentTypes = [
    { value: "project_plan", label: "خطة المشروع" },
    { value: "feasibility_study", label: "دراسة الجدوى" },
    { value: "license", label: "الرخص والتصاريح" },
    { value: "contract", label: "العقود" },
    { value: "financial_statement", label: "البيانات المالية" },
    { value: "technical_specs", label: "المواصفات الفنية" },
    { value: "other", label: "مستندات أخرى" },
  ];

  const handleDocumentChange = (id: number, field: string, value: any) => {
    const updatedDocuments = documentsData.documents.map((doc) =>
      doc.id === id ? { ...doc, [field]: value } : doc
    );
    setDocumentsData({
      ...documentsData,
      documents: updatedDocuments,
    });
  };

  const handleFileChange = (id: number, e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      handleDocumentChange(id, "file", file);
      handleDocumentChange(id, "name", file.name);
    }
  };

  const addDocument = () => {
    const newId = documentsData.documents.length > 0
      ? Math.max(...documentsData.documents.map(doc => doc.id)) + 1
      : 1;
    
    setDocumentsData({
      ...documentsData,
      documents: [
        ...documentsData.documents,
        {
          id: newId,
          type: "",
          name: "",
          file: null,
          description: "",
          status: "pending"
        },
      ],
    });
  };

  const removeDocument = (id: number) => {
    setDocumentsData({
      ...documentsData,
      documents: documentsData.documents.filter((doc) => doc.id !== id),
    });
  };

  const handleTermsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDocumentsData({
      ...documentsData,
      termsAgreed: e.target.checked,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    updateFormData(documentsData);
    nextStep();
  };

  return (
    <div className="step-content">
      <h4 className="mb-4">المستندات والملفات</h4>
      <Form onSubmit={handleSubmit}>
        <div className="mb-4">
          <div className="alert alert-info" role="alert">
            <i className="ri-information-line me-2"></i>
            يرجى تحميل المستندات والملفات المطلوبة. صيغ الملفات المدعومة: PDF، JPG، PNG، DOC، DOCX، XLS، XLSX.
          </div>

          <div className="table-responsive">
            <Table className="table-borderless mb-0">
              <thead>
                <tr>
                  <th>نوع المستند</th>
                  <th>وصف</th>
                  <th>الملف</th>
                  <th>الحالة</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {documentsData.documents.map((document) => (
                  <tr key={document.id}>
                    <td>
                      <FormGroup>
                        <Input
                          type="select"
                          value={document.type}
                          onChange={(e) => handleDocumentChange(document.id, "type", e.target.value)}
                          required
                        >
                          <option value="">اختر نوع المستند</option>
                          {documentTypes.map((type) => (
                            <option key={type.value} value={type.value}>
                              {type.label}
                            </option>
                          ))}
                        </Input>
                      </FormGroup>
                    </td>
                    <td>
                      <FormGroup>
                        <Input
                          type="text"
                          value={document.description}
                          onChange={(e) =>
                            handleDocumentChange(document.id, "description", e.target.value)
                          }
                          placeholder="وصف مختصر للمستند"
                        />
                      </FormGroup>
                    </td>
                    <td>
                      <FormGroup>
                        <div className="d-flex align-items-center">
                          <Input
                            type="file"
                            id={`file-${document.id}`}
                            style={{ display: "none" }}
                            onChange={(e) => handleFileChange(document.id, e)}
                          />
                          <Button
                            color="light"
                            size="sm"
                            onClick={() => document.id && document.id > 0 && document.id.toString().length > 0 && document.id.toString().length < 10 && document.id >= 0 && document.id <= Number.MAX_SAFE_INTEGER && document.id % 1 === 0 ? document.getElementById(`file-${document.id}`)?.click() : null}
                          >
                            <i className="ri-upload-cloud-line me-1"></i> تحميل
                          </Button>
                          <span className="ms-2 text-muted small">
                            {document.name || "لم يتم اختيار ملف"}
                          </span>
                        </div>
                      </FormGroup>
                    </td>
                    <td>
                      <span
                        className={`badge ${
                          document.status === "approved"
                            ? "bg-success"
                            : document.status === "rejected"
                            ? "bg-danger"
                            : "bg-warning"
                        }`}
                      >
                        {document.status === "approved"
                          ? "تمت الموافقة"
                          : document.status === "rejected"
                          ? "مرفوض"
                          : "قيد المراجعة"}
                      </span>
                    </td>
                    <td>
                      <Button
                        type="button"
                        color="danger"
                        size="sm"
                        onClick={() => removeDocument(document.id)}
                      >
                        <i className="ri-delete-bin-line"></i>
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr>
                  <td colSpan={5}>
                    <Button
                      type="button"
                      color="soft-primary"
                      size="sm"
                      onClick={addDocument}
                      className="w-100"
                    >
                      <i className="ri-add-line me-1"></i> إضافة مستند آخر
                    </Button>
                  </td>
                </tr>
              </tfoot>
            </Table>
          </div>
        </div>

        <div className="border rounded p-3 mb-4">
          <FormGroup check>
            <Input
              type="checkbox"
              id="termsAgreed"
              checked={documentsData.termsAgreed}
              onChange={handleTermsChange}
              required
            />
            <Label check for="termsAgreed" className="ms-2">
              أقر بأن جميع المستندات المقدمة صحيحة ودقيقة، وأتحمل كامل المسؤولية عن صحة المعلومات المقدمة.
            </Label>
          </FormGroup>
        </div>

        <div className="d-flex justify-content-between mt-4">
          <Button color="light" onClick={prevStep}>
            <i className="ri-arrow-right-line me-1"></i> السابق
          </Button>
          <Button color="primary" type="submit" disabled={!documentsData.termsAgreed}>
            التالي <i className="ri-arrow-left-line ms-1"></i>
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default Step6Documents;
