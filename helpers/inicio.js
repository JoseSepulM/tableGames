const categorias = [
    {
        "id" : 1,
        "title" : "Juegos de estrategia",
        "description" : "Descubre juegos que desafiarán tu mente y tus habilidades tácticas.",
        "imagen": "imagen_estrategia.jpeg"
    },
    {
        "id" : 2,
        "title" : "Juegos de cartas",
        "description" : "Diviértete con una variedad de juegos de cartas, desde clásicos hasta modernos.",
        "imagen": "imagen_cartas.jpeg"
    },
    {
        "id" : 3,
        "title" : "Juegos Familiares",
        "description" : "Perfectos para disfrutar en familia y con amigos de todas las edades.",
        "imagen": "imagen_familiares.jpeg"
    },
    {
        "id" : 4,
        "title" : "Juegos de fiesta",
        "description" : "Animan cualquier reunión con risas y diversión garantizada.",
        "imagen": "imagen_fiesta.jpeg"
    }
];

function listadoCategorias(){

    let dvListadoJuegos = document.getElementById('dv_listado_juegos');
    dvListadoJuegos.innerHTML = '';
    let html = '';
    categorias.forEach((element) => {
        html += `<section onclick="detalleCategorias(${element.id})" class="category">`;
        html += `   <div class="content">`;
        html += `       <h2>${element.title}</h2>`;
        html += `       <p>${element.description}</p>`;
        html += `   </div>`;
        html += `   <img src="../util/images/categories/${element.imagen}" alt="${element.title}">`;
        html += '</section>';
    });

    dvListadoJuegos.innerHTML = html;
}

function detalleCategorias(id){
    window.location.href = 'detalles.html?id='+id;
}


listadoCategorias();