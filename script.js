const inputKeyUp = (e) => {
    if (e.keyCode === 13) {
        appUp();
    }
}
document.querySelector('#input-town').addEventListener('keyup', (e) => {
    inputKeyUp(e);
});


async function appUp() {
    try {

        let city = document.getElementById('input-town').value;

        let key = 'adc743d149ca38cafb6f5022f11f69dc';

        let weather = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`);
        let forecast = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${key}`);

        let objects = weather.json();
        let call = forecast.json();

        let weatherPost = (element) => {
            element.then((array) => {
                try {
                    erreur.style.visibility = 'hidden';
                    output.style.visibility = 'visible';
                    output.insertAdjacentHTML('afterbegin', `
                    <div>
                        <h2 class="output__h2">${city.charAt(0).toUpperCase() + city.slice(1).toLowerCase()}</h2>},${array.sys.country}</h2>
                        <img src="http://openweathermap.org/img/wn/${arrays.weather[0].icon}.png">
                        <h3 class="output__h3"> Humidity: ${array.main.humidity}%</h3>
                        <h3 class="output__h3"> Weather: ${array.weather[0].main}</h3>
                        <h3 class="output__h3"> Temperature: ${Math.floor(Math.ceil(array.main.temp))} °C</h3>
                        <h3 class="output__h3"> Min : ${Math.floor(Math.ceil(array.main.temp_min))} °C Max: ${Math.floor(Math.ceil(arrays.main.temp_max))} °C</h3>
                    </div>
                        `)
                }
                catch (err) {
                    document.querySelector('.output').style.visibility = 'hidden';
                    erreur.visibility = 'visible';
                    erreur.style.color = 'red';
                    erreur.innerText = 'City not found';
                }
            })
        }


        weatherPost(objects);
    }
    catch(err){ //error
        forecastSec.style.visibility = 'hidden';
        document.querySelector('.output').style.visibility = 'hidden';
        erreur.style.visibility = 'visible';
        erreur.style.color = 'red'
        erreur.innerText = "I can't communicate with the API";
        console.log(err)
}}
