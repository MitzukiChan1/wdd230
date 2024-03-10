function setCurrentYear() {
    const year = new Date().getFullYear();
    document.getElementById('currentYear').textContent = year;
}

function setLastModifiedDate() {
    const lastModified = document.lastModified;
    document.getElementById('lastModified').textContent = 'Last Updated: ' + lastModified;
}

function toggleMenu() {
    var nav = document.querySelector('nav');
    nav.classList.toggle('show-menu');
}

setCurrentYear();
setLastModifiedDate();
function toggleMenu() {
    var nav = document.querySelector('.navigation');
    nav.classList.toggle('show');
}

document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.querySelector('.menu-toggle');
    const nav = document.querySelector('.navigation-menu');

    toggleButton.addEventListener('click', function () {
        nav.classList.toggle('show');
    });
});


setCurrentYear();
setLastModifiedDate();
