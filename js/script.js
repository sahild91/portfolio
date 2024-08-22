// Experience data
const experienceData = [
    {
        id: 1,
        title: "Head of Software Engineering",
        company: "Evobi Automations Pvt Ltd",
        logo: "../images/evobi.jpeg",
        duration: "JUN 2023 - PRESENT",
        location: "BENGALURU, KARNATAKA, INDIA",
        details: [
            "Increased annual EBITDA by 23% through strategic market positioning and operational optimization.",
            "Enhanced project delivery speed by 12% with the implementation of JIRA for improved collaboration.",
            "Expanded team capacity by 23% and boosted revenue by 15% through effective resource allocation and talent management.",
            "Elevated employee engagement by 20% by prioritizing professional development and creating a supportive work environment."
        ]
    },
    {
        id: 2,
        title: "Head – Software Engineering",
        company: "Bibox Labs Pvt. Ltd.",
        logo: "../images/bibox_labs.jpg",
        duration: "JUNE 2023 - PRESENT",
        location: "BENGALURU, KARNATAKA, INDIA",
        details: [
            "Implemented Agile methodologies that enhanced product development efficiency by 14%, ensuring seamless cross-functional team integration.",
            "Streamlined bug tracking processes, resulting in a 34% reduction in project issues through Kanban boards and Jira automation.",
            "Led talent acquisition and team development, cultivating a culture of continuous improvement and innovation."
        ]
    },
    {
        id: 3,
        title: "Software Solution Consultant",
        company: "Freelance (Khushiyaan Foundation)",
        logo: "../images/freelance.jpg",
        duration: "SEPT 2022 - MAY 2023",
        location: "MUMBAI, MAHARASHTRA, INDIA",
        details: [
            "Revamped the company's website and backend data structure, improving information management for volunteers, members, and events.",
            "Mentored and trained interns, ensuring high-quality deliverables and fostering a learning environment."
        ]
    },
    {
        id: 4,
        title: "Technology Lead",
        company: "Infosys Limited",
        logo: "../images/Infosys.png",
        duration: "MAY 2013 - AUG 2022",
        location: "PUNE, MAHARASHTRA, INDIA",
        details: [
            "Led the design and implementation of complex technology solutions, significantly enhancing business operations and client satisfaction.",
            "Analyzed business requirements and developed detailed system designs, ensuring alignment with client needs.",
            "Managed cross-functional teams, overseeing end-to-end project delivery across Oracle, UNIX, and J2EE/Struts platforms, contributing to successful project outcomes.",
            "Directed client communications and design discussions, ensuring technical and architectural alignment with client expectations."
        ]
    }
    // Add other experience items here
];

// Skills data
const skillsData = [
    { name: "JavaScript", level: 90 },
    { name: "Python", level: 85 },
    { name: "React.js", level: 88 },
    { name: "Node.js", level: 82 },
    { name: "MongoDB", level: 80 },
    { name: "JIRA", level: 85 },
    { name: "Agile", level: 92 },
    { name: "SaaS", level: 87 }
];

// Project data
const projectsData = [
    {
        title: "E-commerce Platform",
        description: "Developed a scalable e-commerce platform using MERN stack",
        technologies: ["React", "Node.js", "MongoDB", "Express"]
    },
    // Add other projects here
];

// Testimonial data
const testimonialsData = [
    {
        name: "John Doe",
        position: "CEO, Tech Innovators",
        text: "Sahil's leadership transformed our engineering team, driving innovation and efficiency."
    },
    // Add other testimonials here
];

// Function to render experience items
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    const isDarkMode = document.body.classList.contains('dark-mode');
    localStorage.setItem('darkMode', isDarkMode);
    updateDarkModeButton(isDarkMode);
}

function updateDarkModeButton(isDarkMode) {
    const button = document.getElementById('darkModeToggle');
    button.innerHTML = isDarkMode ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
}

// Experience details popup
function showExperienceDetails(title) {
    const exp = experienceData.find(e => e.title === title);
    if (!exp) return;

    const popupContainer = document.getElementById('popup-container');
    popupContainer.innerHTML = `
        <div class="popup-content">
            <h2>${exp.title}</h2>
            <h3>${exp.company}</h3>
            <p>${exp.duration}</p>
            <ul>
                ${exp.details.map(detail => `<li>${detail}</li>`).join('')}
            </ul>
            <button class="close-popup"><i class="fas fa-times"></i></button>
        </div>
    `;
    popupContainer.style.display = 'flex';

    document.querySelector('.close-popup').addEventListener('click', () => {
        popupContainer.style.display = 'none';
    });
}

// Smooth scrolling
function smoothScroll(target) {
    const element = document.querySelector(target);
    window.scrollTo({
        top: element.offsetTop - 60,
        behavior: 'smooth'
    });
}

// Form validation
function isValidEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

window.addEventListener('load', () => {
    const masonryGrids = document.querySelectorAll('.masonry-grid');
    masonryGrids.forEach(grid => {
        const items = grid.querySelectorAll('.masonry-item');
        let rowHeight = 0;
        let rowGap = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-row-gap'));

        const resizeAllItems = () => {
            items.forEach(item => {
                const rowSpan = Math.ceil((item.getBoundingClientRect().height + rowGap) / (rowHeight + rowGap));
                item.style.gridRowEnd = `span ${rowSpan}`;
            });
        };

        const resizeRowHeight = () => {
            rowHeight = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-auto-rows'));
            resizeAllItems();
        };

        resizeRowHeight();
        window.addEventListener('resize', resizeRowHeight);
    });
});

function handleFormSubmit(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (!name || !email || !message) {
        alert('Please fill in all fields');
        return;
    }

    if (!isValidEmail(email)) {
        alert('Please enter a valid email address');
        return;
    }

    // Here you would typically send the form data to your server or a service like Google Forms
    console.log('Form submitted:', { name, email, message });
    alert('Thank you for your message! I will get back to you soon.');
    e.target.reset();
}

// Event listeners
document.addEventListener('DOMContentLoaded', () => {
    // Dark mode
    const darkModeToggle = document.getElementById('darkModeToggle');
    darkModeToggle.addEventListener('click', toggleDarkMode);

    // Check for saved dark mode preference
    const savedDarkMode = localStorage.getItem('darkMode') === 'true';
    if (savedDarkMode) {
        document.body.classList.add('dark-mode');
        updateDarkModeButton(true);
    }

    // Experience details
    document.querySelector('.experience-container').addEventListener('click', (e) => {
        if (e.target.classList.contains('view-details')) {
            e.preventDefault();
            const title = e.target.closest('.experience-item').querySelector('h3').textContent;
            showExperienceDetails(title);
        }
    });

    // Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            smoothScroll(this.getAttribute('href'));
        });
    });

    // Form submission
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', handleFormSubmit);
    }

    // Implement scroll-based animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });
});