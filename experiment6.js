let fontSize = 18;

function changeHeading() {
    let text = document.getElementById("newText").value;

    if (text !== "") {
        document.getElementById("heading").innerText = text;
    }
}

function changeBackground() {
    if (document.body.style.backgroundColor === "lightblue") {
        document.body.style.backgroundColor = "lightgray";
    } else {
        document.body.style.backgroundColor = "lightblue";
    }
}

function increaseFont() {
    fontSize += 2;
    document.getElementById("heading").style.fontSize = fontSize + "px";
}

function toggleParagraph() {
    let para = document.getElementById("para");

    if (para.style.display === "none") {
        para.style.display = "block";
    } else {
        para.style.display = "none";
    }
}

function resetAll() {
    document.getElementById("heading").innerText =
        "Welcome to JavaScript Lab";

    document.body.style.backgroundColor = "lightgray";

    document.getElementById("para").style.display = "block";

    document.getElementById("heading").style.fontSize = "18px";

    fontSize = 18;
}