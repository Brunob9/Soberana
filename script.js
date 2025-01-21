window.addEventListener('scroll', () => {
    const hero = document.querySelector('.hero');
    let scrollPosition = window.scrollY;

    // Certificando-se de que o elemento .hero existe antes de tentar modificar a opacidade
    if (hero) {
        // Reduz a opacidade com base na posição do scroll
        hero.style.opacity = 1 - scrollPosition / 500;
        
        // Evita que a opacidade caia abaixo de 0
        if (parseFloat(hero.style.opacity) < 0) {
            hero.style.opacity = 0;
        }
    }
});
