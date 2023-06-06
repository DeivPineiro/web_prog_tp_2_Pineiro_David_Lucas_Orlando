
const elementoPlanetas = document.getElementById('divPlanetas');

for (let i = 1; i < 7; i++) {

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
                    
                    <div class = " col-4 rounded border bg-dark text-light"> 

                    <p class="container text-center mt-2"> ${element.name} </p>

                    <img class = "img-fluid rounded border border-warning shadow mb-2" src = "img/planets/${idPlaneta[5]}.jpg">

                    </div>
                                                            
                    `;

            

            });



        })

}



