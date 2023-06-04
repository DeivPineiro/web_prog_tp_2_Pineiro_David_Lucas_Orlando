const elementoCategorias = document.getElementById('divCategorias');
const elementoBtnPersonajes = document.getElementById('btnPersonajes');


//EJEMPLO DE COMO RECORRER UN JSON UTIL PARA LA APP


/*
// JSON con distintos valores para utilizar en la demo
var json = {'valor1': 1, 'valor2': [1, 2, 3, 4], 'valor3': '3'};
     
// Obteniendo todas las claves del JSON
for (var clave in json){
  // Controlando que json realmente tenga esa propiedad
  if (json.hasOwnProperty(clave)) {
    // Mostrando en pantalla la clave junto a su valor
    alert("La clave es " + clave+ " y el valor es " + json[clave]);
  }
}
*/

elementoCategorias.innerHTML = `<div class="container text-center mt-5"><p>Si esperar tu puedes, categorias ver pronto...</p></div>`;

fetch(`https://swapi.dev/api/`)
    .then((resp) => {


        console.log(resp);
        elementoCategorias.innerHTML = `<p class="container text-center mt-5">Conectar estamos, tu fuerza al monitor debes...</p>`;
        return resp.json();


    })
    .then(function (json) {

        console.log(json);

        elementoCategorias.innerHTML = `<h1>Categorias</h1>`;

        //href="index.php?sec=${i} 

        for (var i in json) {

            if (json.hasOwnProperty(i)) {

                elementoCategorias.innerHTML = elementoCategorias.innerHTML + ` 
                           
                <div class="col-4 rounded">
                
                <img class="img-fluid rounded border shadow border-dark" src="img/categories/${i}.jpg" alt="categoria">
                <p class="text-center">${i}</p>
                
                </div>           
                `;

            }


        }








    })



    //elementoBtnPersonajes.innerHTML = `<p> Cargando personajes </p>`;

    fetch(`https://swapi.dev/api/people/`)
    .then((resp) => {

        console.log(resp);
       
        return resp.json();

    })
    .then(function (json) {

        console.log(json);


    })


    for (let i = 1; i < 10 ; i++) {
       
        fetch(`https://swapi.dev/api/people/?page=${i}`)
            .then((resp) => {

                console.log(resp);

                return resp.json();
               
            })
            .then(function (json) {

                console.log(json.results);

            })

    }



