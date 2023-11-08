

document.addEventListener('DOMContentLoaded', function () {
    var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                entry.target.classList.remove('visible'); // Remove a classe se a imagem não estiver mais visível
            }
        });
    }, { threshold: 0.5 });

    var elements = document.querySelectorAll('.img-container');
    elements.forEach(function (element) {
        observer.observe(element);
    });
});

