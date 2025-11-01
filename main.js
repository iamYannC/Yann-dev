document.addEventListener('DOMContentLoaded', () => {

const themeToggle = document.getElementById('themeToggle');
const themeMenu = document.getElementById('themeMenu');
const themeOptions = document.querySelectorAll('.theme-option');
const body = document.body;

// Open on hover
themeToggle.addEventListener('mouseenter', () => {
  themeMenu.classList.add('open');
});

// Keep menu open while hovering
themeMenu.addEventListener('mouseenter', () => {
  themeMenu.classList.add('open');
});

// Close when leaving both
themeToggle.addEventListener('mouseleave', () => {
  setTimeout(() => {
    if (!themeMenu.matches(':hover')) themeMenu.classList.remove('open');
  }, 100);
});

themeMenu.addEventListener('mouseleave', () => {
  themeMenu.classList.remove('open');
});

// Theme selection logic
themeOptions.forEach(option => {
  option.addEventListener('click', () => {
    const theme = option.getAttribute('data-theme');
    applyTheme(theme);
    themeMenu.classList.remove('open');
  });
});

function applyTheme(theme) {
  body.classList.remove('dark-theme', 'funky-theme');

  if (theme === 'dark') body.classList.add('dark-theme');
  else if (theme === 'funky') body.classList.add('funky-theme');

  themeOptions.forEach(opt => {
    opt.classList.toggle('active', opt.getAttribute('data-theme') === theme);
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
}); // wrapper for all JS

// text carousel modal to inlarge images

document.querySelectorAll('.view-large').forEach(btn => {
  btn.addEventListener('click', () => {
    const img = btn.closest('li').querySelector('img');
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');
    modalImg.src = img.src;
    modalImg.alt = img.alt;
    modal.removeAttribute('hidden');
    requestAnimationFrame(() => modal.classList.add('show'));
  });
});

document.querySelector('.close-modal').addEventListener('click', () => {
  const modal = document.getElementById('imageModal');
  modal.classList.remove('show');
  setTimeout(() => modal.setAttribute('hidden', ''), 300);
});

document.getElementById('imageModal').addEventListener('click', e => {
  if (e.target === e.currentTarget) {
    const modal = e.currentTarget;
    modal.classList.remove('show');
    setTimeout(() => modal.setAttribute('hidden', ''), 300);
  }
});




