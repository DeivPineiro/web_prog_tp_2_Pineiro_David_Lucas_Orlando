const elementoElemento = document.getElementById('divElemento');

console.log(localStorage.getItem("data"))
console.log(localStorage.getItem("tipo"))

var data = localStorage.getItem("data")
var tipo = localStorage.getItem("tipo")
var planeta




elementoElemento.innerHTML = `<p><p class="container text-center mt-5">Conectar estamos, tu fuerza al monitor debes...</p></p>`;

if (tipo == 1) {



  fetch(`https://swapi.dev/api/people/${data}`)
    .then((resp) => {

      //console.log(resp);

      return resp.json();

    })
    .then(function (json) {

      // console.log(json.name);

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

      </div>
    </div>
  </div>
</div>
        
        
        
        
        `;
        })
    })








}
