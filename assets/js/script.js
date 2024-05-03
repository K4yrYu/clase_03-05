/*
const obtenerDigimonPromesas = () => {

    return new Promise ((resolve , reject ) => {
        fetch('https://digimon-api.vercel.app/api/digimon')
        .then((digimones) => {
            if(!digimones.ok){
                throw new Error("Error al llamar al api");
            }
            return digimones.json();
        })
        .then(( data ) => {
            resolve(data);
        })
        .catch((error) => {
            reject(error);
        })
    })
};

obtenerDigimonPromesas()
    .then( (digimones)=> {
        digimones.map( (digimon)=> {
            console.log(digimon);
        })
    }).catch((error)=> {
        console.log(`El error es: ${error}`);
    })
*/

//con Jquery
$(document).ready(function(){
    function obtenerDigimones(){
        $('#obtenerDigimones').click(function() {
            $.ajax({
                url: 'https://digimon-api.vercel.app/api/digimon',
                type: 'GET',
                success: function(data) {
                    localStorage.setItem("digimones", JSON.stringify(data));
                    mostrarDigimones(data);
                    //muestra en consola en una tabla la data
                    //console.table(data);
                },
                error: function(xhr,status,error){
                    console.error('Error al obtener los datos', error);
                }
            });
        });
    }

    function mostrarDigimones(digimones){
        let digimonList = '';
        $.map(digimones, function(digimon) {
            let card = `
                <div class="card col-xl-4 col-lg-4 col-md-4 col-sm-12 col-xs-12">
                    <div class="row">
                        <div class="card">
                            <img src="${digimon.img}" class="card-img-top" alt="${digimon.name}">
                            <div class="card-body">
                                <h5 class="card-title">${digimon.name}</h5>
                                <p class="card-text">Nivel: ${digimon.level}</p>
                                <p class="card-text">Tipo ${digimon.type}</p>
                            </div>
                        </div>
                    </div>
                </div>
            `;
            digimonList += card;
        });
        $('#digimon-card').html(digimonList);
    }

    obtenerDigimones();
})