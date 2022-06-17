

document.querySelector('#input-town').addEventListener('keyup', (e) => {
    if (e.keyCode === 13) {
        let city = e.target.value;
        let key = 'adc743d149ca38cafb6f5022f11f69dc';
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric&mode=json&lang=fr`;
        console.log(this.value)
        fetch(url)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                if (typeof data.main === 'undefined') {
                    let error = "<h2 class='error'>Cette ville n'est pas répertoriée</h2>";
                    document.querySelector('#meteo-curr').innerHTML = error;
                    document.querySelector('#meteo-jour').innerHTML = error;
                }
                else {
                    let affichage = '<div class="cityName">';
                    affichage += `<h2>${data.name}, ${data.sys.country}</h2>`;
                    affichage += '</div>';
                    affichage += '<div class="cityTemp">';
                    affichage += '<div class="icon">';
                    affichage += `<img src="http://openweathermap.org/img/wn/${data.weather[0].icon}.png"></img>`;
                    affichage += '</div>';
                    affichage += '<div class="temps">';
                    affichage += `<p>${Math.floor(Math.ceil(data.main.temp))} °C</p><p> ${data.weather[0].description}</p>`;
                    affichage += '</div>';
                    affichage += '</div>';
                    document.querySelector('#meteo-curr').innerHTML = affichage;

                    let meteoAjd = '<ul>';
                    meteoAjd += `<li class="location">Météo aujourd'hui à ${data.name}, ${data.sys.country}</li>`;
                    meteoAjd += `<li class="Tressenti"> <div class="Tressenti-temp">${Math.floor(Math.round(data.main.temp))} °</div> <div class="Tressenti-index"> T.ressentie</li>`;
                    meteoAjd += `<li class="meteo"> <span class="iconify-inline" data-icon="fa-solid:temperature-high" style="color: black;" data-width="16" data-height="16"></span>
                    Min/Max: ${Math.floor(Math.round(data.main.temp_min))}°/${Math.floor(Math.round(data.main.temp_max))}°</li>`;
                    meteoAjd += `<li class="meteo"> <span class="iconify-inline" data-icon="wi:humidity" style="color: black;" data-width="16" data-height="16"></span>
                    Humidité: ${data.main.humidity}%</li>`;
                    windSpeed = Math.round(data.wind.speed * 3.6);
                    meteoAjd += `<li class="meteo"><span class="iconify-inline" data-icon="bx:wind" style="color: black;" data-width="16" data-height="16"></span> Vent: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-down" viewBox="0 0 16 16" style="transform:rotate(${data.wind.deg}deg)"> <path fill-rule="evenodd" d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"/> </svg> ${windSpeed} km/h</li>`;
                    document.querySelector('#meteo-jour').innerHTML = meteoAjd;
                }
            })
    }
});



