

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
                let affichage = '<ul>';
                 
                    affichage += `<li>${data.name} : il fait ${Math.floor(Math.ceil(data.main.temp))} °C ${data.weather[0].main}</li>`;
                
                affichage += '</ul>';
                document.querySelector('#meteo-jour').innerHTML = affichage;
            })
    }
});



