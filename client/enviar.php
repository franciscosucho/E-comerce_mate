<?php
$conexionDatos = new mysqli('localhost', 'root', '', 'la_choza_del_mate');

if ($conexionDatos->connect_error) {
    die("La conexión a la base de datos falló: " . $conexionDatos->connect_error);
}

$nombre = $_POST['nombre'];
$email = $_POST['email'];
$contraseña = $_POST['contraseña'];
$confirmar_contraseña = $_POST['con_contraseña'];

if (empty($nombre) || empty($email) || empty($contraseña) || empty($confirmar_contraseña)) {
    echo "Todos los campos son obligatorios.";
} elseif ($contraseña != $confirmar_contraseña) {
    echo "Las contraseñas no coinciden.";
} else {
    // Hash de la contraseña (debes implementar una función segura de hash)
    $hash_contraseña = password_hash($contraseña, PASSWORD_DEFAULT);

    // Sentencia preparada para la inserción
    $sql = "INSERT INTO registrarse (nombre, email, contraseña) VALUES (?, ?, ?)";

    $stmt = $conexionDatos->prepare($sql);
    $stmt->bind_param("sss", $nombre, $email, $hash_contraseña);

    if ($stmt->execute()) {
        echo "El registro se ingresó correctamente.";
        
        header("Location: index.php");
        sleep(3);
    } else {
        echo "Error en la inserción: " . $stmt->error;
    }

    $stmt->close();
}

$conexionDatos->close();
?>
