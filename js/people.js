
const elementoPersonajes = document.getElementById('divPersonajes');



local = (i , x) => {
   
   localStorage.setItem("data", i)
   localStorage.setItem("tipo", x)

}

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
                
                

                console.log(idPersonaje);

                elementoPersonajes.innerHTML = elementoPersonajes.innerHTML + `
                    
                    <div class = " col-4 col-4 rounded border bg-dark text-light "> 

                    <p class="container text-center mt-2"> ${element.name} </p>
                    
                    
                   <a onclick="local(${idPersonaje[5]}, 1)" href="elemento.html?var=hola"><img alt="${idPersonaje[4]+ "-" +idPersonaje[5]}" class = "img-fluid rounded border border-warning shadow mb-2" src = "img/characters/${idPersonaje[5]}.jpg"></a>
                   
                    </div>
                                                            
                    `;



            });



        })

}
