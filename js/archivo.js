$(document).ready(function () {


$('#formarchivo').submit(function (e) {
    e.preventDefault();
      
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

  });

});