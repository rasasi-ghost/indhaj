import React from "react";
import { Button, Row, Col, Card, CardBody, Table } from "reactstrap";

interface Step7Props {
  prevStep: () => void;
  formData: any;
  submitForm: () => void;
}

const Step7Review = ({ prevStep, formData, submitForm }: Step7Props) => {
  const { basicInfo, description, location, budget, team, documents } = formData;

  // Helper function to format date
  const formatDate = (dateString: string) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    return date.toLocaleDateString('ar-SA');
  };

  // Helper function to get document type label
  const getDocumentTypeLabel = (type: string) => {
    const documentTypes: {[key: string]: string} = {
      project_plan: "خطة المشروع",
      feasibility_study: "دراسة الجدوى",
      license: "الرخص والتصاريح",
      contract: "العقود",
      financial_statement: "البيانات المالية",
      technical_specs: "المواصفات الفنية",
      other: "مستندات أخرى",
    };
    return documentTypes[type] || type;
  };

  return (
    <div className="step-content">
      <h4 className="mb-4">مراجعة وإرسال المشروع</h4>

      <div className="alert alert-info mb-4" role="alert">
        <i className="ri-information-line me-2"></i>
        راجع جميع بيانات المشروع قبل الإرسال النهائي. بعد الإرسال، سيتم مراجعة المشروع من قبل الفريق المختص.
      </div>

      <Row>
        <Col lg="12" className="mb-4">
          <Card>
            <CardBody>
              <h5 className="card-title mb-3">المعلومات الأساسية</h5>
              <div className="table-responsive">
                <Table className="table-borderless mb-0">
                  <tbody>
                    <tr>
                      <th style={{ width: "30%" }}>اسم المشروع</th>
                      <td>{basicInfo?.title || "-"}</td>
                    </tr>
                    <tr>
                      <th>فئة المشروع</th>
                      <td>
                        {basicInfo?.category === "real_estate" ? "مشاريع عقارية" :
                         basicInfo?.category === "commercial" ? "مشاريع تجارية" :
                         basicInfo?.category === "community" ? "مبادرات مجتمعية" :
                         basicInfo?.category === "agriculture" ? "مشاريع زراعية" : "-"}
                      </td>
                    </tr>
                    <tr>
                      <th>تاريخ البدء المتوقع</th>
                      <td>{formatDate(basicInfo?.startDate) || "-"}</td>
                    </tr>
                    <tr>
                      <th>تاريخ الانتهاء المتوقع</th>
                      <td>{formatDate(basicInfo?.endDate) || "-"}</td>
                    </tr>
                    <tr>
                      <th>أولوية المشروع</th>
                      <td>
                        {basicInfo?.priority === "high" ? "عالية" :
                         basicInfo?.priority === "medium" ? "متوسطة" :
                         basicInfo?.priority === "low" ? "منخفضة" : "-"}
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </CardBody>
          </Card>
        </Col>

        <Col lg="12" className="mb-4">
          <Card>
            <CardBody>
              <h5 className="card-title mb-3">وصف المشروع</h5>
              <div className="table-responsive">
                <Table className="table-borderless mb-0">
                  <tbody>
                    <tr>
                      <th style={{ width: "30%" }}>وصف المشروع</th>
                      <td>{description?.description || "-"}</td>
                    </tr>
                    <tr>
                      <th>أهداف المشروع</th>
                      <td>{description?.objectives || "-"}</td>
                    </tr>
                    <tr>
                      <th>الفوائد المتوقعة</th>
                      <td>{description?.benefits || "-"}</td>
                    </tr>
                    <tr>
                      <th>التحديات المتوقعة</th>
                      <td>{description?.challenges || "-"}</td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </CardBody>
          </Card>
        </Col>

        <Col lg="12" className="mb-4">
          <Card>
            <CardBody>
              <h5 className="card-title mb-3">موقع المشروع</h5>
              <div className="table-responsive">
                <Table className="table-borderless mb-0">
                  <tbody>
                    <tr>
                      <th style={{ width: "30%" }}>المدينة</th>
                      <td>
                        {location?.city === "riyadh" ? "الرياض" :
                         location?.city === "jeddah" ? "جدة" :
                         location?.city === "dammam" ? "الدمام" :
                         location?.city === "mecca" ? "مكة المكرمة" :
                         location?.city === "medina" ? "المدينة المنورة" : "-"}
                      </td>
                    </tr>
                    <tr>
                      <th>الحي</th>
                      <td>{location?.district || "-"}</td>
                    </tr>
                    <tr>
                      <th>العنوان التفصيلي</th>
                      <td>{location?.address || "-"}</td>
                    </tr>
                    <tr>
                      <th>مساحة الموقع</th>
                      <td>{location?.locationSize ? `${location.locationSize} م²` : "-"}</td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </CardBody>
          </Card>
        </Col>

        <Col lg="12" className="mb-4">
          <Card>
            <CardBody>
              <h5 className="card-title mb-3">ميزانية المشروع</h5>
              <div className="table-responsive">
                <Table className="table-borderless mb-0">
                  <tbody>
                    <tr>
                      <th style={{ width: "30%" }}>الميزانية الإجمالية</th>
                      <td>
                        {budget?.totalBudget
                          ? `${Number(budget.totalBudget).toLocaleString()} ${budget.currency}`
                          : "-"}
                      </td>
                    </tr>
                    <tr>
                      <th>مصدر التمويل</th>
                      <td>
                        {budget?.fundingSource === "self" ? "تمويل ذاتي" :
                         budget?.fundingSource === "loan" ? "قرض" :
                         budget?.fundingSource === "investors" ? "مستثمرين" :
                         budget?.fundingSource === "government" ? "تمويل حكومي" :
                         budget?.fundingSource === "mixed" ? "مصادر متعددة" : "-"}
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </div>

              {budget?.budgetItems && budget.budgetItems.length > 0 && (
                <div className="mt-3">
                  <h6 className="mb-2">تفاصيل الميزانية</h6>
                  <div className="table-responsive">
                    <Table bordered>
                      <thead>
                        <tr>
                          <th>الفئة</th>
                          <th>المبلغ</th>
                          <th>الوصف</th>
                        </tr>
                      </thead>
                      <tbody>
                        {budget.budgetItems.map((item: any, index: number) => (
                          <tr key={index}>
                            <td>{item.category}</td>
                            <td>{item.amount ? `${Number(item.amount).toLocaleString()} ${budget.currency}` : "-"}</td>
                            <td>{item.description || "-"}</td>
                          </tr>
                        ))}
                      </tbody>
                    </Table>
                  </div>
                </div>
              )}
            </CardBody>
          </Card>
        </Col>

        <Col lg="12" className="mb-4">
          <Card>
            <CardBody>
              <h5 className="card-title mb-3">فريق العمل</h5>
              
              <h6 className="mb-2">مدير المشروع</h6>
              <div className="table-responsive mb-3">
                <Table className="table-borderless mb-0">
                  <tbody>
                    <tr>
                      <th style={{ width: "30%" }}>الاسم</th>
                      <td>{team?.projectManager?.name || "-"}</td>
                    </tr>
                    <tr>
                      <th>البريد الإلكتروني</th>
                      <td>{team?.projectManager?.email || "-"}</td>
                    </tr>
                    <tr>
                      <th>رقم الهاتف</th>
                      <td>{team?.projectManager?.phone || "-"}</td>
                    </tr>
                  </tbody>
                </Table>
              </div>

              {team?.teamMembers && team.teamMembers.length > 0 && (
                <>
                  <h6 className="mb-2">أعضاء الفريق</h6>
                  <div className="table-responsive">
                    <Table bordered>
                      <thead>
                        <tr>
                          <th>الاسم</th>
                          <th>الدور الوظيفي</th>
                          <th>البريد الإلكتروني</th>
                          <th>رقم الهاتف</th>
                        </tr>
                      </thead>
                      <tbody>
                        {team.teamMembers.map((member: any, index: number) => (
                          <tr key={index}>
                            <td>{member.name || "-"}</td>
                            <td>{member.role || "-"}</td>
                            <td>{member.email || "-"}</td>
                            <td>{member.phone || "-"}</td>
                          </tr>
                        ))}
                      </tbody>
                    </Table>
                  </div>
                </>
              )}
            </CardBody>
          </Card>
        </Col>

        <Col lg="12" className="mb-4">
          <Card>
            <CardBody>
              <h5 className="card-title mb-3">المستندات</h5>
              {documents?.documents && documents.documents.length > 0 ? (
                <div className="table-responsive">
                  <Table bordered>
                    <thead>
                      <tr>
                        <th>نوع المستند</th>
                        <th>وصف</th>
                        <th>اسم الملف</th>
                        <th>الحالة</th>
                      </tr>
                    </thead>
                    <tbody>
                      {documents.documents.map((doc: any, index: number) => (
                        <tr key={index}>
                          <td>{getDocumentTypeLabel(doc.type) || "-"}</td>
                          <td>{doc.description || "-"}</td>
                          <td>{doc.name || "-"}</td>
                          <td>
                            <span
                              className={`badge ${
                                doc.status === "approved"
                                  ? "bg-success"
                                  : doc.status === "rejected"
                                  ? "bg-danger"
                                  : "bg-warning"
                              }`}
                            >
                              {doc.status === "approved"
                                ? "تمت الموافقة"
                                : doc.status === "rejected"
                                ? "مرفوض"
                                : "قيد المراجعة"}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                </div>
              ) : (
                <p className="text-muted">لم يتم إضافة أي مستندات.</p>
              )}
            </CardBody>
          </Card>
        </Col>
      </Row>

      <div className="d-flex justify-content-between mt-4">
        <Button color="light" onClick={prevStep}>
          <i className="ri-arrow-right-line me-1"></i> السابق
        </Button>
        <Button color="success" onClick={submitForm}>
          إرسال المشروع <i className="ri-check-line ms-1"></i>
        </Button>
      </div>
    </div>
  );
};

export default Step7Review;
