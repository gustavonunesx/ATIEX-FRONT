const popupTecnologias = document.getElementById("popup");

document.querySelectorAll(".card").forEach(card => {
  card.addEventListener("click", function() {
    popupTecnologias.style.display = 'flex';
  });
});