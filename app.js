let input = document.querySelector('input')
let locDis = document.querySelector('.locDis')
let temp = document.querySelector('.temp')
let wspeed = document.querySelector('.wspeed')
let humidity = document.querySelector('.humidity')
let pressure = document.querySelector('.pressure')
let uv = document.querySelector('.uv')

let loc ="dhaka"

input.addEventListener('input', () => {
    loc = input.value
    fetch(`https://api.weatherapi.com/v1/current.json?key=a4908f84f1f5409090f34508221104&q=${loc}&aqi=no`)
        .then(response => response.json())
        .then(response => {
            locDis.innerHTML = `${response.location.name},${response.location.country} `
            temp.innerHTML=`${response.current.temp_c}°c`
            wspeed.innerHTML=`${response.current.wind_kph} km/hr`
            humidity.innerHTML=`${response.current.humidity}`
            pressure.innerHTML=`${response.current.pressure_mb} mb`
            uv.innerHTML=`${response.current.uv}`
        })
        .catch(err => console.error(err));
    if (input.value === '') {
        location.reload();
    }
})

fetch(`https://api.weatherapi.com/v1/current.json?key=a4908f84f1f5409090f34508221104&q=${loc}&aqi=no`)
    .then(response => response.json())
    .then(response => {
        locDis.innerHTML = `${response.location.name},${response.location.country} `
        temp.innerHTML=`${response.current.temp_c}°c`
        wspeed.innerHTML=`${response.current.wind_kph} k/hr`
        humidity.innerHTML=`${response.current.humidity}`
        pressure.innerHTML=`${response.current.pressure_mb} mb`
        uv.innerHTML=`${response.current.uv}`
    })
    .catch(err => console.error(err));
