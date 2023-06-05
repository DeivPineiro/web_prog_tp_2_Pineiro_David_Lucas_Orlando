
const elementoPeliculas = document.getElementById('divPeliculas');

for (let i = 1; i < 2; i++) {

    fetch(`https://swapi.dev/api/films/?page=${i}`)
        .then((resp) => {

            console.log(resp);

            return resp.json();

        })
        .then(function (json) {

            //console.log(json.results);

            json.results.forEach(element => {

                cadena = JSON.stringify(element.url);

                console.log(JSON.stringify(cadena));

                var idPelicula = cadena.split("/");

                console.log(idPelicula);

                elementoPeliculas.innerHTML = elementoPeliculas.innerHTML + `
                    
                    <div class = " col-4 "> 

                    <p class="container text-center mt-5"> ${element.title} </p>

                    <img class = "img-fluid" src = "img/films/${idPelicula[5]}.jpg">

                    </div>
                                                            
                    `;



            });



        })

}