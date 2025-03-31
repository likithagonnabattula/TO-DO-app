document.addEventListener("DOMContentLoaded", function() {
    const fahrenheitInput = document.getElementById("fahrenheit");
    const celsiusInput = document.getElementById("celsius");
    const convertButton = document.getElementById("convert");
    const clearButton = document.getElementById("clear");

    convertButton.addEventListener("click", function() {
        const fahrenheit = parseFloat(fahrenheitInput.value);
        const celsius = (fahrenheit - 32) * 5 / 9;
        celsiusInput.value = celsius.toFixed(2);
    });

    clearButton.addEventListener("click", function() {
        fahrenheitInput.value = "";
        celsiusInput.value = "";
    });
});
