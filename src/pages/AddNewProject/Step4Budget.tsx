import React, { useState } from "react";
import { Form, FormGroup, Label, Input, Button, Table, Row, Col } from "reactstrap";

interface Step4Props {
  nextStep: () => void;
  prevStep: () => void;
  formData: any;
  updateFormData: (data: any) => void;
}

const Step4Budget = ({ nextStep, prevStep, formData, updateFormData }: Step4Props) => {
  const [budgetData, setBudgetData] = useState({
    totalBudget: "",
    currency: "SAR",
    fundingSource: "",
    budgetItems: [
      { id: 1, category: "بناء", amount: "", description: "" },
      { id: 2, category: "مواد", amount: "", description: "" },
      { id: 3, category: "عمالة", amount: "", description: "" },
    ],
    ...formData,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setBudgetData({ ...budgetData, [name]: value });
  };

  const handleBudgetItemChange = (id: number, field: string, value: string) => {
    const updatedItems = budgetData.budgetItems.map((item) =>
      item.id === id ? { ...item, [field]: value } : item
    );
    setBudgetData({ ...budgetData, budgetItems: updatedItems });
  };

  const addBudgetItem = () => {
    const newId = budgetData.budgetItems.length > 0 
      ? Math.max(...budgetData.budgetItems.map(item => item.id)) + 1 
      : 1;
    
    setBudgetData({
      ...budgetData,
      budgetItems: [
        ...budgetData.budgetItems,
        {
          id: newId,
          category: "",
          amount: "",
          description: "",
        },
      ],
    });
  };

  const removeBudgetItem = (id: number) => {
    setBudgetData({
      ...budgetData,
      budgetItems: budgetData.budgetItems.filter((item) => item.id !== id),
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    updateFormData(budgetData);
    nextStep();
  };

  // Calculate total from items
  const calculatedTotal = budgetData.budgetItems.reduce(
    (sum, item) => sum + (parseFloat(item.amount) || 0),
    0
  );

  return (
    <div className="step-content">
      <h4 className="mb-4">ميزانية المشروع</h4>
      <Form onSubmit={handleSubmit}>
        <Row>
          <Col md={6}>
            <FormGroup>
              <Label for="totalBudget">الميزانية الإجمالية</Label>
              <Input
                type="number"
                id="totalBudget"
                name="totalBudget"
                value={budgetData.totalBudget}
                onChange={handleChange}
                placeholder="أدخل الميزانية الإجمالية للمشروع"
                required
              />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="currency">العملة</Label>
              <Input
                type="select"
                id="currency"
                name="currency"
                value={budgetData.currency}
                onChange={handleChange}
                required
              >
                <option value="SAR">ريال سعودي (SAR)</option>
                <option value="USD">دولار أمريكي (USD)</option>
                <option value="EUR">يورو (EUR)</option>
              </Input>
            </FormGroup>
          </Col>
        </Row>

        <FormGroup className="mb-4">
          <Label for="fundingSource">مصدر التمويل</Label>
          <Input
            type="select"
            id="fundingSource"
            name="fundingSource"
            value={budgetData.fundingSource}
            onChange={handleChange}
            required
          >
            <option value="">اختر مصدر التمويل</option>
            <option value="self">تمويل ذاتي</option>
            <option value="loan">قرض</option>
            <option value="investors">مستثمرين</option>
            <option value="government">تمويل حكومي</option>
            <option value="mixed">مصادر متعددة</option>
          </Input>
        </FormGroup>

        <div className="mb-3">
          <Label className="mb-3">تفاصيل الميزانية</Label>
          <div className="table-responsive">
            <Table bordered className="mb-0">
              <thead>
                <tr>
                  <th style={{ width: "35%" }}>الفئة</th>
                  <th style={{ width: "20%" }}>المبلغ</th>
                  <th style={{ width: "35%" }}>الوصف</th>
                  <th style={{ width: "10%" }}></th>
                </tr>
              </thead>
              <tbody>
                {budgetData.budgetItems.map((item) => (
                  <tr key={item.id}>
                    <td>
                      <Input
                        type="text"
                        value={item.category}
                        onChange={(e) =>
                          handleBudgetItemChange(item.id, "category", e.target.value)
                        }
                        placeholder="أدخل فئة المصروف"
                        required
                      />
                    </td>
                    <td>
                      <Input
                        type="number"
                        value={item.amount}
                        onChange={(e) =>
                          handleBudgetItemChange(item.id, "amount", e.target.value)
                        }
                        placeholder="المبلغ"
                        required
                      />
                    </td>
                    <td>
                      <Input
                        type="text"
                        value={item.description}
                        onChange={(e) =>
                          handleBudgetItemChange(
                            item.id,
                            "description",
                            e.target.value
                          )
                        }
                        placeholder="وصف مختصر"
                      />
                    </td>
                    <td className="text-center">
                      <Button
                        type="button"
                        color="danger"
                        size="sm"
                        onClick={() => removeBudgetItem(item.id)}
                        disabled={budgetData.budgetItems.length <= 1}
                      >
                        <i className="ri-delete-bin-line"></i>
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr>
                  <td colSpan={4}>
                    <Button
                      type="button"
                      color="soft-primary"
                      size="sm"
                      onClick={addBudgetItem}
                      className="w-100"
                    >
                      <i className="ri-add-line me-1"></i> إضافة عنصر جديد
                    </Button>
                  </td>
                </tr>
                <tr>
                  <th>المجموع</th>
                  <th colSpan={3}>
                    {calculatedTotal.toLocaleString()} {budgetData.currency}
                  </th>
                </tr>
              </tfoot>
            </Table>
          </div>
        </div>

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

export default Step4Budget;
