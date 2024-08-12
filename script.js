// script.js

document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.querySelector('.mobile-menu-icon');
    const mobileNav = document.querySelector('.mobile-nav');

    menuIcon.addEventListener('click', function() {
        mobileNav.classList.toggle('open');
    });
});
