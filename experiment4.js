function calculateResult() {
    let num = document.getElementById("subjects").value;
    let total = 0;
    let pass = true;

    for (let i = 1; i <= num; i++) {
        let marks = prompt("Enter marks for Subject " + i);

        if (marks === null || marks === "" || isNaN(marks)) {
            alert("Invalid input!");
            return;
        }

        marks = Number(marks);

        if (marks < 33) {
            pass = false;
        }

        total += marks;
    }

    let average = total / num;
    let grade = "";

    if (average >= 90) {
        grade = "A+";
    } else if (average >= 75) {
        grade = "A";
    } else if (average >= 60) {
        grade = "B";
    } else if (average >= 50) {
        grade = "C";
    } else {
        grade = "D";
    }

    let resultStatus = pass ? "PASS" : "FAIL";

    document.getElementById("result").innerHTML = `
        Total Marks: ${total} <br>
        Average Marks: ${average.toFixed(2)} <br>
        Grade: ${grade} <br>
        Result: ${resultStatus}
    `;
}
