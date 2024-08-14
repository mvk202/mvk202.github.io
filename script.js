document.getElementById('mobile-menu').addEventListener('click', function() {
    var navList = document.getElementById('nav-list');
    if (navList.classList.contains('show')) {
        navList.classList.remove('show');
        navList.style.left = '-100%'; // Hide menu to the left
    } else {
        navList.classList.add('show');
        navList.style.left = '0'; // Show menu at the left edge
    }
});
