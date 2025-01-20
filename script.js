window.addEventListener('scroll', () => {
    const hero = document.querySelector('.hero');
    let scrollPosition = window.scrollY;

    // Reduz a opacidade com base na posição do scroll
    hero.style.opacity = 1 - scrollPosition / 500; 
});

src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"
