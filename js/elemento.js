const elementoElemento = document.getElementById('divElemento');


var data = localStorage.getItem("data")
var tipo = localStorage.getItem("tipo")
var planeta



favorito = (i) => {
  

 
 console.log(i)
 var array = JSON.parse(localStorage.getItem('favoritos'))
 console.log(array)
 
 array.push(i)
 localStorage.setItem('favoritos', JSON.stringify(array))





 

}



elementoElemento.innerHTML = `<p class="text-center bg-secondary bg-gradient mt-5">Conectar estamos, tu fuerza al monitor debes...</p>`;


if (tipo == 1) {

  fetch(`https://swapi.dev/api/people/${data}`)
    .then((resp) => {


      return resp.json();

    })
    .then(function (json) {

      // console.log(json.name);

      cadena = JSON.stringify(json.homeworld)
      var idPlaneta = cadena.split("/")


      fetch(`${json.homeworld}`)
        .then((respuesta) => {


          return respuesta.json();

        })
        .then(function (j) {

          planeta = JSON.stringify(j.name);


          localStorage.setItem("planeta", planeta)





          elementoElemento.innerHTML = `

      <h1 class="bg-dark text-center text-light">${json.name}</h1>

<div class="card mb-3 m-auto mt-5 bg-dark text-light" style="max-width: 1000px;">
<div class="row g-0">
  <div class="col-md-4 p-3">
    <img src="img/characters/${data}.jpg" class="img-fluid rounded-start border border-warning" alt="${data + "-" + tipo}">
  </div>
  <div class="col-md-8">
    <div class="card-body">
   
      <ul class="list-group list-group-flush rounded-end">
  
  <li class="list-group-item">Altura: ${json.height} cm</li>
  <li class="list-group-item">Peso: ${json.mass} kg</li>
  <li class="list-group-item">Color de pelo: ${json.hair_color}</li>
  <li class="list-group-item">Color piel: ${json.skin_color}</li>
  <li class="list-group-item">Color de ojos: ${json.eye_color}</li>
  <li class="list-group-item">Genero: ${json.gender}</li>
  <li class="list-group-item">Planeta origen: ${j.name}</li>
  <li class="list-group-item"><img class="img-fluid d-block m-auto border border-warning shadow" style="max-width:110px" src="img/planets/${idPlaneta[5]}.jpg" alt="planeta"></li>
  
  
      </ul>
      <a href="favoritos.html" class="btn btn-primary stretched-link mt-2" onclick="favorito('${json.url}')">Agregar a favoritos</a>
    </div>
  </div>
</div>


                    

</div>


      
      
      `;
        })
    })



}
//onclick="favorito(${fav})

if (tipo == 2) {


  console.log("Entreeee")
  fetch(`https://swapi.dev/api/planets/${data}`)
    .then((resp) => {

      //console.log(resp);

      return resp.json();

    })
    .then(function (json) {

      console.log(json);


      elementoElemento.innerHTML = `
      
      <h1 class="bg-dark text-center text-light">${json.name}</h1>

<div class="card mb-3 m-auto mt-5 bg-dark text-light" style="max-width: 1000px;">
<div class="row g-0">
  <div class="col-md-4 p-3">
    <img src="img/planets/${data}.jpg" class="img-fluid rounded-start border border-warning" alt="${json.name + "-" + data}">
  </div>
  <div class="col-md-8">
    <div class="card-body">
   
      <ul class="list-group list-group-flush rounded-end">
  
  <li class="list-group-item">Periodo de rotación: ${json.rotation_period} </li>
  <li class="list-group-item">Periodo orbital: ${json.orbital_period} </li>
  <li class="list-group-item">Diametro: ${json.diameter}</li>
  <li class="list-group-item">Tipo de clima: ${json.climate}</li>
  <li class="list-group-item">Gravedad: ${json.gravity}</li>
  <li class="list-group-item">Terrain: ${json.terrain}</li>
  <li class="list-group-item">Población: ${json.population}</li>


  
      </ul>
      <a href="favoritos.html" class="btn btn-primary stretched-link mt-2" onclick="favorito('${json.url}')">Agregar a favoritos</a>
    </div>
  </div>
</div>
</div>
      
      
      
      
      `;
    })



}


if (tipo == 3) {


  console.log("Entreeee")
  fetch(`https://swapi.dev/api/films/${data}`)
    .then((resp) => {

      //console.log(resp);

      return resp.json();

    })
    .then(function (json) {

      console.log(json);


      elementoElemento.innerHTML = `
        
        <h1 class="bg-dark text-center text-light">${json.title}</h1>
  
  <div class="card mb-3 m-auto mt-5 bg-dark text-light" style="max-width: 1000px;">
  <div class="row g-0">
    <div class="col-md-4 p-3">
      <img src="img/films/${data}.jpg" class="img-fluid rounded-start border border-warning" alt="${json.title + "-" + data}">
    </div>
    <div class="col-md-8">
      <div class="card-body">
     
        <ul class="list-group list-group-flush rounded-end">
    
    <li class="list-group-item">Titulo: ${json.title}</li>
    <li class="list-group-item">Episodio: ${json.episode_id}</li>
    <li class="list-group-item">Fecha de estreno: ${json.release_date}</li>
   
    
    <li class="list-group-item"><p class= "text-center p-4">Introduccion: ${json.opening_crawl}</p></li>
   
  
  
    
        </ul>
        <a href="favoritos.html" class="btn btn-primary stretched-link mt-2" onclick="favorito('${json.url}')">Agregar a favoritos</a>
      </div>
    </div>
  </div>
  </div>
        
        
        
        
        `;
    })



}

if (tipo == 4) {


  console.log("Entreeee")
  fetch(`https://swapi.dev/api/species/${data}`)
    .then((resp) => {

      //console.log(resp);

      return resp.json();

    })
    .then(function (json) {

      console.log(json);



      cadena = JSON.stringify(json.homeworld)
      var idPlaneta = cadena.split("/")
      console.log(idPlaneta)

      fetch(`${json.homeworld}`)
        .then((respuesta) => {


          return respuesta.json();

        })
        .then(function (j) {

          planeta = JSON.stringify(j.name);


          localStorage.setItem("planeta", planeta)





          elementoElemento.innerHTML = `
          
          <h1 class="bg-dark text-center text-light">${json.name}</h1>
    
    <div class="card mb-3 m-auto mt-5 bg-dark text-light" style="max-width: 1000px;">
    <div class="row g-0">
      <div class="col-md-4 p-3">
        <img src="img/species/${data}.jpg" class="img-fluid rounded-start border border-warning" alt="${json.name + "-" + data}">
      </div>
      <div class="col-md-8">
        <div class="card-body">
       
          <ul class="list-group list-group-flush rounded-end">
      
      <li class="list-group-item">Clasificación: ${json.classification}</li>
      <li class="list-group-item">Altura promedio: ${json.average_height}</li>
      <li class="list-group-item">Tonos de piel: ${json.skin_colors}</li>
      <li class="list-group-item">Tonos de ojos: ${json.eye_colors}</li>
      <li class="list-group-item">Tonos de pelo: ${json.hair_colors}</li>
      <li class="list-group-item">Lenguaje: ${json.language}</li>
      <li class="list-group-item">Planeta origen: ${j.name}</li>
      <li class="list-group-item"><img class="img-fluid d-block m-auto border border-warning shadow" style="max-width:110px" src="img/planets/${idPlaneta[5]}.jpg" alt="planeta"></li>
    
     
    
    
      
          </ul>
          <a href="favoritos.html" class="btn btn-primary stretched-link mt-2" onclick="favorito('${json.url}')">Agregar a favoritos</a>
        </div>
      </div>
    </div>
    </div>
          
          
          
          
          `;
        })
    })



}

if (tipo == 5) {


  console.log("Entreeee")
  fetch(`https://swapi.dev/api/vehicles/${data}`)
    .then((resp) => {

      //console.log(resp);

      return resp.json();

    })
    .then(function (json) {

      console.log(json);


      elementoElemento.innerHTML = `
        
        <h1 class="bg-dark text-center text-light">${json.name}</h1>
  
  <div class="card mb-3 m-auto mt-5 bg-dark text-light" style="max-width: 1000px;">
  <div class="row g-0">
    <div class="col-md-4 p-3">
      <img src="img/vehicles/${data}.jpg" class="img-fluid rounded-start border border-warning" alt="${json.name + "-" + data}">
    </div>
    <div class="col-md-8">
      <div class="card-body">
     
        <ul class="list-group list-group-flush rounded-end">
    
    <li class="list-group-item">Nombre: ${json.name}</li>
    <li class="list-group-item">Modelo: ${json.model}</li>
    <li class="list-group-item">Empresa: ${json.manufacturer}</li>
    <li class="list-group-item">Costo en creditos: ${json.cost_in_credits}</li>
    <li class="list-group-item">Clase: ${json.vehicle_class}</li>
    <li class="list-group-item">Capacidad de carga: ${json.cargo_capacity}</li>
    <li class="list-group-item">Velocidad atmosferica maxima: ${json.max_atmosphering_speed} mph</li>
 

   
    
  
    
        </ul>
        <a href="favoritos.html" class="btn btn-primary stretched-link mt-2" onclick="favorito('${json.url}')">Agregar a favoritos</a>
      </div>
    </div>
  </div>
  </div>
        
        
        
        
        `;
    })



}


if (tipo == 6) {


  console.log("Entreeee")
  fetch(`https://swapi.dev/api/starships/${data}`)
    .then((resp) => {

      //console.log(resp);

      return resp.json();

    })
    .then(function (json) {

      console.log(json);


      elementoElemento.innerHTML = `
        
        <h1 class="bg-dark text-center text-light">${json.name}</h1>
  
  <div class="card mb-3 m-auto mt-5 bg-dark text-light" style="max-width: 1000px;">
  <div class="row g-0">
    <div class="col-md-4 p-3">
      <img src="img/starships/${data}.jpg" class="img-fluid rounded-start border border-warning" alt="${json.name + "-" + data}">
    </div>
    <div class="col-md-8">
      <div class="card-body">
     
        <ul class="list-group list-group-flush rounded-end">
    
    <li class="list-group-item">Nombre: ${json.name}</li>
    <li class="list-group-item">Modelo: ${json.model}</li>
    <li class="list-group-item">Empresa: ${json.manufacturer}</li>
    <li class="list-group-item">Costo en creditos: ${json.cost_in_credits}</li>
    <li class="list-group-item">Clase de nave: ${json.starship_class}</li>
    <li class="list-group-item">Capacidad de carga: ${json.cargo_capacity}</li>
    <li class="list-group-item">Velocidad atmosferica maxima: ${json.max_atmosphering_speed} mph</li>
    <li class="list-group-item">Calificación de hiperimpulsor: ${json.hyperdrive_rating}</li>    
    <li class="list-group-item">Capacidad de personal: ${json.crew} </li>
    <li class="list-group-item">Longitud: ${json.length} mts</li>

   
    
  
    
        </ul>
        <a href="favoritos.html" class="btn btn-primary stretched-link mt-2" onclick="favorito('${json.url}')">Agregar a favoritos</a>
      </div>
    </div>
  </div>
  </div>
        
        
        
        
        `;
    })



}




