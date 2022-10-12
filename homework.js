var Employee = /** @class */ (function () {
    function Employee(_name, _age, _workHour, _overTime, _typeWorker) {
        this.name = "defaultName";
        this.age = 0;
        this.workHour = 0;
        this.overTime = 0;
        this.salary = 0;
        this.name = _name;
        this.age = _age;
        this.workHour = _workHour;
        this.overTime = _overTime;
        this.typeWorker = _typeWorker;
        this.salary = this.salaryCalc(_workHour, _overTime, _typeWorker);
    }
    Employee.prototype.details = function () {
        return "Eployee details \n name: " + this.name + "\n age: " + this.age + "\n salary: " + this.salary;
    };
    Employee.prototype.salaryCalc = function (_work_hour, _over_time, _type_worker) {
        var salaryRes = 0;
        if (_type_worker == "type-1")
            salaryRes = _work_hour * 40 + _over_time * (40 * 1.25);
        if (_type_worker == "type-2")
            salaryRes = _work_hour * 70 + _over_time * (70 * 1.25);
        return salaryRes;
    };
    return Employee;
}());
//------------------1.a-----------------
//יצירה ואיתחול משתשמש חדש,והדפסת הפרטים שלו
var myEmployee = new Employee("Moshe", 19, 10, 3, "type-1");
console.log(myEmployee.details());
//-----------------1.b-------------------
//let a random name by random method, and for-loop
var letName = function () {
    var strName = "";
    for (var i = 0; i < Math.round(Math.random() * 5) + 2; i++) {
        strName += String.fromCharCode(Math.round(Math.random() * (122 - 97)) + 97);
    }
    return strName;
};
// let a random age in rang 20 to 60
var letAge = function () {
    var numAge = Math.round(Math.random() * 40) + 20;
    return numAge;
};
//let a random salary in range 2000 to 7000 for qwestion 1
var letSalary = function () {
    var numSalary = Math.round(Math.random() * 7000) + 2000;
    return numSalary;
};
//let random hours for each employee
var letWorkHour = function () {
    var _workHour = parseInt(((Math.random() * 110) + 80).toFixed(1));
    return _workHour;
};
//let random number for Over time that he is workink
var letOverTime = function () {
    var _workHour = parseInt(((Math.random() * 30) + 30).toFixed(1));
    return _workHour;
};
//type-1=regular worker, type-2 = engineer in randomly
var _typeWorker = "none";
var letTypeWorker = function () {
    var oneOrTwo = Math.round((Math.random() * 1) + 1);
    if (oneOrTwo == 1)
        _typeWorker = "type-1";
    else
        _typeWorker = "type-2";
    return _typeWorker;
};
// creat array list of employees that using the method above and set in random
var newArrEmployee = function (num) {
    var arr = [];
    for (var i = 0; i < num; i++) {
        arr[i] = new Employee(letName(), letAge(), letWorkHour(), letOverTime(), letTypeWorker());
        console.log(arr[i].details());
    }
    return arr;
};
//method that recived array employees and print them salary, and the bigeest one.
var printSalary = function (arr) {
    var maxSalary = 0;
    for (var i = 0; i < arr.length; i++) {
        console.log(arr[i].salary);
        if (maxSalary < arr[i].salary)
            maxSalary = arr[i].salary;
    }
    console.log("The max salary is: ", maxSalary);
};
//play the method. printing all of the employees details, print all thos salary, and the bigest one. 
printSalary(newArrEmployee(4));
