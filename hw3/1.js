
const temp = Number.parseFloat(prompt("Enter temperature in degrees Celsius"));
alert("Celsius: " + temp + "\n" + "Farenheit: " + convert(temp).toFixed(2));

function convert(value) {
    return (9 / 5) * temp + 32;
}