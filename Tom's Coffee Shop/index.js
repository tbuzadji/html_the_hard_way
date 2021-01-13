// let count = 5;
// let hello = 6;
// if (hello < count) {
//     console.log("Hi!")
// } else {
//     console.log("Bye")
// }

function greet() {
    let name = document.querySelector("#name").value;
    alert("Вы хотите сказать что вас зовут " + name + "?? Вы серьезно? Очень странное имя у вас!");
}
document.addEventListener("DOMCOntentLoaded", function() {
    document.querySelector('form').addEventListener("submit", greet);
});