const map = L.map('map').setView([-23.9680, -46.3282], 16);
const layer = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
});

layer.addTo(map);

const marker = L.marker([-23.9680, -46.3282]);
marker.addTo(map);

document.addEventListener("DOMContentLoaded", function() {
  const goBackHomeButton = document.getElementById("to-go-back-home");
  if (goBackHomeButton) {
    goBackHomeButton.addEventListener('click', function() {
      window.location.href = 'http://127.0.0.1:5500/modulo-01/tela%20inicial/tela_incial.html';
    });
  } else {
    console.log("Botão 'to-go-back-home' não encontrado.");
  }
});

