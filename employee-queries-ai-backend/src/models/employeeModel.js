import fs from 'fs';
const knowledgeBase = JSON.parse(fs.readFileSync('knowledge_base/employee_data.json', 'utf8'));

// Function to get employee data
async function getEmployeeData(userId) {
  const employee = knowledgeBase.employees.find((emp) => emp.userId === userId);
  if (employee) {
    return {
      status: 'success',
      data: employee,
    };
  } else {
    return {
      status: 'error',
      message: 'Employee not found.',
    };
  }
}

export default getEmployeeData;
