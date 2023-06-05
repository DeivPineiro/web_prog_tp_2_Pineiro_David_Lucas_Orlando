
const elementoPlanetas = document.getElementById('divPlanetas');

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

                var idPlaneta = cadena.split("/");

                //console.log(idPlaneta);

                elementoPlanetas.innerHTML = elementoPlanetas.innerHTML + `
                    
                    <div class = " col-4 "> 

                    <p class="container text-center mt-5"> ${element.name} </p>

                    <img class = "img-fluid" src = "img/planets/${idPlaneta[5]}.jpg">

                    </div>
                                                            
                    `;



            });



        })

}