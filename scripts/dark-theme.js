document.addEventListener('DOMContentLoaded', function () {
    var toggleColor = document.getElementById('toggleColor');
    var body = document.body;
    var sections = document.querySelectorAll('section');
    var navigationLinks = document.querySelectorAll('#menu li a');
    var menuElement = document.getElementById('menu');

    toggleColor.addEventListener('click', function () {
        body.classList.toggle('dark-theme');

        sections.forEach(function (section) {
            section.classList.toggle('dark-theme');
        });

        navigationLinks.forEach(function (link) {
            link.classList.toggle('dark-theme');
        });

        menuElement.classList.toggle('dark-theme');
    });
});

