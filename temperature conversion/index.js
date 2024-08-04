let chk1 = document.getElementById("toFar");
let chk2 = document.getElementById("toCel");
let result = document.getElementById("result");

document.getElementById("submit").addEventListener("click", convert); // Attach event listener

function convert() {
    let num = document.getElementById("textbox");
    let temp = parseFloat(num.value);

    if (chk1.checked) {
        // Celsius to Fahrenheit conversion
        temp = temp * 9/5 + 32;
        result.textContent =+ temp.toFixed(2) + "°F";
    } else if (chk2.checked) {
        // Fahrenheit to Celsius conversion
        temp = (temp - 32) * 5/9;
        result.textContent = + temp.toFixed(2) + "°C";
    } else {
        result.textContent = "Please select an option";
    }
}
