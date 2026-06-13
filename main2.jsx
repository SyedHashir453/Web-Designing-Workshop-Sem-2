let employees = [];

function addEmployee(){

    let name=document.getElementById("name").value;
    let empId= document.getElementById("empId").value;
    let salary = parseFloat(document.getElementById("salary").value);
    let dept = document.getElementById("dept").value;

    if (name==="" || empId === "" || isNaN(salary) || dept === "") {
        alert("Please fill all fields properly");
        return;
    }

    let employee = {
        name: name,
        id: empId,
        salary: salary,
        department: dept
    };

    employees.push(employee);

    alert("Employee Added Successfully!");

    document.getElementById("name").value = "";
    document.getElementById("empId").value = "";
    document.getElementById("salary").value = "";
    document.getElementById("dept").value = "";

    console.log(employees);
}