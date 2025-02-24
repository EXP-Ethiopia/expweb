// Initialize Lucide icons
lucide.createIcons();

// Custom cursor
const cursor = document.querySelector('.cursor');
const cursorFollower = document.querySelector('.cursor-follower');

document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
    
    cursorFollower.style.left = e.clientX - 8 + 'px';
    cursorFollower.style.top = e.clientY - 8 + 'px';
});

// Hover effect for buttons and links
document.querySelectorAll('a, button').forEach(el => {
    el.addEventListener('mouseenter', () => {
        cursorFollower.style.transform = 'scale(1.5)';
        cursorFollower.style.background = 'rgba(99, 102, 241, 0.2)';
    });

    el.addEventListener('mouseleave', () => {
        cursorFollower.style.transform = 'scale(1)';
        cursorFollower.style.background = 'rgba(99, 102, 241, 0.3)';
    });
});

// Mobile menu toggle
const menuBtn = document.getElementById('menuBtn');
const navMenu = document.getElementById('navMenu');

menuBtn.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    const icon = menuBtn.querySelector('i');
    icon.setAttribute('data-lucide', 
        navMenu.classList.contains('active') ? 'x' : 'menu'
    );
    lucide.createIcons();
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            // Close mobile menu if open
            navMenu.classList.remove('active');
            menuBtn.querySelector('i').setAttribute('data-lucide', 'menu');
            lucide.createIcons();
        }
    });
});

// Expertise slider clone
const expertiseTrack = document.querySelector('.expertise-track');
const expertiseItems = document.querySelectorAll('.expertise-item');

// Clone items for infinite scroll
expertiseItems.forEach(item => {
    const clone = item.cloneNode(true);
    expertiseTrack.appendChild(clone);
});

// Form handling
const joinForm = document.getElementById('joinForm');

joinForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Animate button
    const submitBtn = joinForm.querySelector('button[type="submit"]');
    submitBtn.innerHTML = 'Processing...';
    submitBtn.disabled = true;
    
    // Simulate form submission
    setTimeout(() => {
        submitBtn.innerHTML = 'Application Submitted!';
        submitBtn.style.background = '#22c55e';
        
        // Reset form
        setTimeout(() => {
            joinForm.reset();
            submitBtn.innerHTML = 'Submit Application';
            submitBtn.style.background = '';
            submitBtn.disabled = false;
        }, 2000);
    }, 1500);
});

// Glitch effect for headings
const glitchText = document.querySelector('.glitch');
const originalText = glitchText.textContent;

function createGlitchEffect() {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let iterations = 0;
    const maxIterations = 3;
    
    const interval = setInterval(() => {
        glitchText.textContent = glitchText.textContent
            .split('')
            .map((char, index) => {
                if (index < iterations) {
                    return originalText[index];
                }
                return chars[Math.floor(Math.random() * chars.length)];
            })
            .join('');
            
        iterations += 1/3;
        
        if (iterations >= maxIterations) {
            clearInterval(interval);
            glitchText.textContent = originalText;
        }
    }, 30);
}

// Trigger glitch effect on scroll
let glitchTriggered = false;
window.addEventListener('scroll', () => {
    if (!glitchTriggered && window.scrollY > 100) {
        createGlitchEffect();
        glitchTriggered = true;
        
        // Reset trigger after delay
        setTimeout(() => {
            glitchTriggered = false;
        }, 3000);
    }
});