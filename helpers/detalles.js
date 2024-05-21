const juegos = [
    {
        nombre: "Risk",
        precio: 25000,
        descripcion: "Juego de conquista mundial",
        categoriaId: 1
    },
    {
        nombre: "Ajedrez",
        precio: 20000,
        descripcion: "Juego de estrategia para dos jugadores",
        categoriaId: 1
    },
    {
        nombre: "Catan",
        precio: 30000,
        descripcion: "Juego de colonización y negociación",
        categoriaId: 1
    },
    {
        nombre: "Póker",
        precio: 15000,
        descripcion: "Juego de cartas de apuestas",
        categoriaId: 2
    },
    {
        nombre: "Uno",
        precio: 10000,
        descripcion: "Juego de cartas de emparejamiento",
        categoriaId: 2
    },
    {
        nombre: "Truco",
        precio: 20000,
        descripcion: "Juego de cartas de engaño y estrategia",
        categoriaId: 2
    },
    {
        nombre: "Monopoly",
        precio: 25000,
        descripcion: "Juego de compra de propiedades",
        categoriaId: 3
    },
    {
        nombre: "Twister",
        precio: 15000,
        descripcion: "Juego de habilidad física y equilibrio",
        categoriaId: 3
    },
    {
        nombre: "Jenga",
        precio: 20000,
        descripcion: "Juego de habilidad y destreza",
        categoriaId: 3
    },
    {
        nombre: "Serpientes y escaleras",
        precio: 10000,
        descripcion: "Juego de tablero clásico",
        categoriaId: 4
    },
    {
        nombre: "Batalla naval",
        precio: 15000,
        descripcion: "Juego de estrategia naval",
        categoriaId: 4
    },
    {
        nombre: "Karaoke",
        precio: 5000,
        descripcion: "Juego de canto y entretenimiento",
        categoriaId: 4
    }
];


function listarJuegos(){
    let mainContainer = document.getElementById('list-detail');
    let html = '';
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');
    const listado = juegos.filter((element) => element.categoriaId == id);

    listado.forEach((juego) => {
        html += `
            <section class="category">
                <h2>${juego.nombre}</h2>
                <p>Precio: $${juego.precio}</p>
                <p>${juego.descripcion}</p>
            </section>
        `;
    })

    mainContainer.innerHTML = html;

}

listarJuegos();