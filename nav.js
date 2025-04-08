document.addEventListener('DOMContentLoaded', function() {
    const currentPage = window.location.pathname.split("/").pop();  // Get current page file name
    const navLinks = document.querySelectorAll('#nbar li a');

    // Loop through all nav links
    navLinks.forEach(link => {
        // Check if the link's href matches the current page
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }

        link.addEventListener('click', function() {
            // Remove active class from all links
            navLinks.forEach(link => link.classList.remove('active'));

            // Add active class to the clicked link
            this.classList.add('active');
        });
    });
});
