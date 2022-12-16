
function capital(string) {
	return string.charAt(0).toUpperCase() + string.slice(1);
  }
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'c8fa340894mshdf4896705e4339fp164bf0jsnb9d6b3c92e74',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};
const getweather = (city)=>{
	cityname.innerHTML=city
	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city, options)
	.then(response => response.json())
	.then(response =>{ 
		cloud_pct.innerHTML = response.cloud_pct 
		temp.innerHTML = response.temp 
		temp2.innerHTML = response.temp 
		max_temp.innerHTML = response.max_temp 
		min_temp.innerHTML = response.min_temp 
		feels_like.innerHTML = response.feels_like 
		humidity2.innerHTML = response.humidity 
		humidity.innerHTML = response.humidity 
		wind_speed2.innerHTML = response.wind_speed 
		wind_speed.innerHTML = response.wind_speed 
		sunrise.innerHTML = ((new Date( response.sunrise *1000)).toLocaleString().slice(11,))
		sunset.innerHTML = ((new Date( response.sunset  *1000)).toLocaleString().slice(11,))
		})
		.catch(err => console.error(err));
	}
	submit.addEventListener("click",(e)=>{
		
		e.preventDefault()
		city= document.getElementById("search").value;
		city=capital(city)
		getweather(city)
})
getweather("Delhi")
const commoncity =()=>{
	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=penza', options)
	.then(response => response.json())
	.then(response =>{ 
		pcloud_pct.innerHTML = response.cloud_pct 
		ptemp.innerHTML = response.temp  
		pmax_temp.innerHTML = response.max_temp 
		pmin_temp.innerHTML = response.min_temp 
		pfeels_like.innerHTML = response.feels_like 
		phumidity.innerHTML = response.humidity 
		pwind_speed.innerHTML = response.wind_speed 
		pwind_degrees.innerHTML = response.wind_degrees 
		psunrise.innerHTML = ((new Date( response.sunrise  *1000)).toLocaleString().slice(11,))
		psunset.innerHTML = ((new Date( response.sunset  *1000)).toLocaleString().slice(11,))
		})
		.catch(err => console.error(err));
	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=dubai', options)
	.then(response => response.json())
	.then(response =>{ 
		dcloud_pct.innerHTML = response.cloud_pct 
		dtemp.innerHTML = response.temp  
		dmax_temp.innerHTML = response.max_temp 
		dmin_temp.innerHTML = response.min_temp 
		dfeels_like.innerHTML = response.feels_like 
		dhumidity.innerHTML = response.humidity 
		dwind_speed.innerHTML = response.wind_speed 
		dwind_degrees.innerHTML = response.wind_degrees
		dsunrise.innerHTML = ((new Date( response.sunrise  *1000)).toLocaleString().slice(11,))
		dsunset.innerHTML = ((new Date( response.sunset  *1000)).toLocaleString().slice(11,))
		})
		.catch(err => console.error(err));
	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=canada', options)
	.then(response => response.json())
	.then(response =>{ 
		ccloud_pct.innerHTML = response.cloud_pct 
		ctemp.innerHTML = response.temp  
		cmax_temp.innerHTML = response.max_temp 
		cmin_temp.innerHTML = response.min_temp 
		cfeels_like.innerHTML = response.feels_like 
		chumidity.innerHTML = response.humidity 
		cwind_speed.innerHTML = response.wind_speed 
		cwind_degrees.innerHTML = response.wind_degrees
		csunrise.innerHTML = ((new Date( response.sunrise  *1000)).toLocaleString().slice(11,)) 
		csunset.innerHTML = ((new Date( response.sunset  *1000)).toLocaleString().slice(11,))
		})
		.catch(err => console.error(err));
	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=lucknow', options)
	.then(response => response.json())
	.then(response =>{ 
		lcloud_pct.innerHTML = response.cloud_pct 
		ltemp.innerHTML = response.temp  
		lmax_temp.innerHTML = response.max_temp 
		lmin_temp.innerHTML = response.min_temp 
		lfeels_like.innerHTML = response.feels_like 
		lhumidity.innerHTML = response.humidity 
		lwind_speed.innerHTML = response.wind_speed 
		lwind_degrees.innerHTML = response.wind_degrees
		lsunrise.innerHTML = ((new Date( response.sunrise  *1000)).toLocaleString().slice(11,))
		lsunset.innerHTML = ((new Date( response.sunset  *1000)).toLocaleString().slice(11,))
		})
		.catch(err => console.error(err));
	}
commoncity()