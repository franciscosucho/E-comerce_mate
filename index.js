
var cantidadpixeles = 100;

var filtro_termos = document.querySelector(".filtro_termos");
var filtro_imperial = document.querySelector(".filtro_imperial");
var filtro_bombillas = document.querySelector(".filtro_bombillas");
var filtro_torpedos = document.querySelector(".filtro_torpedos");
var filtro_todo = document.querySelector(".filtro_todo");

filtro_todo.onclick = () => {
    let productos = document.querySelectorAll(".articulo");
    productos.forEach(producto => {
        producto.style.display = 'flex';
    });
}

filtro_torpedos.onclick = () => {
    filtro('imperial', 'camionero')
}

filtro_imperial.onclick = () => {
    filtro('torpedo', 'camionero')
}
filtro_camionero.onclick = () => {
    filtro('torpedo', 'imperial')
}
filtro_torpedos.onclick = () => {
    filtro('imperial', 'camionero')
}



function filtro(...clases) {
    clases.forEach(clase => {
        const elementos = document.querySelectorAll('.' + clase);
        elementos.forEach(elemento => {
            elemento.style.display = 'none';
        });
    });
}

window.addEventListener('scroll', function () {
    var cont_header = this.document.querySelector(".cont-header");
    var header = document.querySelector(".header");
    var img_logo = document.querySelector(".img-logo");
    // Obtén la posición actual del scroll en píxeles
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

    // Verifica si la posición del scroll alcanza la cantidad deseada
    if (scrollPosition >= cantidadpixeles) {
        // Aplica los cambios de estilo al elemento
        cont_header.style.height = '100px';
        modificar_tamaño(img_logo);
        header.style.height = '200px'
    } else {
        cont_header.style.height = 'auto';
        header.style.height = '300px'
        // Restaura los estilos originales del elemento
        restore(img_logo);
    }
});

function modificar_tamaño(...elementos) {

    elementos.forEach(elemento => {
        // Aplica los cambios de estilo al elemento

        elemento.style.transform = 'scale(.6)';
    });
}
function restore(...elementos) {
    elementos.forEach(elemento => {

        // Aplica los cambios de estilo al elemento
        elemento.style.transform = 'scale(1)';
    });
}
