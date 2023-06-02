<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>

    <script src="https://code.jquery.com/jquery-3.5.1.js"></script>

    <script src="js/archivo.js"></script>
</head>
<body>
    <form method="post" id="formarchivo" enctype="multipart/form-data">

        <input type="text" name="nombre" value="prueba nombre">
        <input type="file" name="archivo">
        <input type="submit" value="Enviar">

    </form>

    <span id="archivo"></span>
</body>
</html>