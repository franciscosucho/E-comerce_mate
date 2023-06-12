
var cantidadpixeles = 10;

var filtro_termos = this.document.querySelectorAll(".filtro_termos");
var filtro_imperial = document.querySelector(".filtro_imperial");
var filtro_bombillas = this.document.querySelectorAll(".filtro_bombillas");
var filtro_torpedos = document.querySelector(".filtro_torpedos");
var filtro_todo = document.querySelector(".filtro_todo");
var filtro_termos = document.querySelector(".filtro_termos");
var filtro_bombillas = document.querySelector(".filtro_bombillas");
var filtro_mates = document.querySelector(".filtro_mates");
var inp = document.querySelector(".input");

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
        header.style.height = '19vh';
    } else {
        cont_header.style.height = 'auto';
        header.style.height = '30vh'
        // Restaura los estilos originales del elemento
        restore(img_logo);
    }
});



document.addEventListener('keyup', e => {
    //esto le da un evento a todo el documento cuando se presiona una tecla
    if (e.target.matches("#buscador")) {
        document.querySelectorAll('.name').forEach(art => {
            var contenedorPadre = art.parentNode;
            art.textContent.toLowerCase().includes(e.target.value.toLowerCase())
                ? contenedorPadre.classList.remove('filtro')
                : contenedorPadre.classList.add('filtro')
        })
    }
})



filtro_termos.addEventListener("click", () => {
    reset()
    filtro('imperial', 'camionero', 'bombilla', 'torpedo')
})

filtro_torpedos.addEventListener("click", () => {
    reset()
    filtro('imperial', 'camionero', 'bombilla', 'termo')
})
filtro_mates.addEventListener("click", () => {
    reset()
    filtro('bombilla', 'termo')
})
filtro_todo.addEventListener("click", () => { reset() });

filtro_imperial.addEventListener("click", () => {
    reset()
    filtro('torpedo', 'camionero', 'bombilla', 'termo')
})

filtro_bombillas.addEventListener("click", () => {

    reset()
    filtro('imperial', 'camionero', 'torpedo', 'termo')
})




function filtro(...clases) {
    clases.forEach(clase => {
        const elementos = document.querySelectorAll('.' + clase);
        elementos.forEach(elemento => {
            elemento.style.display = 'none';
        });
    });
}
function reset() {
    let productos = document.querySelectorAll(".articulo");
    productos.forEach(producto => {
        producto.style.display = 'flex';
    });
}


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
