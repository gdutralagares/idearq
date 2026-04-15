console.log("Site carregado");


const menuToggle = document.getElementById('menu-toggle');
const nav = document.getElementById('nav');
const navLinks = document.querySelectorAll('#nav a');

// abrir/fechar menu
menuToggle.addEventListener('click', () => {
  nav.classList.toggle('active');

  if (menuToggle.classList.contains('active')) {
    menuToggle.classList.remove('active');
    menuToggle.textContent = '☰';
  } else {
    menuToggle.classList.add('active');
    menuToggle.textContent = '✕';
  } // 👈 adiciona isso
});

// fechar ao clicar em link
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('active');
    menuToggle.classList.remove('active');
    menuToggle.textContent = '☰'; // 👈 importante
  });
});

