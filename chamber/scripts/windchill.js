function calculateWindChill(temperature, windSpeed) {
    if (temperature <= 50 && windSpeed > 3.0) {
        var windChill = 35.74 + (0.6215 * temperature) - (35.75 * Math.pow(windSpeed, 0.16)) + (0.4275 * temperature * Math.pow(windSpeed, 0.16));
        return windChill.toFixed(2);
    } else {
        return 'N/A';
    }
}

var temperature = parseFloat(document.getElementById('temperature').textContent);
var windSpeed = parseFloat(document.getElementById('windSpeed').textContent);

var windChill = calculateWindChill(temperature, windSpeed);

document.getElementById('windChill').textContent = windChill;

document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.querySelector('.menu-toggle');
    const nav = document.querySelector('.navigation');

    toggleButton.addEventListener('click', function () {
        nav.classList.toggle('show');
    });
});
