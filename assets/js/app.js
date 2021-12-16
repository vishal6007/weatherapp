
const getWeatherData = async(cityname)=>{
$('ul').empty();
//$('ul').removeclass();
const url=`https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=bcb66ea6ceacb037d08be3fda92bd1b9`;
const fetchedData = await fetch(url,{method: 'GET'});
const data =await fetchedData.json();
console.log(data);
const city_name=(data.name);
const icon = (data.weather[0].icon);


let date = new Date();
const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
$('ul').append(`<li>${days[date.getDay()]}  ${date.getDate()}-${date.getMonth()}-${date.getFullYear()}</li>`);

const country_name=(data.sys.country);
const weather_des=(data.weather[0].main);
const formclass=$('form').attr('class');
$('form').removeClass(formclass);
if(weather_des=="Thunderstorm"){
    $('form').addClass('bgimg1');
}
if(weather_des=="Drizzle"){
    $('form').addClass('bgimg2');
}
if(weather_des=="Rain"){
    $('form').addClass('bgimg3');
}
if(weather_des=="Snow"){
    $('form').addClass('bgimg4');
}
if(weather_des=="Mist"){
    $('form').addClass('bgimg5');
}
if(weather_des=="Smoke"){
    
    $('form').addClass('bgimg6');
}
if(weather_des=="Haze"){
    $('form').addClass('bgimg7');
}
if(weather_des=="Dust"){
    $('form').addClass('bgimg8');
}
if(weather_des=="Fog"){
    $('form').addClass('bgimg9');
}
if(weather_des=="Sand"){
    $('form').addClass('bgimg10');
}
if(weather_des=="Ash"){
    $('form').addClass('bgimg11');
}
if(weather_des=="Squall"){
    $('form').addClass('bgimg12');
}
if(weather_des=="Tornado"){
    $('form').addClass('bgimg13');
}
if(weather_des=="Clear"){
    $('form').addClass('bgimg14');
}
if(weather_des=="Clouds"){
    $('form').addClass('bgimg15');
}




const temp =eval(data.main.temp-273.15).toFixed(2);
const temp_max=eval(data.main.temp_max-273.15).toFixed(2);
const temp_min=eval(data.main.temp_min-273.15).toFixed(2);


$('ul').append(`<li> ${city_name},${country_name}</li> 
                <li>${temp}°C</li> <li> <img src="http://openweathermap.org/img/wn/${icon}@2x.png" alt=""></li> <li style="color:blue;">${weather_des}</li> 
                <li style="color:red;">${temp_max}°C <span style="color:black;"> /</span><span style="color:green;"> ${temp_min}  °C</span></li>`);

}

$('form').submit((e)=>{

    
    e.preventDefault();
    console.dir($('form')[0].elements[0].value);
    const cityname=$('form')[0].elements[0].value;
    getWeatherData(cityname);
    $('input[type="text"]').val("");
    

})



