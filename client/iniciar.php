<?php

$conexionDatos = new mysqli('localhost', 'root', '', 'la_choza_del_mate');
if ($conexionDatos->connect_error) {
    die("La conexión a la base de datos falló: " . $conexionDatos->connect_error);
}



if($_POST){
    $ini_email = $_POST['email'];
    $ini_contraseña = $_POST['contraseña'];
}
else{
    echo("Hola");
}

// Consulta SQL para seleccionar todos los datos de una tabla (reemplaza "nombre_de_tabla" con el nombre real de tu tabla)

// $sql = "SELECT * FROM registrarse";

// Ejecutar la consulta

// $result = $conexionDatos->query($sql);
// $conexionDatos->close();
?>