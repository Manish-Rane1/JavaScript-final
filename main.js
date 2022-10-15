alert("Click on the Info buttom on webpage for complete guide of this website");
// givedate()
function givedate(){
const d= new Date();
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
document.getElementById('date').innerHTML = days[d.getDay()] + ", " + d.getDate() + " " + months[d.getMonth()] + " " + d.getFullYear();
}


function background(id){
    if(id>=1000 && 1030>=id){
        let cloud = document.getElementById("weather-icon");
        cloud.src="cloudy.png"
        document.body.style.backgroundImage = "url('cloud.gif')";
        document.getElementById('city').style.color = "#000000";
        document.getElementById('date').style.color = "#000000";
        document.getElementById('weather').style.color = "#000000";
        document.getElementById('description').style.color = "#000000";
        document.getElementById('temp').style.color = "#000000";
        document.getElementById('note').style.color = "#000000";
        document.getElementById('info-button').style.color = "#000000";
        document.getElementById('display').style.background = "rgba(255,255,255, 0.5)"
        document.getElementById('note').style.background = "rgba(255,255,255, 0.5)"
        document.getElementById('note').innerHTML="Its great time to explore outdoors !!"

    } else if(id>=1063 && 1072>=id || id>=1150 && 1201>=id || id>=1240 && 1246>=id){
        let rain = document.getElementById("weather-icon");
        rain.src="rainy.png"
        document.body.style.backgroundImage = "url('rain.gif')";
        document.getElementById('city').style.color = "#FFFFFF";
        document.getElementById('date').style.color = "#FFFFFF";
        document.getElementById('weather').style.color = "#FFFFFF";
        document.getElementById('description').style.color = "#FFFFFF";
        document.getElementById('temp').style.color = "#FFFFFF";
        document.getElementById('note').style.color = "#FFFFFF";
        document.getElementById('info-button').style.color = "#FFFFFF";
        document.getElementById('display').style.background = "transparent"
        document.getElementById('note').style.background = "transparent"
        document.getElementById('note').innerHTML="Don't forget your umbrella !!"

    } else if(id>=1204 && 1237>=id || id>=1249 && 1264>=id || id>=1114 && 1135>=id){
        let snow = document.getElementById("weather-icon");
        snow.src="snow.png"
        document.body.style.backgroundImage = "url('snow.gif')";
        document.getElementById('city').style.color = "#000000";
        document.getElementById('date').style.color = "#000000";
        document.getElementById('weather').style.color = "#000000";
        document.getElementById('description').style.color = "#000000";
        document.getElementById('temp').style.color = "#000000";
        document.getElementById('note').style.color = "#000000";
        document.getElementById('info-button').style.color = "#000000";
        document.getElementById('display').style.background = "rgba(255,255,255, 0.5)"
        document.getElementById('note').style.background = "rgba(255,255,255, 0.5)"
        document.getElementById('note').innerHTML="Its pretty chilly out there !!"

    } else if (id==1087 || id>=1273 && 1282>=id){
        let thunder = document.getElementById("weather-icon");
        thunder.src="thunder.png"
        document.body.style.backgroundImage = "url('thunder.gif')";
        document.getElementById('city').style.color = "#FFFFFF";
        document.getElementById('date').style.color = "#FFFFFF";
        document.getElementById('weather').style.color = "#FFFFFF";
        document.getElementById('description').style.color = "#FFFFFF";
        document.getElementById('temp').style.color = "#FFFFFF";
        document.getElementById('note').style.color = "#FFFFFF";
        document.getElementById('info-button').style.color = "#FFFFFF";
        document.getElementById('display').style.background = "transparent"
        document.getElementById('note').style.background = "transparent"
        document.getElementById('note').innerHTML="Thunderstorm is brewing better stay inside !!"
    }
}

function weatherInfo(key){
    givedate();
    axios.get('http://api.weatherapi.com/v1/current.json?key=bf8e2aaac0b94d11aa794209221510&q='+key+'&aqi=no')
    .then (response =>{
    //   console.log(response.data.location.name+", "+response.data.location.country);
      let cityName = response.data.location.name+", "+response.data.location.country;
      document.getElementById('city').innerText = cityName;

    //   console.log(response.data.current.condition.text);
      document.getElementById('description').innerText = response.data.current.condition.text;
    //   console.log(response.data.current.temp_c);
      document.getElementById('temp').innerHTML = response.data.current.temp_c+"<sup>o</sup> C";

      let id = response.data.current.condition.code;
      background(id);
    })
  }

  function func(){
    let state=true;
    let key = document.getElementById('input-box').value
    axios.get('http://api.weatherapi.com/v1/search.json?key=bf8e2aaac0b94d11aa794209221510&q='+key)
    .then (response =>{
        (response.data.map((val)=>{
            if (state==true){
                // console.clear();
                // console.log(val.name+", "+val.region+", "+val.country);
                weatherInfo(val.name+","+val.country);
                state=false;
            }
        }))
    })
    .catch( error => console.error(error) );
    }

// console.log(days[d.getDay()]);
// console.log(d.getDate());
// console.log(months[d.getMonth()]);
// console.log(d.getFullYear());

function guide(){
    alert("This is a dynamic weather app \n \n In this app the background of the webpage changes with the weather conditions of the given city.\n \n Also the weather icons do the same.\n \n There is even a custom note at bottom of page for each type of weather.\n  \n Tip: Go to \n https://www.weather-forecast.com/countries/India-1 \n and try cities with different weathers to see all the dynamic functions.")
}
