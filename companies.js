const companies = [
  {
    name: "Company 1",
    employees: [
      { name: "Alice", role: "Developer", department: "Engineering" },
      { name: "Bob", role: "Manager", department: "Engineering" },
      { name: "Charlie", role: "Designer", department: "Design" },
    ],
  },
];

function processCompanies(companies) {
  //create a new array

  const processCompanies = [];

  companies.forEach((company) => {
    //calculate the number of employees
    const numEmployees = company.employees.length;

    //new array for departments
    const departments = {};

    company.employees.forEach((employee) => {
      const departmentName = employee.department;

      if (departmentName in departments) {
        departments[departmentName] += 1;
      } else {
        departments[departmentName] = 1;
      }
    });

    processCompanies.push({
      ...companies,
      numEmployees,
      departments: Object.entries(departments).map(([name, count]) => ({
        name,
        count,
      })),
    });
  });

  return processCompanies;
}

console.log(processCompanies(companies));

// function processCompanies(companies) {
//   companies[0].numEmployees = 3;
//   companies[0].employees.splice();
//   companies[0].departments = {
//     Engineering: 2,
//     Design: 1,
//   };
//   return companies;
// }

//console.log(companies);
//
