$('.message a').click(function(){
    $('form').animate({height: "toggle", opacity: "toggle"}, "slow");
 });
 

document.addEventListener("DOMContentLoaded", function() {
    const goBackHomeButton = document.getElementById("home");
    if (goBackHomeButton) {
      goBackHomeButton.addEventListener('click', function() {
        window.location.href = 'http://127.0.0.1:5500/modulo-01/tela%20inicial/tela_incial.html';
      });
    } else {
      console.log("O Botão 'to-go-back-home' não foi encontrado. Favor verificar.");
    }
  });