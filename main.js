alert("Click on the Info button on webpage for complete guide of this website.");
function givedate(){
const d= new Date();
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
document.getElementById('date').innerHTML = days[d.getDay()] + ", " + d.getDate() + " " + months[d.getMonth()] + " " + d.getFullYear();
}


function background(id){
    if(id>=800 && 804>=id){
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

    } else if(id>=300 && 532>=id){
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

    } else if(id>=600 && 622>=id){
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

    } else if (id>=200 && 232>=id){
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

    } else if(id>=701 && 781>=id){
        let haze = document.getElementById("weather-icon");
        haze.src="Haze.png"
        document.body.style.backgroundImage = "url('Haze.gif')";
        document.getElementById('city').style.color = "#000000";
        document.getElementById('date').style.color = "#000000";
        document.getElementById('weather').style.color = "#000000";
        document.getElementById('description').style.color = "#000000";
        document.getElementById('temp').style.color = "#000000";
        document.getElementById('note').style.color = "#000000";
        document.getElementById('info-button').style.color = "#FFFFFF";
        document.getElementById('display').style.background = "rgba(255,255,255, 0.5)"
        document.getElementById('note').style.background = "rgba(255,255,255, 0.5)"
        document.getElementById('note').innerHTML="Its pretty foggy out there, Drive safe !!"

    }
}

function weatherInfo(key){
    givedate();
    axios.get('https://api.openweathermap.org/data/2.5/weather?q='+key+'&appid=ceddbeb05632f89ad9c335ae2abe113b&units=metric')
    .then (response =>{
        let cityName = response.data.name+", "+response.data.sys.country;
        document.getElementById('city').innerText = cityName;
        document.getElementById('temp').innerHTML = response.data.main.temp+"<sup>o</sup> C";
        response.data.weather.map((val)=>
          {
            // console.log(val.description);
            document.getElementById('description').innerText = val.description;
            // console.log(val.id);
            let id = val.id;
            background(id);
          })
    })
  }

  function func(){

    let key = document.getElementById('input-box').value
    axios.get('http://api.openweathermap.org/geo/1.0/direct?q='+key+'&limit=1&appid=ceddbeb05632f89ad9c335ae2abe113b')
    .then (response =>{
        (response.data.map((val)=>{

                weatherInfo(val.name+","+val.country);

        }))
    })
    .catch( error => document.getElementById('city').innerText = 'City Not Found' );
    }


