//Alert envío de correo
$(function(){
  $("#enviarCorreo").click(function(event) {
    alert("El correo fue enviado correctamente...")
  });
});


//Turn on red to h2
$(document).ready(function(){
  $("#ingredientes-red").dblclick(function(){
    $(this).css({
      "color": "red",
    });
  });
});
//Turn on red to h2
$(document).ready(function(){
  $("#preparacion-red").dblclick(function(){
    $(this).css({
      "color": "red",
    });
  });
});

//Hide tittle of card
$(document).ready(function(){
  $(".card").click(function(){
    $parent.children(".card-text").hide();
  });
});
