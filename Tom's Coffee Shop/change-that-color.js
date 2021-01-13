let body = document.querySelector("body");
document.querySelector("#red").onclick = function() {
    body.style.backgroundColor = "red";
};
document.querySelector("#green").onclick = function() {
    body.style.backgroundColor = "green";
};
document.querySelector("#blue").onclick = function() {
    body.style.backgroundColor = "blue";
};

document.querySelector("#blue").onclick = function() {
    body.style.backgroundColor = "blue";
};
document.querySelector("#default").onclick = function() {
    body.style.backgroundColor = "white";
};

function blink() {
    let body = document.querySelector("body");
    if (body.style.visibility == "hidden") {
        body.style.visibility = "visible";
    } else {
        body.style.visibility = "hidden"
    }
}
window.setInterval(blink, 300)