

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
var cancel = document.querySelector(".cancel")
var btn_compra = document.querySelector(".btn-compra")
var btn_precio = document.querySelector(".btn_precio");
var precio_desde = document.getElementById("precio_desde");
var precio_hasta = document.getElementById("precio_hasta");
var articulo = document.querySelectorAll(".articulo");
var cont_input = document.querySelector(".cont-input");
var text_carrito = document.querySelector(".text_carrito");
const arrow_down = document.querySelector(".arrow_down");
const arrow_up = document.querySelector(".arrow_up");
const cont_filtros = document.querySelector(".cont_filtros");
const destado = document.querySelector(".destacado");
var desc = document.querySelector(".desc")
var total = 0;
var cont_img = 1;
var contador = 0;


arrow_down.addEventListener('click', () => {
    arrow_down.classList.toggle('active');
    arrow_up.classList.toggle('active');
    cont_filtros.classList.toggle('active');
})

arrow_up.addEventListener('click', () => {
    arrow_down.classList.toggle('active');
    arrow_up.classList.toggle('active');
    cont_filtros.classList.toggle('active');
})



//parte de compra de los productos.
//----------------------------------------------------------------

cart.addEventListener('click', () => {
    desactivar()
    activar()
})

agregar.forEach((elemento) => {

    elemento.addEventListener('click', () => {
        const productItem = event.target.parentNode;
        const productName = productItem.querySelector('.product-name').innerText;
        const productPrice = productItem.querySelector('.product-price').innerText;
        const productimg = productItem.querySelector('img');
        var price = productPrice;
        price = price.replace('.', '')
        price = parseFloat(price);
        // Extraer solo el valor numérico del precio
        addcarrito(productName, price, productimg)

    });

});
function addcarrito(producto, precio, img) {

    var producto_lista = document.createElement('li');
    producto_lista.classList.add("producto_lista");
    var text_producto = document.createElement('p');
    var precio_producto = document.createElement('p');
    precio_producto.innerText = precio;
    text_producto.innerText = `${producto}-$`;
    text_producto.classList.add('text_producto');
    precio_producto.classList.add('precio_producto');
    var img_producto = document.createElement('img');
    img_producto.src = img.src
    img_producto.classList.add('img_producto');

    var icon_delete = document.createElement('img')
    icon_delete.classList.add("icon_delete")
    //crea un evento a cada objeto.
    icon_delete.addEventListener('click', actualizar_contador);

    icon_delete.src = 'img/trash.png';

    producto_lista.appendChild(img_producto);
    producto_lista.appendChild(icon_delete);
    producto_lista.appendChild(text_producto);
    producto_lista.appendChild(precio_producto);
    lista_de_compra.appendChild(producto_lista);


    contador++;

    desactivar()
    carrito.textContent = contador;
    total += parseFloat(precio);
    totalElement.innerText = `Total: $${total.toFixed(0)}`;
}

cancel.addEventListener("click", () => {
    activar();
})
//----------------------------------------------------------------



//parte de estilo.
nav_producto.addEventListener('click', () => {
    slider.style.display = "none";
    filtro_text.style.top = "50%";
})

//----------------------------------------------------------------


inp.addEventListener('keyup', e => {
    animacion();
    //esto le da un evento a todo el documento cuando se presiona una tecla
    if (e.target.matches("#buscador")) {
        var productosEncontrados = false;

        document.querySelectorAll('.product-name').forEach(art => {
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

//parte de filtros de productos
btn_precio.addEventListener('click', () => {

    articulo.forEach(art => {
        let precio = art.querySelector('.product-price').innerText;
        precio = precio.replace("$", "");
        precio = precio.replace(".", "");
        precio = parseInt(precio);

        if (precio < precio_hasta.value && precio > precio_desde.value) {
            art.style.display = "flex"
        } else {
            art.style.display = "none"
        }
    });
    animacion()

})

filtro_termos.addEventListener("click", () => {

    reset()

    filtro('imperial', 'camionero', 'bombilla', 'torpedo', 'yerbas')
    setTimeout(function () {
        desc.innerText = "Termos";
    }, 1000);
})

filtro_torpedos.addEventListener("click", () => {

    reset()
    filtro('imperial', 'camionero', 'bombilla', 'termo', 'yerbas');
    setTimeout(function () {
        desc.innerText = "Torpedos";
    }, 1000);

})
filtro_mates.addEventListener("click", () => {

    reset()
    filtro('bombilla', 'termo', 'yerbas', 'destacado');
    setTimeout(function () {
        desc.innerText = "Mates";
    }, 1000);
})
filtro_todo.addEventListener("click", () => {
    reset()
    // Esperar 1 segundo (1000 milisegundos)
    setTimeout(function () {
        desc.style.display = "none";
        destado.style.display = "block";
    }, 1000);
});

filtro_imperial.addEventListener("click", () => {

    reset();
    filtro('torpedo', 'camionero', 'bombilla', 'termo', 'yerbas');
    setTimeout(function () {
        desc.innerText = "Imperiales";
    }, 1000);
})

filtro_bombillas.addEventListener("click", () => {

    reset();
    filtro('imperial', 'camionero', 'torpedo', 'termo', 'yerbas');
    setTimeout(function () {
        desc.innerText = "Bombillas";
    }, 1000);
})
filtro_yerbas.addEventListener("click", () => {

    reset();
    filtro('imperial', 'camionero', 'torpedo', 'termo', 'bombilla');
    setTimeout(function () {
        desc.innerText = "Yerbas";
    }, 1000);
})
//----------------------------------------------------------------

//funciones

function activar() {
    text_carrito.classList.toggle("active");
    carrito.classList.toggle("active");
    lista_de_compra.classList.toggle("active");
    cont_compra.classList.toggle("active");
    img_logo.classList.toggle("active");
    btn_compra.classList.toggle("active");
    cont_input.classList.toggle("active");
    cancel.classList.toggle("active");
    cart.classList.toggle("active");


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


}

function actualizar_contador() {
    let cont_padre = event.target.parentNode;
    contador--;
    carrito.textContent = contador;

    let precio = cont_padre.querySelector(".precio_producto").innerText;
    precio = precio.replace(/\./g, '');
    precio = precio.match(/\d+/g);
    precio = parseFloat(precio);

    total = totalElement.innerText;

    total = total.match(/\d+/g);
    total = parseFloat(total);
    total -= precio
    totalElement.innerText = `Total: $${total.toFixed(0)}`;
    cont_padre.remove();
    desactivar()

}

function desactivar() {
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
    if (contador == 0) {
        vacio.style.display = "block";

    }
    else {
        vacio.style.display = "none";

    }

}

function filtro(...clases) {
    destado.style.display = "none";
    clases.forEach(clase => {
        const elementos = document.querySelectorAll('.' + clase);
        elementos.forEach(elemento => {
            elemento.style.display = 'none';
        });
    });

}
function reset() {

    animacion();
    desc.style.display = "block";
    desc.innerText = ""
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
//----------------------------------------------------------------