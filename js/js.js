const elementoCategorias = document.getElementById('divCategorias');






elementoCategorias.innerHTML = `<div class="container text-center mt-5"><p>Si esperar tu puedes, categorias ver pronto...</p></div>`;

fetch(`https://swapi.dev/api/`)
    .then((resp) => {


        //console.log(resp);
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
                
                <a href = "${i}.html"><img class="img-fluid rounded border shadow border-dark" src="img/categories/${i}.jpg" alt="categoria"></a>
                <p class="text-center">${i}</p>
                
                </div>           
                `;

            }


        }

    })


/////////////////////////////////
//Funcion recorrer personajes///
////////////////////////////////
/*


for (let i = 1; i < 10; i++) {

    fetch(`https://swapi.dev/api/people/?page=${i}`)
        .then((resp) => {

            //console.log(resp);

            return resp.json();

        })
        .then(function (json) {

            //console.log(json.results);

            json.results.forEach(element => {

                cadena = JSON.stringify(element.url);

                //console.log(JSON.stringify(cadena));

                var idPersonaje = cadena.split("/");

                //console.log(idPersonaje);

                elementoPersonajes.innerHTML = elementoPersonajes.innerHTML + `
                    
                    <div class = " col-4 "> 

                    <p class="container text-center mt-5"> ${element.name} </p>

                    <img class = "img-fluid" src = "img/characters/${idPersonaje[5]}.jpg">

                    </div>
                                                            
                    `;



            });



        })

}*/

//////////////////////
// Seccion Planetas//
////////////////////
/*
for (let i = 1; i < 8; i++) {

    fetch(`https://swapi.dev/api/planets/?page=${i}`)
        .then((resp) => {

            //console.log(resp);

            return resp.json();

        })
        .then(function (json) {

            //console.log(json.results);

            json.results.forEach(element => {

                cadena = JSON.stringify(element.url);

                //console.log(JSON.stringify(cadena));

                var id = cadena.split("/");

                //console.log(idPersonaje);

                elementoPersonajes.innerHTML = elementoPersonajes.innerHTML + `
                    
                    <div class = " col-4 "> 

                    <p class="container text-center mt-5"> ${element.name} </p>

                    <img class = "img-fluid" src = "img/planets/${id[5]}.jpg">

                    
                    </div>
                                                            
                    `;



            });



        })

}

*/


