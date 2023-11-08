document.addEventListener('DOMContentLoaded', function () {
    var changeColorButton = document.getElementById('changeColorButton');
    var body = document.body;
    var sections = document.querySelectorAll('section');

    changeColorButton.addEventListener('click', function () {
        body.classList.toggle('light-theme');
        body.classList.toggle('dark-theme');

        sections.forEach(function (section) {
            section.classList.toggle('light-theme');
            section.classList.toggle('dark-theme');
        });
    });
});

