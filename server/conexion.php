<?php
		// Haciendo la conexión a la base de datos y pidiendo las canciones
		$conexionDatos = new mysqli('localhost', 'root', '', 'la_choza_del_mate');
		$queryproductos = "SELECT * FROM datos_productos";
		$resultproductos = mysqli_query($conexionDatos, $queryproductos);
	?>