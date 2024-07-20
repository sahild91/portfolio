$(document).ready(function () {
    // Enable Bootstrap tooltips
    $('[data-toggle="tooltip"]').tooltip();

    // Smooth scrolling for navigation links
    $('a.nav-link').on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top - 70
            }, 800);
        }
    });

    // Ensure only one experience detail is expanded at a time
    $('#experienceAccordion').on('show.bs.collapse', function () {
        $('#experienceAccordion .collapse.show').collapse('hide');
    });

    // Stop ticker animation on hover
    $('.skills-ticker').hover(
        function() {
            $('.skills-track').css('animation-play-state', 'paused');
        },
        function() {
            $('.skills-track').css('animation-play-state', 'running');
        }
    );

    // Calculate the total width of the skills track
    const skillsTrack = document.querySelector('.skills-track');
    const skillItems = document.querySelectorAll('.skill-item');
    let totalWidth = 0;

    skillItems.forEach(item => {
        totalWidth += item.offsetWidth;
    });

    skillsTrack.style.width = `${totalWidth}px`;

    // Set the animation duration based on the total width
    const animationDuration = totalWidth / 100; // Adjust the speed as needed
    skillsTrack.style.animationDuration = `${animationDuration}s`;
});
