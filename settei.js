$(document).ready(function() {
    $(".button1").on("click", function() {
      $("div.modal").addClass("is-active");
    })

    $("#close, div.modal-background").on("click", function() {
      $("div.modal").removeClass("is-active");
    })
  });
window.onload = function (){

dispseats();
calcseats();

};
