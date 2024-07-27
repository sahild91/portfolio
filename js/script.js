$(document).ready(function () {
    // Enable Bootstrap tooltips
    $('[data-toggle="tooltip"]').tooltip();

    // Smooth scrolling for navigation links
    $('a.nav-link').on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            const hash = this.hash;
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

    // Particle animation
    const home = document.querySelector('.home');
    
    function createParticle() {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        
        const size = Math.random() * 5 + 2;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;
        
        const duration = Math.random() * 20 + 10;
        particle.style.animation = `float ${duration}s linear infinite`;
        
        home.appendChild(particle);
        
        setTimeout(() => {
            particle.remove();
        }, duration * 1000);
    }
    
    setInterval(createParticle, 300);
});