
var cantidadpixeles = 100;

window.addEventListener('scroll', function () {
    var header = document.querySelector(".header");
    var img_logo = document.querySelector(".img-logo");
    // Obtén la posición actual del scroll en píxeles
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

    // Verifica si la posición del scroll alcanza la cantidad deseada



    if (scrollPosition >= cantidadpixeles) {
        // Aplica los cambios de estilo al elemento
        modificar_tamaño(img_logo);
        header.style.height = '300px'
    } else {

        header.style.height = '400px'
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
