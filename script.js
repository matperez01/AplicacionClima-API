



const $busquedabtn =document.getElementById("botonBusqueda")

$busquedabtn.addEventListener("click",e =>{
      const ApiKey = "1239c09b14d02c5416de8f29f7f1be61";
      const $ciudad = document.getElementById("ciudadEntrada").value
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${$ciudad} &appid=${ApiKey}`)
            .then(response => response.json())
            .then(response => mostrarDatos(response))
})

function mostrarDatos(response){
      console.log(response)
      const $divDatosClima = document.querySelector("#datosClima")
      $divDatosClima.innerHTML=" "

      const $ciudad = document.createElement("h2")
      const $temperaturaMax = document.createElement("p")
      const $temperaturaMin = document.createElement("p")
      const $temperatura = document.createElement("p")
      const $descripcion = document.createElement("p")
      const $icon = document.createElement("img")
      let linkimagen = response.weather[0].icon

      $icon.setAttribute ("src", `https://openweathermap.org/img/wn/${linkimagen}.png`) 

      $ciudad.innerHTML = `${response.name}, ${response.sys.country}`  
      $temperatura.innerHTML=` Temperatura actual: ${Math.floor(response.main.temp - 273,15)} C°`
      $temperaturaMax.innerHTML= `MAX : ${Math.round(response.main.temp_max - 273,15)} C°`
      $temperaturaMin.innerHTML= `MIN : ${Math.floor(response.main.temp_min - 273,15)} C°`
      
      $descripcion.innerHTML = `Descripcion: ${response.weather[0].description}`
      $divDatosClima.append($ciudad,$temperatura,$temperaturaMax,$temperaturaMin,$descripcion,$icon)
}

