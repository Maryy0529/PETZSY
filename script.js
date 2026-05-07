// Transforma menu hamburguer em X
const menuHamburguer = document.querySelector('.menu-hamburguer'); // Seleciona o elemento com a classe 'menu-hamburguer' e armazena na constante

menuHamburguer.addEventListener('click', () => { // Adiciona um ouvinte de evento que escuta cliques no ícone do menu hamburguer
    toggleMenu(); // Ao clicar, executa a função toggleMenu
});

function toggleMenu() {
    const nav = document.querySelector('.nav-responsive'); // Seleciona o menu de navegação com classe 'nav-responsive'

    menuHamburguer.classList.toggle('change'); // Alterna (adiciona/remove) a classe 'change' no ícone do menu, normalmente usada para animar em "X"

    if (menuHamburguer.classList.contains('change')) { // Se o ícone tiver a classe 'change' (ou seja, está aberto)
        nav.style.display = 'block'; // Mostra o menu de navegação
    } else {
        nav.style.display = 'none'; // Esconde o menu de navegação
    }
}