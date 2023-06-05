
const elementoPersonajes = document.getElementById('divPersonajes');

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

}