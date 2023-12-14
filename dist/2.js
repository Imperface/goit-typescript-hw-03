/*
  Ваше завдання полягатиме у створенні двох класів – Employee та Manager.

  Клас Employee повинен включати:

  властивість name, яка буде доступна всім.
  властивість department, яка буде доступна лише всередині класу Employee.
  salary, яке буде доступне лише всередині класу Employee та його підкласів.


  Клас Manager повинен бути підклас класу Employee

  Необхідно реалізувати в класі Manager конструктор, який викликатиме конструктор суперкласу та збільшуватиме salary на 10000.

*/
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
    }
    get salaryValue() {
        return this.salary;
    }
    checkValue(value) {
        if (value < 0) {
            console.log("value must be greater than 0");
            return false;
        }
        return true;
    }
    set salaryIncreaseByValue(value) {
        this.checkValue(value) ? (this.salary += value) : null;
    }
    set salaryDecreaseByValue(value) {
        this.checkValue(value) ? (this.salary -= value) : null;
    }
}
const emp = new Employee("emp", "economy", 20000);
console.log("emp obj", emp);
const manag = new Manager("manag", "transport", 30000);
console.log("manag obj", manag);
manag.salaryIncreaseByValue = 10000;
console.log("after manag salary increase", manag);
manag.salaryDecreaseByValue = -5000;
console.log("after WRONG manag salary decrease", manag);
manag.salaryDecreaseByValue = 5000;
console.log("after manag salary decrease", manag);
console.log("use extends method");
console.log(manag.getEmployeeDetails());
//# sourceMappingURL=2.js.map