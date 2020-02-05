$(document).ready(function () {  //efectos

    $('.boton-test-1').click(function(){
        $("#resultado-1").addClass('text-warning');
    });

    $('.boton-test-2').click(function(){
        $("#resultado-2").slideToggle();
    });

    $('.boton-test-3').click(function(){
        $("#resultado-3").append("<b>Soy un nuevo parrafo</b>");
    });

    $('.boton-test-4').click(function(){
        $("#resultado-4").fadeOut();
    });

    $('.boton-test-5').mouseenter(function(){
        $("#resultado-5").fadeOut();
    });

    $('.boton-test-5').mouseleave(function(){
        $("#resultado-5").fadeIn();
    });


});