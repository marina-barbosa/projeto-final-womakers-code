document.addEventListener('DOMContentLoaded', function () {
    window.addEventListener('scroll', function () {
        var header = document.querySelector('.sticky-header');
        header.classList.toggle('scrolled', window.scrollY > 0);

        var middleLinks = document.querySelectorAll('.header-middle a');
        middleLinks.forEach(function (link) {
            link.classList.toggle('scrolled', window.scrollY > 0);
        });

    });

    // var changeColorButton = document.getElementById('changeColorButton');
    // changeColorButton.addEventListener('click', function () {
    //     var header = document.querySelector('.sticky-header');
    //     header.classList.toggle('scrolled');
    // });
});