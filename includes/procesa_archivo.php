<?php

$nombre = isset($_POST['nombre']) ? $_POST['nombre']:"";

	move_uploaded_file($_FILES["archivo"]["tmp_name"], "../document/".$_FILES['archivo']['name']);

	echo "document/".$_FILES['archivo']['name'];

    

?>