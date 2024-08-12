document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuIcon = document.querySelector('.mobile-menu-icon');
    const mobileNav = document.querySelector('.mobile-nav');
    const body = document.body;

    mobileMenuIcon.addEventListener('click', function() {
        mobileNav.classList.toggle('active');
        body.classList.toggle('menu-open');
        mobileMenuIcon.textContent = mobileNav.classList.contains('active') ? '×' : '☰';
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        if (!mobileNav.contains(event.target) && !mobileMenuIcon.contains(event.target)) {
            mobileNav.classList.remove('active');
            body.classList.remove('menu-open');
            mobileMenuIcon.textContent = '☰';
        }
    });

    // Close menu when clicking a link
    const mobileNavLinks = mobileNav.querySelectorAll('a');
    mobileNavLinks.forEach(link => {
        link.addEventListener('click', function() {
            mobileNav.classList.remove('active');
            body.classList.remove('menu-open');
            mobileMenuIcon.textContent = '☰';
        });
    });
});
