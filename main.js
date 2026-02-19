document.addEventListener('DOMContentLoaded', () => {

const themeCheckbox = document.getElementById('themeCheckbox');
const body = document.body;

// Apply saved theme on load
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
  body.classList.add('dark-theme');
  themeCheckbox.checked = true;
}

// Toggle theme on checkbox change
themeCheckbox.addEventListener('change', () => {
  if (themeCheckbox.checked) {
    body.classList.add('dark-theme');
    localStorage.setItem('theme', 'dark');
  } else {
    body.classList.remove('dark-theme');
    localStorage.setItem('theme', 'light');
  }
});

        
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

// restart animation

document.querySelector('.profile-logo').addEventListener('click', function() {
    const container = document.querySelector('.subtitle-container');
    
    // Remove and re-add the container to restart animations
    const clone = container.cloneNode(true);
    container.parentNode.replaceChild(clone, container);
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




