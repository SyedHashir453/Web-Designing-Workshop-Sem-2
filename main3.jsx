document.getElementById("changetextbtn").addEventListener("click", function() {
    if(input.value !== "") {
        heading.innerHTML = input.value;
    }
})




document.getElementById("bgcolorbtn").onclick = function() {
    document.body.style.backgroundColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
}

document.getElementById("fontsizebtn").addEventListener("click", function() {
    fontSize += 2;
    paragraph.style.fontSize
})