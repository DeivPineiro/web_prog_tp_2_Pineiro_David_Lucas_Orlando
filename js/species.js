
const elementoEspecies = document.getElementById('divEspecies');
local = (i , x) => {
   
    localStorage.setItem("data", i)
    localStorage.setItem("tipo", x)
 
 }
for (let i = 1; i < 6; i++) {

    fetch(`https://swapi.dev/api/species/?page=${i}`)
        .then((resp) => {

            //console.log(resp);

            return resp.json();

        })
        .then(function (json) {

            //console.log(json.results);

            json.results.forEach(element => {

                cadena = JSON.stringify(element.url);

                //console.log(JSON.stringify(cadena));

                var idEspecie = cadena.split("/");

                //console.log(idEspecie);

                elementoEspecies.innerHTML = elementoEspecies.innerHTML + `
                    
                    <div class = " col-4 rounded border bg-dark text-light "> 

                    <p class="container text-center mt-2"> ${element.name} </p>

              
                    <a onclick="local(${idEspecie[5]}, 4)" href="elemento.html?var=hola"><img alt="${idEspecie[4]+ "-" +idEspecie[5]}" class = "img-fluid rounded border border-warning shadow mb-2" src = "img/species/${idEspecie[5]}.jpg"></a>

                    </div>
                                                            
                    `;



            });



        })

}