import React, { useState } from "react";
import { Form, FormGroup, Label, Input, Button, Table, Row, Col } from "reactstrap";

interface Step5Props {
  nextStep: () => void;
  prevStep: () => void;
  formData: any;
  updateFormData: (data: any) => void;
}

const Step5Team = ({ nextStep, prevStep, formData, updateFormData }: Step5Props) => {
  const [teamData, setTeamData] = useState({
    projectManager: {
      name: "",
      email: "",
      phone: "",
    },
    teamMembers: [
      { id: 1, name: "", role: "", email: "", phone: "" },
      { id: 2, name: "", role: "", email: "", phone: "" },
    ],
    ...formData,
  });

  const handleProjectManagerChange = (field: string, value: string) => {
    setTeamData({
      ...teamData,
      projectManager: {
        ...teamData.projectManager,
        [field]: value,
      },
    });
  };

  const handleTeamMemberChange = (id: number, field: string, value: string) => {
    const updatedMembers = teamData.teamMembers.map((member) =>
      member.id === id ? { ...member, [field]: value } : member
    );
    setTeamData({
      ...teamData,
      teamMembers: updatedMembers,
    });
  };

  const addTeamMember = () => {
    const newId = teamData.teamMembers.length > 0 
      ? Math.max(...teamData.teamMembers.map(member => member.id)) + 1 
      : 1;
    
    setTeamData({
      ...teamData,
      teamMembers: [
        ...teamData.teamMembers,
        {
          id: newId,
          name: "",
          role: "",
          email: "",
          phone: "",
        },
      ],
    });
  };

  const removeTeamMember = (id: number) => {
    setTeamData({
      ...teamData,
      teamMembers: teamData.teamMembers.filter((member) => member.id !== id),
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    updateFormData(teamData);
    nextStep();
  };

  return (
    <div className="step-content">
      <h4 className="mb-4">فريق العمل</h4>
      <Form onSubmit={handleSubmit}>
        <div className="mb-4">
          <h5 className="mb-3">مدير المشروع</h5>
          <Row>
            <Col md={4}>
              <FormGroup>
                <Label for="managerName">الاسم</Label>
                <Input
                  type="text"
                  id="managerName"
                  value={teamData.projectManager.name}
                  onChange={(e) => handleProjectManagerChange("name", e.target.value)}
                  placeholder="اسم مدير المشروع"
                  required
                />
              </FormGroup>
            </Col>
            <Col md={4}>
              <FormGroup>
                <Label for="managerEmail">البريد الإلكتروني</Label>
                <Input
                  type="email"
                  id="managerEmail"
                  value={teamData.projectManager.email}
                  onChange={(e) => handleProjectManagerChange("email", e.target.value)}
                  placeholder="البريد الإلكتروني"
                  required
                />
              </FormGroup>
            </Col>
            <Col md={4}>
              <FormGroup>
                <Label for="managerPhone">رقم الهاتف</Label>
                <Input
                  type="tel"
                  id="managerPhone"
                  value={teamData.projectManager.phone}
                  onChange={(e) => handleProjectManagerChange("phone", e.target.value)}
                  placeholder="رقم الهاتف"
                  required
                />
              </FormGroup>
            </Col>
          </Row>
        </div>

        <div className="mb-3">
          <h5 className="mb-3">أعضاء الفريق</h5>
          <div className="table-responsive">
            <Table bordered className="mb-0">
              <thead>
                <tr>
                  <th>الاسم</th>
                  <th>الدور الوظيفي</th>
                  <th>البريد الإلكتروني</th>
                  <th>رقم الهاتف</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {teamData.teamMembers.map((member) => (
                  <tr key={member.id}>
                    <td>
                      <Input
                        type="text"
                        value={member.name}
                        onChange={(e) =>
                          handleTeamMemberChange(member.id, "name", e.target.value)
                        }
                        placeholder="الاسم"
                        required
                      />
                    </td>
                    <td>
                      <Input
                        type="text"
                        value={member.role}
                        onChange={(e) =>
                          handleTeamMemberChange(member.id, "role", e.target.value)
                        }
                        placeholder="الدور الوظيفي"
                        required
                      />
                    </td>
                    <td>
                      <Input
                        type="email"
                        value={member.email}
                        onChange={(e) =>
                          handleTeamMemberChange(member.id, "email", e.target.value)
                        }
                        placeholder="البريد الإلكتروني"
                        required
                      />
                    </td>
                    <td>
                      <Input
                        type="tel"
                        value={member.phone}
                        onChange={(e) =>
                          handleTeamMemberChange(member.id, "phone", e.target.value)
                        }
                        placeholder="رقم الهاتف"
                        required
                      />
                    </td>
                    <td className="text-center">
                      <Button
                        type="button"
                        color="danger"
                        size="sm"
                        onClick={() => removeTeamMember(member.id)}
                        disabled={teamData.teamMembers.length <= 1}
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
                      onClick={addTeamMember}
                      className="w-100"
                    >
                      <i className="ri-add-line me-1"></i> إضافة عضو جديد
                    </Button>
                  </td>
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

export default Step5Team;