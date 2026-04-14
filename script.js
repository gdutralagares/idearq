console.log("Site carregado");


const menuToggle = document.getElementById('menu-toggle');
const nav = document.getElementById('nav');
const navLinks = document.querySelectorAll('#nav a');

// abrir/fechar menu
menuToggle.addEventListener('click', () => {
  nav.classList.toggle('active');
});

// fechar ao clicar em qualquer link
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('active');
  });
});