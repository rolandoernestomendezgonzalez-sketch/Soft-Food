<?php
session_start();

if(!isset($_SESSION['usuario'])){
    header("location:index.html");
}
?>

<!DOCTYPE html>
<html lang="es">
    <head>
        <meta charset="UTF-8">
        <title>Panel Softfood</title>
        <link rel="stylesheet" href="css/panel.css">
        <!-- Iconos -->
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css">
        <link rel="icon" href="img/icon/android-chrome-192x192.png">
    </head>

<body>
<div class="container">

<!-- SIDEBAR -->
<div class="sidebar">

        <h2 class="logo">Softfood</h2>

        <ul>
            <li>
                <i class="fa fa-users"></i>
                <a href="#">Usuarios</a>
            </li>

            <li>
                <i class="fa fa-gear"></i>
                <a href="#">Configuración</a>
            </li>

            <li>
                <i class="fa fa-box"></i>
                <a href="#">Productos</a>
            </li>

            <li>
                <i class="fa fa-list"></i>
                <a href="#">Catálogos</a>
            </li>

            <li>
                <i class="fa fa-utensils"></i>
                <a href="#">Recetas</a>
            </li>

            <li>
                <i class="fa fa-sign-out-alt"></i>
                <a href="logout.php">Cerrar sesión</a>
            </li>
        </ul>
</div>

<!-- CONTENIDO -->
<div class="main">

    <div class="topbar">

        <h1>Panel Administrativo</h1>

        <div class="user-info">
            <i class="fa fa-user-circle"></i>
            <?php echo $_SESSION['usuario']; ?>
        </div>

    </div>

<div class="cards">

    <div class="card">
        <h3>Usuarios registrados</h3>
        <p>25</p>
    </div>

    <div class="card">
        <h3>Productos</h3>
        <p>40</p>
    </div>

    <div class="card">
        <h3>Recetas</h3>
        <p>18</p>
    </div>

    </div>

        <div class="content">

        <h2>Actividad reciente</h2>

        <table>
                <tr>
                <th>Usuario</th>
                <th>Acción</th>
                <th>Fecha</th>
                </tr>

                <tr>
                <td>Admin</td>
                <td>Agregó receta</td>
                <td>09/03/2026</td>
                </tr>

                <tr>
                <td>Juan</td>
                <td>Registró producto</td>
                <td>09/03/2026</td>
                </tr>

                <tr>
                <td>Maria</td>
                <td>Actualizó catálogo</td>
                <td>08/03/2026</td>
                </tr>
        </table>

    </div>

</div>

</div>

</body>
</html>
