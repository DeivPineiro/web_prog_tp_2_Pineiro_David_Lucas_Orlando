
const elementoNaves = document.getElementById('divNaves');

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

                //console.log(idNave);

                elementoNaves.innerHTML = elementoNaves.innerHTML + `
                    
                    <div class = " col-4 "> 

                    <p class="container text-center mt-5"> ${element.name} </p>

                    <img class = "img-fluid" src = "img/starships/${idNave[5]}.jpg">

                    </div>
                                                            
                    `;



            });



        })

}