// Adiciona efeito de navegação ativa ao clicar
const navLinks = document.querySelectorAll('.navbar nav a');
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navLinks.forEach(l => l.classList.remove('active'));
    link.classList.add('active');
  });
});
