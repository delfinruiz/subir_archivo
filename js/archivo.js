$(document).ready(function () {


$('#formarchivo').submit(function (e) {


  
    e.preventDefault();

    //Obtengo el tamaño del fichero que se intenta cargar
    var imgsize = document.getElementsByClassName("subirimagen")[0].files[0].size;

    //Condiciono el tamaño del fichero a 1Mb
    if(imgsize > 1000000){
      alert('El archivo supera los 1Mb.');
    }
    else{
      //Esto sigue tan normal como antes
      $.ajax({
        url: "includes/procesa_archivo.php",
        type: "POST",
        data: new FormData(this),
        contentType: false,
        cache: false,
        processData: false,
        success: function (respuesta) {

            $('#archivo').html("<a href='http://localhost/datatable_push/"+respuesta+"' target='_blank'>Archivo adjunto</a>");



        }
      });
    }
  });

});