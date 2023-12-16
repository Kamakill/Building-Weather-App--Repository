function fetchWeather() {
    let citySelected = document.getElementById("citySelected").value;
    let resultSection = document.getElementById("result");

        if (citySelected == "") {
            resultSection.innerHTML = `
            <div class="card h-100">
                <p class="weather-date">Empty Input!</p>
                <p class="weather-temperatures">Empty Input!</p>
                <div class="weather-icon-div">
                    Empty Input!
                </div>
                <p class="weather-description">Empty Input!</p>
                <p class="weather-temperatures">Empty Input!</p>
            </div>
            `;
            return;
        }




        let now = new Date();
        let weatherDate = now.toLocaleString();

        // Insert date and time into HTML
        document.getElementsByClassName("weather-date").innerHTML = weatherDate;

        const temperatures = document.querySelectorAll('weather-temperatures');

        temperatures.forEach(function(temp) {
            let celcius = parseInt(temp.textContent);
            let fahrenheit = Math.round((celcius * 9/5) + 32);
            let newTemp = `${celcius}°C / ${fahrenheit}°F`;
            temp.textContent = newTemp;
        });

}