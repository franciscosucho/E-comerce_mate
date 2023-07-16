

//declarion de variables.
var cantidadpixeles = 10;
var filtro_termos = document.querySelectorAll(".filtro_termos");
var filtro_imperial = document.querySelector(".filtro_imperial");
var filtro_bombillas = document.querySelectorAll(".filtro_bombillas");
var filtro_torpedos = document.querySelector(".filtro_torpedos");
var filtro_todo = document.querySelector(".filtro_todo");
var filtro_termos = document.querySelector(".filtro_termos");
var filtro_bombillas = document.querySelector(".filtro_bombillas");
var filtro_mates = document.querySelector(".filtro_mates");
var filtro_yerbas = document.querySelector(".filtro_yerbas");
var inp = document.querySelector("#buscador");
var cont_productos = document.querySelector(".cont-productos");
var loader = document.querySelector(".custom-loader");
var agregar = document.querySelectorAll(".agregar");
var carrito = document.getElementById("carrito");
var img_prin = document.querySelector("cont-img")
var nav_producto = document.querySelector(".nav_producto")
var slider = document.querySelector(".slider-frame");
var filtro_text = document.querySelector(".filtro")
var footer = document.querySelector(".footer");
var cont_compra = document.querySelector(".compra");
var lista_de_compra = document.querySelector(".lista-de-compra");
const totalElement = document.getElementById("total");
var cart = document.querySelector(".cart");
var cont_registro = document.querySelector(".cont-regis");
const img_logo = document.querySelector(".img-logo");
const vacio = document.querySelector(".vacio")
var btn_compra = document.querySelector(".btn-compra")
var carrito_total;

var total = 0;
var cont_img = 1;


//parte de compra de los productos.
//----------------------------------------------------------------
var contador = 0;
cart.addEventListener('click', () => {
    lista_de_compra.classList.toggle("active");
    cont_compra.classList.toggle("active");
    img_logo.classList.toggle("active");
    btn_compra.classList.toggle("active");


    const estilo = getComputedStyle(lista_de_compra);

    if (estilo.display === 'none') {
        btn_compra.style.display = "none";
    }
    else {
        if (contador != 0) {
            btn_compra.style.display = "block";
        }
        else {
            btn_compra.style.display = "none";
        }
    }

})
agregar.forEach((elemento) => {

    elemento.addEventListener('click', () => {
        const productItem = event.target.parentNode;
        const productName = productItem.querySelector('.product-name').innerText;
        const productPrice = productItem.querySelector('.product-price').innerText;
        const price = productPrice;
        // Extraer solo el valor numérico del precio
        addcarrito(productName, price)

    });

});

function addcarrito(producto, precio) {
    var producto_lista = document.createElement('li');
    producto_lista.classList.add("producto_lista")
    producto_lista.innerText = `${producto}-$${precio}`;
    lista_de_compra.appendChild(producto_lista);


    contador++;
    
    if (contador == 0) {
        vacio.style.display = "block";

    }
    else {
        vacio.style.display = "none";

    }
    carrito.textContent = contador;
    total += parseFloat(precio);
    totalElement.innerText = `Total: $${total.toFixed(3)}`;
}
//----------------------------------------------------------------



//parte de estilo

nav_producto.addEventListener('click', () => {
    slider.style.display = "none";
    filtro_text.style.top = "50%";
})








window.addEventListener('scroll', function () {
    var cont_header = this.document.querySelector(".cont-header");
    var header = document.querySelector(".header");
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



inp.addEventListener('keyup', e => {
    animacion();
    //esto le da un evento a todo el documento cuando se presiona una tecla
    if (e.target.matches("#buscador")) {
        var productosEncontrados = false;

        document.querySelectorAll('.name').forEach(art => {
            var contenedorPadre = art.parentNode;
            if (art.textContent.toLowerCase().includes(e.target.value.toLowerCase())) {
                contenedorPadre.classList.remove('filtro');
                productosEncontrados = true;
            } else {
                contenedorPadre.classList.add('filtro');
            }
        });

        if (!productosEncontrados) {
            no_encontrado.remove();
            noENcontrado()
            setTimeout(function () {
                no_encontrado.remove();
            }, 3000);

        }
    }

})

var no_encontrado = document.createElement('h3');
function noENcontrado() {
    footer.style.display = "none";
    no_encontrado.setAttribute('id', 'no_encontrado');
    no_encontrado.style.textAlign = "center"
    no_encontrado.textContent = 'No se encontró ese producto.';
    cont_productos.appendChild(no_encontrado);
}


filtro_termos.addEventListener("click", () => {

    reset()
    filtro('imperial', 'camionero', 'bombilla', 'torpedo', 'yerbas')
})

filtro_torpedos.addEventListener("click", () => {

    reset()
    filtro('imperial', 'camionero', 'bombilla', 'termo', 'yerbas')
})
filtro_mates.addEventListener("click", () => {

    reset()
    filtro('bombilla', 'termo', 'yerbas')
})
filtro_todo.addEventListener("click", () => { reset() });

filtro_imperial.addEventListener("click", () => {

    reset()
    filtro('torpedo', 'camionero', 'bombilla', 'termo', 'yerbas')
})

filtro_bombillas.addEventListener("click", () => {

    reset()
    filtro('imperial', 'camionero', 'torpedo', 'termo', 'yerbas')
})
filtro_yerbas.addEventListener("click", () => {

    reset()
    filtro('imperial', 'camionero', 'torpedo', 'termo', 'bombilla')
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

    animacion();
    let productos = document.querySelectorAll(".articulo");
    productos.forEach(producto => {
        producto.style.display = 'flex';
    });
}


function modificar_tamaño(...elementos) {

    elementos.forEach(elemento => {
        // Aplica los cambios de estilo al elemento
        elemento.style.transition = "all .5s ease-in-out";
        elemento.style.transform = 'scale(.6)';
    });
}
function restore(...elementos) {
    elementos.forEach(elemento => {
        elemento.style.transition = "all .5s ease-in-out";
        // Aplica los cambios de estilo al elemento
        elemento.style.transform = 'scale(1)';
    });
}
function animacion() {
    loader.style.display = "flex"
    footer.style.display = "none";
    cont_productos.style.display = "none";
    // Esperar 1 segundo (1000 milisegundos)
    setTimeout(function () {
        footer.style.display = "flex";
        loader.style.display = "none"
        // Ocultar la animación de carga después de 1 segundo
        cont_productos.style.display = "grid";
    }, 1000);
}
