let Input = document.getElementById("city");
let submit = document.getElementById("submit")

function formatDatetime(inputDatetime) {
    const date = new Date(inputDatetime);

    // Array of weekday names
    const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    // Array of month names
    const months = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    // Get the components of the date
    const dayOfWeek = weekdays[date.getDay()];
    const day = String(date.getDate()).padStart(2, '0');
    const month = months[date.getMonth()];
    const year = date.getFullYear();
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');

    // Format the datetime string
    return formattedDatetime = {
        dayOfWeek,
        month,
        day,
        year,
        hours,
        minutes
    }
}
async function main() {
    const url = `https://weatherapi-com.p.rapidapi.com/current.json?q=faisalabad`;
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': '2d24d0a325msh3ea6d881e1e4981p1a97c6jsnea30956ca602',
            'x-rapidapi-host': 'weatherapi-com.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        let formattedDatetime = new formatDatetime(result.current.last_updated);
        document.getElementById("weather-logo").setAttribute("src", result.current.condition.icon)
        document.querySelector(".day").innerHTML = formattedDatetime.dayOfWeek;
        document.querySelector(".weather-temp").innerHTML = Math.floor(result.current.temp_c) + "<span class='c'> °C";
        document.querySelector(".feeling").innerHTML = result.current.condition.text + " Weather";
        document.querySelector(".day-date").innerHTML = `${formattedDatetime.month} ${formattedDatetime.day}, ${formattedDatetime.year}`;
        document.querySelector(".time").innerHTML = `${formattedDatetime.hours}:${formattedDatetime.minutes}`;

        document.querySelector(".city").innerHTML = result.location.name;
        document.querySelector(".province").innerHTML = result.location.region;
        document.querySelector(".country").innerHTML = result.location.country;
        document.querySelector(".feellike").innerHTML = result.current.feelslike_c + " °C";
        document.querySelector(".windspeed").innerHTML = result.current.wind_kph + " kph";
        document.querySelector(".pressure").innerHTML = result.current.pressure_in + " InHg";
        document.querySelector(".huminaty").innerHTML = result.current.humidity + " %";
    } catch (error) {
        console.error(error);
    }
}
main();



submit.addEventListener("click", () => {
    console.log(Input.value)

    async function main() {
        var city = Input.value;
        const url = `https://weatherapi-com.p.rapidapi.com/current.json?q=${encodeURIComponent(city)}`;
        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': '2d24d0a325msh3ea6d881e1e4981p1a97c6jsnea30956ca602',
                'x-rapidapi-host': 'weatherapi-com.p.rapidapi.com'
            }
        };

        try {
            const response = await fetch(url, options);
            const result = await response.json();
            console.log(result)
            console.log(result.current.condition.icon);
            let formattedDatetime = new formatDatetime(result.current.last_updated);
            document.getElementById("weather-logo").setAttribute("src", result.current.condition.icon)
            document.querySelector(".day").innerHTML = formattedDatetime.dayOfWeek;
            document.querySelector(".weather-temp").innerHTML = Math.floor(result.current.temp_c) + "<span class='c'> °C";
            document.querySelector(".feeling").innerHTML = result.current.condition.text + " Weather";
            document.querySelector(".day-date").innerHTML = `${formattedDatetime.month} ${formattedDatetime.day}, ${formattedDatetime.year}`;
            document.querySelector(".time").innerHTML = `${formattedDatetime.hours}:${formattedDatetime.minutes}`;

            document.querySelector(".city").innerHTML = result.location.name;
            document.querySelector(".province").innerHTML = result.location.region;
            document.querySelector(".country").innerHTML = result.location.country;
            document.querySelector(".feellike").innerHTML = result.current.feelslike_c + " °C";
            document.querySelector(".windspeed").innerHTML = result.current.wind_kph + " kph";
            document.querySelector(".pressure").innerHTML = result.current.pressure_in + " InHg";
            document.querySelector(".huminaty").innerHTML = result.current.humidity + " %";
        } catch (error) {
            console.error(error);
        }
    }
    main();
    Input.value = ""
})
