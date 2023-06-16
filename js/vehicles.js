
const elementoVehiculos = document.getElementById('divVehiculos');
local = (i , x) => {
   
    localStorage.setItem("data", i)
    localStorage.setItem("tipo", x)
 
 }
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
                    
                    <div class = "  col-4 rounded border bg-dark text-light"> 

                    <p class="container text-center mt-2"> ${element.name} </p>

                    <a onclick="local(${idVehiculo[5]}, 5)" href="elemento.html?var=hola"><img alt="${idVehiculo[4]+ "-" +idVehiculo[5]}" class = "img-fluid rounded border border-warning shadow mb-2" src = "img/vehicles/${idVehiculo[5]}.jpg"></a>

                    </div>
                                                            
                    `;



            });



        })

}