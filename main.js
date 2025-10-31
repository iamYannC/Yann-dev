        // Theme toggle functionality
        const themeToggle = document.getElementById('themeToggle');
        const themeMenu = document.getElementById('themeMenu');
        const themeOptions = document.querySelectorAll('.theme-option');
        const body = document.body;
        
        // Toggle menu on button click
        themeToggle.addEventListener('click', function(e) {
            e.stopPropagation();
            themeMenu.classList.toggle('open');
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!themeMenu.contains(e.target) && e.target !== themeToggle) {
                themeMenu.classList.remove('open');
            }
        });
        
        // Theme selection
        themeOptions.forEach(function(option) {
            option.addEventListener('click', function() {
                const theme = this.getAttribute('data-theme');
                applyTheme(theme);
                themeMenu.classList.remove('open');
            });
        });
        
        function applyTheme(theme) {
            body.classList.remove('dark-theme', 'funky-theme');
            
            if (theme === 'dark') {
                body.classList.add('dark-theme');
            } else if (theme === 'funky') {
                body.classList.add('funky-theme');
            }
            
            themeOptions.forEach(function(opt) {
                opt.classList.remove('active');
                if (opt.getAttribute('data-theme') === theme) {
                    opt.classList.add('active');
                }
            });
        }
        
        // Intersection Observer for active navigation
        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('nav a');
        
        const observerOptions = {
            root: null,
            rootMargin: '-50% 0px -50% 0px',
            threshold: 0
        };
        
        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    const id = entry.target.getAttribute('id');
                    
                    // Remove active from all links
                    navLinks.forEach(function(link) {
                        link.classList.remove('active');
                    });
                    
                    // Add active to the matching link
                    navLinks.forEach(function(link) {
                        if (link.getAttribute('href') === '#' + id) {
                            link.classList.add('active');
                        }
                    });
                }
            });
        }, observerOptions);
        
        sections.forEach(function(section) {
            observer.observe(section);
        });
        
      // Smooth scrolling for internal links only
navLinks.forEach(function(link) {
    link.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        // Only handle links that start with '#' (anchors)
        if (href.startsWith('#')) {
            e.preventDefault();
            const targetSection = document.querySelector(href);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        }
        // If not a hash link (e.g. /fr/index.html), allow normal navigation
    });
});
        // Form submission handler
        document.getElementById('contactForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;
            
            const mailtoLink = 'mailto:Yannco5@gmail.com?subject=' + 
                              encodeURIComponent(subject || 'Message from Portfolio') +
                              '&body=' + encodeURIComponent('Name: ' + name + '\nEmail: ' + email + '\n\nMessage:\n' + message);
            
            window.location.href = mailtoLink;
        });