const btnBurguer = document.getElementById('btn-burguer');

function toggleMenu() {
    const nav = document.getElementById('nav');
    nav.classList.toggle('active');
}

btnBurguer.addEventListener('click', toggleMenu);