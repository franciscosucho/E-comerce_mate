<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>La choza del mate</title>

    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
    <link href="https://api.fontshare.com/v2/css?f[]=quicksand@500&f[]=britney@400&f[]=general-sans@300&f[]=boska@400,300&f[]=hind@400&f[]=zodiak@400,100&display=swap" rel="stylesheet">
    <link rel="icon" type="image/x-icon" href="img/logo_header.png">
    <link href="https://api.fontshare.com/v2/css?f[]=panchang@700&display=swap" rel="stylesheet">
    <link href="https://api.fontshare.com/v2/css?f[]=panchang@700&f[]=gambarino@400&f[]=synonym@400&f[]=amulya@700&f[]=switzer@400&f[]=boska@701&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="./css/estilo.css">
    <script type="text/javascript">
        window.onload = function() {
            (function(d, script) {
                script = d.createElement('script');
                script.type = 'text/javascript';
                script.async = true;
                script.src = 'https://w.app/widget-v1/WOcVZY.js';
                d.getElementsByTagName('head')[0].appendChild(script);
            }(document));
        };
    </script>
</head>
<?php
// Haciendo la conexión a la base de datos y pidiendo las canciones
$conexionDatos = new mysqli('localhost', 'root', '', 'la_choza_del_mate');
$queryproductos = "SELECT * FROM datos_productos";
$resultproductos = mysqli_query($conexionDatos, $queryproductos);
?>

<body>

    <header class="header">

        <nav class="menu">

            <ul class="menu-horizontal">
                <div class="cont_img">
                    <img class="img-logo" src="img/la choza del mate-1 (4) (1).png" alt="">
                    <h2>la choza del Mate</h2>
                </div>


                <li>
                    <a class="nav_producto" href="#">Productos</a>
                    <ul class="menu-vertical">
                        <li>
                            <p class="filtro_mates">Mates</p>
                            <ul class="sub-menu">
                                <li>Camionero</li>
                                <li>Torpedo</li>
                                <li class="ultimo">Imperial</li>
                            </ul>
                        </li>
                        <li>
                            <p>Bombilla</p>
                            <ul class="sub-menu">
                                <li>Alpaca cincelada</li>
                                <li class="ultimo">Alpaca </li>
                            </ul>
                        </li>
                        <li>
                            <p>Yerbas</p>
                            <ul class="sub-menu">
                                <li>Canarias</li>
                                <li>Baldo</li>
                                <li class="ultimo">Kraus</li>
                            </ul>
                        </li>
                        <li>
                            <p>Termos</p>
                            <ul class="sub-menu">
                                <li>Media manija acero</li>
                                <li class="ultimo">media manija negro</li>
                            </ul>
                        </li>

                    </ul>
                </li>

                <li>

                    <a href="#footer">Contacto</a>
                </li>
                <li>

                    <a href="/client/index.html">Inicio</a>

                </li>
                <li>

                    <p class="ini_sesion">Iniciar sesion</p>
                    <div class="div_sesion estilo_sesion">
                        <form action="/client/iniciar.php" method="post">
                       
                            <div>
                                <span class="material-symbols-outlined arrow_left">
                                    arrow_left_alt
                                </span>
                                <h2>Iniciar Sesion</h2>
                                
                            </div>
                            <?php include("iniciar.php"); ?>
                            <input type="email" name="email" placeholder="Email">
                            <input type="password" name="contraseña" placeholder="Contraseña">
                            <button type="submit" class="btn_ini" name="btn">Iniciar Sesion</button>
                            <h6>¿No tenés cuenta aún?
                                <a>crear cuenta</a>
                            </h6>
                            
                        </form>


                    </div>

                </li>
                <li>
                    <p id="regis">Registrarse</p>
                    <div class="div_regis  estilo_sesion">
                        <form action="enviar.php" method="post">
                            <div>
                                <span class="material-symbols-outlined arrow_left">
                                    arrow_left_alt
                                </span>
                                <h2>Registrarse</h2>
                            </div>
                            <input type="text" name="nombre" placeholder="Nombre y apellido">
                            <input type="email" name="email" placeholder="Email">
                            <input type="password" name="contraseña" placeholder="Contraseña">
                            <input type="password" name="con_contraseña" placeholder="Confirmar contraseña">

                            <button class="btn_res" name="btn_res">Registrarse</button>
                            <h6>¿Tienes cuenta?
                                <a href=".ini_sesion">Iniciar Sesion</a>
                            </h6>
                        </form>


                    </div>


            </ul>
            <div class="cont-input">
                <input id="buscador" type="text" placeholder="Buscar">
                <span class="material-symbols-outlined">search </span>
            </div>
        </nav>
    </header>
    <main class="main">
        <h1 class="h1">Tu rincón para disfrutar del sabor y la tradición del mate</h1>

        <h3 class="destacado">Nuestros Productos</h3>
        <h3 class="desc"></h3>
        <div class="compra">
            <div class="sub-compra">
                <span class="material-symbols-outlined cart">
                    shopping_bag

                </span>
                <span class="material-symbols-outlined cancel">
                    cancel
                </span>
                <h3 class="text_carrito">Carrito de compra</h3>
                <p id="carrito">0</p>
            </div>

            <ul class="lista-de-compra">
                <h4 id="total">Total:$0</h4>
                <h3 class="vacio">El carrito esta vacio</h3>


            </ul>
            <div class="cont_btn_compra">
                <button class="btn-compra"> Comprar</button>
            </div>

        </div>
        <article class="filtro">
            <div class="cont_arrow">
                <h3>Filtros</h3>
                <span class="material-symbols-outlined arrow_down">
                    arrow_drop_down
                </span>
                <span class="material-symbols-outlined arrow_up">
                    arrow_drop_up
                </span>
            </div>

            <ul class="cont_filtros">
                <li class="filtro_todo">ver todo</li>
                <li class="filtro_imperial">imperiales</li>
                <li class="filtro_torpedos">torpedos</li>
                <li class="filtro_termos">termos</li>
                <li class="filtro_bombillas">bombillas</li>
                <li class="filtro_yerbas">Yerbas</li>
                <li class="filtro_precio">Precio
                    <div>
                        <input type="text" name="" id="precio_desde" placeholder="Minimo">
                        <input type="text" name="" id="precio_hasta" placeholder="Maximo">
                        <button class="btn_precio">></button>
                    </div>
                </li>
            </ul>
        </article>
        <div class="custom-loader"></div>

        <article class="cont-productos">

            <?php
            while ($productoObj = mysqli_fetch_array($resultproductos)) {
                echo (' <div class="articulo ' . $productoObj[5] . ' ">');
                echo (' <img src="' . $productoObj[1] . '" alt="imperial">');
                echo ('<p class="product-name">' . $productoObj[2] . '</p>');
                echo (' <p class="product-price">' . $productoObj[3] . '</p>');
                echo ('<p class="product-stock">  (' . $productoObj[4] . ' Disponibles)</p>');
                echo (' <span class="agregar">COMPRAR</span>');
                echo (' </div>');
            }

            ?>
        </article>
        <footer class="footer" id="footer">
            <div class="navegacion">
                <h3>NAVEGACION</h3>
                <ul>
                    <li>Inicio</li>
                    <li>Termos</li>
                    <li>Mates</li>
                    <li>Bombillas</li>
                    <li>Yerbas</li>
                    <li>Todo</li>
                </ul>
            </div>
            <div class="div-contacto">
                <h3>CONTACTO</h3>
                <div class="telefono">
                    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                        <path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" />
                    </svg>
                    <h4>11-2494-9903</p>
                </div>

                <a href="https://www.instagram.com/fran.sucho/" target="_blank">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                        <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                    </svg>
                    <p>fran.sucho</p>
                </a>
                <div class="email">
                    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                        <path d="M256 64C150 64 64 150 64 256s86 192 192 192c17.7 0 32 14.3 32 32s-14.3 32-32 32C114.6 512 0 397.4 0 256S114.6 0 256 0S512 114.6 512 256v32c0 53-43 96-96 96c-29.3 0-55.6-13.2-73.2-33.9C320 371.1 289.5 384 256 384c-70.7 0-128-57.3-128-128s57.3-128 128-128c27.9 0 53.7 8.9 74.7 24.1c5.7-5 13.1-8.1 21.3-8.1c17.7 0 32 14.3 32 32v80 32c0 17.7 14.3 32 32 32s32-14.3 32-32V256c0-106-86-192-192-192zm64 192a64 64 0 1 0 -128 0 64 64 0 1 0 128 0z" />
                    </svg>
                    <p>franciscosuchomela@.gmail.com</p>
                </div>
            </div>

        </footer>
    </main>
    <script src="index.js"></script>
</body>

</html>