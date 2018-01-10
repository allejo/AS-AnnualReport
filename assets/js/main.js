var html = document.getElementsByTagName('html')[0];
html.classList.remove('no-js');
html.classList.add('js');

window.addEventListener('scroll', function() {
    var elementTarget = document.getElementById('table-of-contents');
    var returnToTop = document.querySelector('.return-to-top');
    var showReturnToTop = (window.scrollY > (elementTarget.offsetTop + elementTarget.offsetHeight));

    if (showReturnToTop) {
        if (!returnToTop.classList.contains('fade-in')) {
            returnToTop.classList.add('fade-in');
        }
    } else {
        returnToTop.classList.remove('fade-in');
    }
});
