// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
    // Navigation functionality
    const navLinks = document.querySelectorAll('.nav-link');
    const navbar = document.getElementById('navbar');
    const sections = document.querySelectorAll('section');
    
    // Smooth scrolling for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Update active navigation link on scroll
    function updateActiveNavLink() {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const sectionHeight = section.clientHeight;
            
            if (sectionTop <= 100 && sectionTop + sectionHeight > 100) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + current) {
                link.classList.add('active');
            }
        });
    }
    
    // Navbar scroll effect
    function handleNavbarScroll() {
        if (window.scrollY > 50) {
            navbar.classList.add('navbar-scrolled');
        } else {
            navbar.classList.remove('navbar-scrolled');
        }
    }
    
    // Scroll event listener
    window.addEventListener('scroll', function() {
        updateActiveNavLink();
        handleNavbarScroll();
    });
    
    // Animate skill progress bars when they come into view
    function animateSkillBars() {
        const skillCards = document.querySelectorAll('.skill-card');
        
        skillCards.forEach(card => {
            const rect = card.getBoundingClientRect();
            const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
            
            if (isVisible) {
                const progressFill = card.querySelector('.skill-progress-fill');
                const level = card.getAttribute('data-level');
                
                if (progressFill && level) {
                    progressFill.style.width = level + '%';
                }
            }
        });
    }
    
    // Animate elements on scroll
    function animateOnScroll() {
        const animatedElements = document.querySelectorAll('.skill-card, .project-card, .testimonial-card');
        
        animatedElements.forEach(element => {
            const rect = element.getBoundingClientRect();
            const isVisible = rect.top < window.innerHeight - 100;
            
            if (isVisible) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    }
    
    // Scroll event for animations
    window.addEventListener('scroll', function() {
        animateSkillBars();
        animateOnScroll();
    });
    
    // Initial call to set up animations
    animateSkillBars();
    animateOnScroll();
    
    // Add click handlers for hero buttons
    const heroButtons = document.querySelectorAll('.hero-buttons .btn');
    heroButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Parallax effect for floating elements
    function parallaxEffect() {
        const floatingElements = document.querySelectorAll('.floating-element');
        const scrolled = window.pageYOffset;
        
        floatingElements.forEach((element, index) => {
            const rate = scrolled * -0.1 * (index + 1);
            element.style.transform = `translateY(${rate}px)`;
        });
    }
    
    // Add parallax effect on scroll
    window.addEventListener('scroll', parallaxEffect);
    
    // Add typing effect to hero title (optional enhancement)
    function typeWriter(element, text, speed = 100) {
        let i = 0;
        element.innerHTML = '';
        
        function type() {
            if (i < text.length) {
                element.innerHTML += text.charAt(i);
                i++;
                setTimeout(type, speed);
            }
        }
        
        type();
    }
    
    // Initialize typing effect for hero title
    setTimeout(() => {
        const heroTitle = document.querySelector('.hero-title');
        if (heroTitle) {
            const originalText = heroTitle.innerHTML;
            typeWriter(heroTitle, originalText, 50);
        }
    }, 500);
    
    // Add hover effects for project cards
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // Add click handlers for social links (you can update these with real URLs)
    const socialLinks = document.querySelectorAll('.social-link');
    socialLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            // Add your social media URLs here
            const platform = this.classList[1]; // linkedin, github, whatsapp
            
            switch(platform) {
                case 'linkedin':
                    console.log('Add your LinkedIn profile URL here');
                    // window.open('https://linkedin.com/in/your-profile', '_blank');
                    break;
                case 'github':
                    console.log('Add your GitHub profile URL here');
                    // window.open('https://github.com/your-username', '_blank');
                    break;
                case 'whatsapp':
                    console.log('Add your WhatsApp contact here');
                    // window.open('https://wa.me/your-number', '_blank');
                    break;
            }
        });
    });
    
    // Add intersection observer for better performance
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);
    
    // Observe all animated elements
    document.querySelectorAll('.skill-card, .project-card, .testimonial-card, .timeline-item').forEach(el => {
        observer.observe(el);
    });
    
    // Mobile menu toggle (if you want to add a hamburger menu)
    function createMobileMenu() {
        const navContainer = document.querySelector('.nav-container');
        const navMenu = document.querySelector('.nav-menu');
        
        // Create hamburger button
        const hamburger = document.createElement('button');
        hamburger.classList.add('hamburger');
        hamburger.innerHTML = '☰';
        hamburger.style.display = 'none';
        hamburger.style.background = 'none';
        hamburger.style.border = 'none';
        hamburger.style.fontSize = '1.5rem';
        hamburger.style.color = '#06b6d4';
        hamburger.style.cursor = 'pointer';
        
        navContainer.appendChild(hamburger);
        
        // Toggle mobile menu
        hamburger.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
        
        // Show/hide hamburger based on screen size
        function checkScreenSize() {
            if (window.innerWidth <= 768) {
                hamburger.style.display = 'block';
            } else {
                hamburger.style.display = 'none';
                navMenu.classList.remove('active');
            }
        }
        
        window.addEventListener('resize', checkScreenSize);
        checkScreenSize();
    }
    
    // Initialize mobile menu
    createMobileMenu();
    
    // Add smooth reveal animation for sections
    const revealElements = document.querySelectorAll('.hero, .about, .skills, .projects, .experience, .testimonials, .contact');
    
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });
    
    revealElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        revealObserver.observe(element);
    });
});

// Add CSS classes for animations
const style = document.createElement('style');
style.textContent = `
    .animate-in {
        opacity: 1 !important;
        transform: translateY(0) !important;
    }
    
    .hamburger {
        transition: all 0.3s ease;
    }
    
    .hamburger:hover {
        color: #0891b2 !important;
        transform: scale(1.1);
    }
    
    @media (max-width: 768px) {
        .nav-menu {
            transform: translateY(-10px);
            opacity: 0;
            visibility: hidden;
            transition: all 0.3s ease;
        }
        
        .nav-menu.active {
            transform: translateY(0);
            opacity: 1;
            visibility: visible;
            display: flex !important;
        }
    }
`;

document.head.appendChild(style);