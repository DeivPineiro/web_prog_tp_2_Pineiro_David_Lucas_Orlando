
const elementoNaves = document.getElementById('divNaves');

local = (i , x) => {
   
   localStorage.setItem("data", i)
   localStorage.setItem("tipo", x)

}

for (let i = 1; i < 10; i++) {

    fetch(`https://swapi.dev/api/starships/?page=${i}`)
        .then((resp) => {

            //console.log(resp);

            return resp.json();

        })
        .then(function (json) {

            //console.log(json.results);

            json.results.forEach(element => {

                cadena = JSON.stringify(element.url);

                //console.log(JSON.stringify(cadena));

                var idNave = cadena.split("/");

                console.log(idNave);

                elementoNaves.innerHTML = elementoNaves.innerHTML + `
                    
                    <div class = " col-4 rounded border bg-dark text-light"> 

                    <p class="container text-center mt-2"> ${element.name} </p>

                    <a onclick="local(${idNave[5]}, 6)" href="elemento.html?var=hola"><img alt="${idNave[4]+ "-" +idNave[5]}" class = "img-fluid rounded border border-warning shadow mb-2" src = "img/starships/${idNave[5]}.jpg"></a>

                    </div>
                                                            
                    `;



            });



        })

}