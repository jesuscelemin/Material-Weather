!function(){function e(e){alert("Un error ocurrió: "+e.code)}function t(e){var t=e.coords.latitude,i=e.coords.longitude;console.log("Tu posicion es: "+t+","+i),$.getJSON(r+"lat="+t+"&lon="+i,n)}function n(e){d.zone=e.name,d.icon="svg/"+e.weather[0].icon+".svg",d.temp=e.main.temp-273.15,d.temp_max=e.main.temp_max-273.15,d.temp_min=e.main.temp_min-273.15,d.humi=e.main.humidity,d.wind=e.wind.speed,d.descrip=e.weather[0].description,d.main=e.weather[0].main,o()}function i(e){var t=document.querySelector(e);return document.importNode(t.content,!0)}function o(){var e=i("#template--city");e.querySelector("[data-time]").innerHTML=c,e.querySelector("[data-icon]").src=d.icon,e.querySelector("[data-city]").innerHTML=d.zone,e.querySelector("[data-temp='max']").innerHTML=d.temp_max.toFixed(1),e.querySelector("[data-temp='min']").innerHTML=d.temp_min.toFixed(1),e.querySelector("[data-temp='current']").innerHTML=d.temp.toFixed(1),e.querySelector("[data-temp='wind']").innerHTML=d.wind,e.querySelector("[data-temp='humi']").innerHTML=d.humi,e.querySelector("[data-title]").innerHTML=d.main,$(".loader").hide(),$("body").append(e)}var a="e5d63ee6a8b7d0f78e0a9c28d355b1bf",r="http://api.openweathermap.org/data/2.5/weather?APPID="+a+"&",m=new Date,c=m.toLocaleTimeString(),d={};d.zone,d.icon,d.temp,d.temp_max,d.temp_min,d.humi,d.wind,d.descrip,d.main,navigator.geolocation?navigator.geolocation.getCurrentPosition(t,e):alert("Tu navegador no soporta Geolocation")}(),$(function(){function e(){$("form").slideToggle()}$(".circle").on("click",e)});