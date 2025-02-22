// Mobile menu functionality
const menuBtn = document.getElementById('menuBtn');
const navLinks = document.getElementById('navLinks');

menuBtn.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
  if (!menuBtn.contains(e.target) && !navLinks.contains(e.target)) {
    navLinks.classList.remove('active');
  }
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth'
      });
      // Close mobile menu after clicking a link
      navLinks.classList.remove('active');
    }
  });
});

// Intersection Observer for fade-in animations
const observerOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fade-in');
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Observe all sections for animation
document.querySelectorAll('section').forEach(section => {
  observer.observe(section);
});

// Dynamic content loading
const loadFeatures = async () => {
  const features = document.getElementById('features');
  if (features) {
    // Features section content will be added here
  }
};

const loadProjects = async () => {
  const projects = document.getElementById('projects');
  if (projects) {
    // Projects section content will be added here
  }
};

const loadStats = async () => {
  const stats = document.getElementById('stats');
  if (stats) {
    // Stats section content will be added here
  }
};

const loadTestimonials = async () => {
  const testimonials = document.getElementById('testimonials');
  if (testimonials) {
    // Testimonials section content will be added here
  }
};

// Initialize all dynamic content
const initializeContent = () => {
  loadFeatures();
  loadProjects();
  loadStats();
  loadTestimonials();
};

// Run initialization when DOM is loaded
document.addEventListener('DOMContentLoaded', initializeContent);