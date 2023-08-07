<?php 
if ($_POST) {
    $nombre = $_POST['Nombre'];
    $email = $_POST['email'];
    $contraseña = $_POST['contraseña'];
    $con_contraseña = $_POST['con_contraseña'];

    // Verificar si las variables no están vacías antes de realizar la inserción
    if (!empty($nombre) && !empty($email) && !empty($contraseña) && !empty($con_contraseña)) {
        $server="localhost"; // 127.0.0.1
        $usuario="root";
        $contrasenia="";
        $base_datos = "la_choza_del_mate";

        try {
            $conexion = new PDO("mysql:host=$server;dbname=$base_datos", $usuario, $contrasenia);
            $conexion->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            echo "Conexión correcta";

            $sqlinsert = "INSERT INTO `registrarse`(`nombre`, `email`, `contraseña`, `Confirmar_contraseña`) VALUES ('$nombre', '$email', '$contraseña', '$con_contraseña')";
            $conexion->exec($sqlinsert);
            echo "Registro insertado correctamente";
        } catch(PDOException $error) {
            echo "Conexión fallida: " . $error;
        }
    } else {
        echo "Por favor, complete todos los campos antes de enviar los datos.";
    }
}
