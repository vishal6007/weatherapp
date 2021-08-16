
const getWeatherData = async(cityname)=>{
$('ul').empty();
const url=`https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=bcb66ea6ceacb037d08be3fda92bd1b9`;
const fetchedData = await fetch(url,{method: 'GET'});
const data =await fetchedData.json();
console.log(data);
const city_name=(data.name);

let date = new Date();
const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
$('ul').append(`<li>${days[date.getDay()]}  ${date.getDate()}-${date.getMonth()}-${date.getFullYear()}</li>`)

const country_name=(data.sys.country);
const weather_des=(data.weather[0].description);
if(weather_des=="haze"){
    $('body').addClass('bgimghaze');
}
const temp =eval(data.main.temp-273.15).toFixed(2);
const temp_max=eval(data.main.temp_max-273.15).toFixed(2);
const temp_min=eval(data.main.temp_min-273.15).toFixed(2);

$('ul').append(`<li> ${city_name},${country_name}</li> <li>${temp}°C</li> <li>${weather_des}</li> <li>${temp_max}°C/${temp_min}°C</li>`);

}

$('form').submit((e)=>{

    
    e.preventDefault();
    console.log("5");
    console.dir($('form')[0].elements[0].value);
    const cityname=$('form')[0].elements[0].value;
    getWeatherData(cityname);
    $('input[type="text"]').val("");
    

})

