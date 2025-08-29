const userValue = document.getElementById("inputTemp");
let btn = document.getElementById("btn");
let celsius = document.getElementById("celsius");
let fahrenheit = document.getElementById("fahrenheit");
let kelvin = document.getElementById("kelvin");

btn.addEventListener('click', () => {
    let celsiusValue = parseFloat(userValue.value);

    // Sugerencia de ChatGPT en caso de que el usuario ingrese letras o nada en el input.
    if (isNaN(celsiusValue)) {
        alert("Por favor, ingresa un número válido.");
        return;
    }

    celsius.innerText = "Celsius: " + celsiusValue;
    fahrenheit.innerText = "Fahrenheit: " + ((celsiusValue * 1.8) + 32).toFixed(2);
    kelvin.innerText = "Kelvin: " + (celsiusValue + 273.15).toFixed(2);
})