class Employee {
  // properties
  constructor(name, salary) {
    this.name = name;
    this.salary = salary;
  }
  // methods
  getAnnualSalary() {
    return this.salary * 12;
  }
}

class Manager extends Employee {
  constructor(name, salary, department) {
    super(name, salary);
    this.department = department;
  }
  getAnnualSalary() {
    const bonus = 5000;
    return super.getAnnualSalary() + bonus * 12;
  }
}
// instances of manager class
let Manager1 = new Manager("Peter", 250000, "HR");
let Manager2 = new Manager("Mary", 90000, "Security");
//calculate their annual salary
console.log(Manager1.getAnnualSalary());
console.log(Manager2.getAnnualSalary());
