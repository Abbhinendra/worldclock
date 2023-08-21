


const inputBox=document.getElementById('inputBox');
const searchBtn=document.getElementById('search-Btn');
const weather_img=document.querySelector('.weather-img');
const temperature=document.querySelector('.temperature');
const description=document.querySelector('.description');
const humidity=document.getElementById('humidity');
const wind_speed=document.getElementById('wind-speed');
const location_not_found=document.querySelector('.location-not-found');
const weather_body=document.querySelector('.weather-body');

async function checkWeather(city){

    const api_key = "96ec9b02efac3434ee86d846c7a65938";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;

    const weather_data=await fetch(url);
    const data=await weather_data.json();
    if(data.cod===`404`){
        location_not_found.style.display="flex";
    
        weather_body.style.display="none";
        
                return;
            }
            weather_body.style.display="flex";
            location_not_found.style.display="none";
    temperature.innerHTML=`${Math.round(data.main.temp-273.15)}°C`; 
    description.innerHTML=`${data.weather[0].description}`;
    humidity.innerHTML=`${data.main.humidity}%`;
    wind_speed.innerHTML=`${data.wind.speed}Km/H`;

   
    
    switch(data.weather[0].main){
       case 'Clouds':
        weather_img.src="cloud.png";
        break;
        case 'Clear':
            weather_img.src="clear.png";
            break;
            case 'Rain':
                weather_img.src="Rain.webp";
                break;
                case 'Mist':
                    weather_img.src="mist.png";
                    break;
                    case 'Snow':
                        weather_img.src="snow.pn]";
                        break;

    }

}


searchBtn.addEventListener('click',()=>{
    if(!inputBox.value){
        alert("Please type your location first");
    }
    else{
checkWeather(inputBox.value);
    }
});


function googleTranslateElementInit(){
    new google.translate.TranslateElement(
        {pageLanguage:'en'},
        'google_translate_element'
    )
}