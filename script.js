document.querySelector('.busca'),addEventListener('submit' , async (event)=>{
    event.preventDefault();

    let input = document.querySelector('#searchInput').value ;

    if(input !== '') {
        showWarning('Carregando...');

        let url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURI(input)}&appid=a9055819d5c625bfb1eaf69389afec70&units=metric&lang=pt_br`;

        let results = await fetch(url);
        let json = await results.json();

        if(json.cod === 200){
            showInfo({
                name: json.name,
                country: json.sys.country,
                temp: json.main.temp,
                tempIcon: json.weather[0].icon,
                windSpeed: json.wind.speed,
                windAngle: json.wind.deg,
            });
        }else {
            showWarning('Não encontramos esta localização')
        }

    }

});

function showInfo(json) {

}


function showWarning(msg) {
    document.querySelector('.aviso').innerHTML= msg;
}