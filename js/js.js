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

        elementoCategorias.innerHTML = `<h1 class="text-center">Categorias</h1>`;

        //href="index.php?sec=${i} 

        for (var i in json) {

            if (json.hasOwnProperty(i)) {

                elementoCategorias.innerHTML = elementoCategorias.innerHTML + ` 
                           
                <div class="col-6 col-md-4 rounded text-light ">
                
                <a href = "${i}.html"><img class="img-fluid rounded shadow border border-warning" src="img/categories/${i}.jpg" alt="categoria"></a>
                <p class="text-center">${i}</p>
                
                </div>           
                `;

            }


        }

    })

