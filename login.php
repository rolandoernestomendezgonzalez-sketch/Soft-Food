<?php

session_start();
include("conexion.php");

$usuario = $_POST['usuario'];
$password = $_POST['password'];

$sql = "SELECT * FROM usuarios WHERE usuario='$usuario' AND password='$password'";
$resultado = mysqli_query($conexion,$sql);

if(mysqli_num_rows($resultado) > 0){

    $_SESSION['usuario'] = $usuario;

    header("Location: panel.php");
    exit();

}else{

    echo "<script>
    alert('Usuario o contraseña incorrectos');
    window.location='index.html';
    </script>";

}

?>
