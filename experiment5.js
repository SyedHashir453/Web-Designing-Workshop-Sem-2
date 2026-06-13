let employees = [];

function addEmployee() {
    let name = document.getElementById("name").value;
    let id = document.getElementById("id").value;
    let salary = parseFloat(document.getElementById("salary").value);
    let dept = document.getElementById("dept").value;

    if (name === "" || id === "" || isNaN(salary) || dept === "") {
        alert("Fill all fields!");
        return;
    }

    let emp = {
        name: name,
        id: id,
        salary: salary,
        dept: dept
    };

    employees.push(emp);

    alert("Employee Added Successfully!");

    document.getElementById("name").value = "";
    document.getElementById("id").value = "";
    document.getElementById("salary").value = "";
    document.getElementById("dept").value = "";
}

function displayAll() {
    let result = "";

    employees.forEach(function(emp) {
        result +=
            "Name: " + emp.name +
            ", ID: " + emp.id +
            ", Salary: " + emp.salary +
            ", Dept: " + emp.dept + "<br>";
    });

    document.getElementById("output").innerHTML = result;
}

function totalSalary() {
    let total = 0;

    employees.forEach(function(emp) {
        total += emp.salary;
    });

    document.getElementById("output").innerHTML =
        "Total Salary: " + total;
}

function averageSalary() {
    if (employees.length === 0) return;

    let total = 0;

    employees.forEach(function(emp) {
        total += emp.salary;
    });

    let avg = total / employees.length;

    document.getElementById("output").innerHTML =
        "Average Salary: " + avg;
}

function countDept() {
    let count = {};

    employees.forEach(function(emp) {
        if (count[emp.dept]) {
            count[emp.dept]++;
        } else {
            count[emp.dept] = 1;
        }
    });

    let result = "";

    for (let d in count) {
        result += d + ": " + count[d] + "<br>";
    }

    document.getElementById("output").innerHTML = result;
}