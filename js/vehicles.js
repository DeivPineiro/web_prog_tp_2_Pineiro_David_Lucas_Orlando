
const elementoVehiculos = document.getElementById('divVehiculos');

for (let i = 1; i < 6; i++) {

    fetch(`https://swapi.dev/api/vehicles/?page=${i}`)
        .then((resp) => {

            //console.log(resp);

            return resp.json();

        })
        .then(function (json) {

            //console.log(json.results);

            json.results.forEach(element => {

                cadena = JSON.stringify(element.url);

                //console.log(JSON.stringify(cadena));

                var idVehiculo = cadena.split("/");

                //console.log(idVehiculo);

                elementoVehiculos.innerHTML = elementoVehiculos.innerHTML + `
                    
                    <div class = " col-4 "> 

                    <p class="container text-center mt-5"> ${element.name} </p>

                    <img class = "img-fluid" src = "img/vehicles/${idVehiculo[5]}.jpg">

                    </div>
                                                            
                    `;



            });



        })

}