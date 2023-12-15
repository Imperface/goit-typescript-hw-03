class Employee {
    constructor(name, department, salary) {
        this.name = name;
        this.department = department;
        this.salary = salary;
    }
    getEmployeeDetails() {
        return `Name: ${this.name}, Department: ${this.department}, Salary: ${this.salary}`;
    }
}
class Manager extends Employee {
    constructor(name, department, salary) {
        super(name, department, salary);
        this.salary += 10000;
    }
    get salaryValue() {
        console.log(`Salary ${this.name} is ${this.salary} `);
        return this.salary;
    }
}
const emp = new Employee("emp", "economy", 20000);
console.log("emp obj", emp);
const manag = new Manager("manag", "transport", 30000);
console.log("manag obj", manag);
console.log(emp.getEmployeeDetails());
console.log(manag.getEmployeeDetails());
const manag1 = new Manager("manag1", "electric", 40000);
console.log(manag1.getEmployeeDetails());
//# sourceMappingURL=2.js.map