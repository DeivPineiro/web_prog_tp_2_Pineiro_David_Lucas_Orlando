
const elementoPlanetas = document.getElementById('divPlanetas');

local_planeta = (i , x) => {
   
    localStorage.setItem("data", i)
    localStorage.setItem("tipo", x)
 
 }

for (let i = 1; i < 6; i++) {

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

                    

                   

                 
                    <a onclick="local_planeta(${idPlaneta[5]}, 2)" href="elemento.html?var=hola"><img alt="${idPlaneta[4]+ "-" +idPlaneta[5]}" class = "img-fluid rounded border border-warning shadow mb-2" src = "img/planets/${idPlaneta[5]}.jpg"></a>
                    
                    </div>

                   


                                                            
                    `;

            

            });



        })

}



