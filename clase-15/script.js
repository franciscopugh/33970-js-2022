const divDolar = document.getElementById('divDolar')
const divClima = document.getElementById("divClima")
const API_KEY = "bfd1b980aa5416c251b43fb2f1ba6c22";


fetch('https://criptoya.com/api/dolar')
.then(respuesta => respuesta.json())
.then(({solidario, ccl, mep, blue}) => {
    divDolar.innerHTML = `
        <p>Solidario: $${solidario} </p>
        <p>CCL: $${ccl} </p>
        <p>Mep: $${mep} </p>
        <p>Blue: $${blue} </p>
    `
})

fetch(`http://api.openweathermap.org/geo/1.0/direct?q=Cordoba,Cordoba,Argentina&limit=1&appid=${API_KEY}`)
.then(response => response.json())
.then(data => {
    const {lat, lon, state, country, name} = data[0]

    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`)
    .then(response => response.json())
    .then(({main}) => {
        divClima.innerHTML = `
            <div>
                <h2>Clima en ${name}, ${state}, ${country}</h2>
                <p>Temperatura: ${main.temp} °C </p>
                <p>Sensacion Termica: ${main.feels_like} °C </p>
                <p>Humedad: ${main.humidity}% </p>
                <p>Presion: ${main.pressure} hPa</p>
            </div>
        
        `
    })
})
