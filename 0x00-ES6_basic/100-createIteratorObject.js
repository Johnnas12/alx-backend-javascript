export default function createIteratorObject(report) {
  let departments = Object.values(report.allEmployees);
  let employees = [];

  for (let deptEmployees of departments) {
    employees.push(...deptEmployees);
  }

  let currentIndex = 0;

  return {
    next() {
      return currentIndex < employees.length
        ? employees[currentIndex++]
        : undefined;
    },
  };
}
