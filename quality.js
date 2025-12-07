// Lightbox functionality
const galleryImages = document.querySelectorAll('.gallery img');
const lightbox = document.createElement('div');
lightbox.id = 'lightbox';
lightbox.innerHTML = `
    <span class="close">&times;</span>
    <img class="lightbox-image" src="" alt="">
    <div class="lightbox-caption"></div>
`;
document.body.appendChild(lightbox);

const lightboxImage = lightbox.querySelector('.lightbox-image');
const lightboxCaption = lightbox.querySelector('.lightbox-caption');
const closeBtn = lightbox.querySelector('.close');

galleryImages.forEach((image, index) => {
    image.addEventListener('click', () => {
        lightboxImage.src = image.src;
        const caption = image.nextElementSibling.querySelector('.caption').textContent;
        lightboxCaption.textContent = caption;
        lightbox.style.display = 'flex';
    });
});

closeBtn.addEventListener('click', () => {
    lightbox.style.display = 'none';
});

lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
        lightbox.style.display = 'none';
    }
});

// Confetti animation
function createConfetti() {
    const confetti = document.createElement('div');
    confetti.className = 'confetti';
    confetti.style.left = Math.random() * 100 + 'vw';
    confetti.style.animationDelay = Math.random() * 2 + 's';
    confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    document.body.appendChild(confetti);

    setTimeout(() => {
        confetti.remove();
    }, 3000);
}

setInterval(createConfetti, 200);

// Color changing title
const title = document.querySelector('.hero-title');
const colors = ['#FF69B4', '#87CEEB', '#98FB98', '#F0E68C', '#DDA0DD', '#FFA07A'];
let colorIndex = 0;

setInterval(() => {
    title.style.color = colors[colorIndex];
    colorIndex = (colorIndex + 1) % colors.length;
}, 1000);

// Floating hearts animation
function createHeart() {
    const heart = document.createElement('div');
    heart.className = 'floating-heart';
    heart.innerHTML = '❤️';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = Math.random() * 3 + 2 + 's';
    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 5000);
}

setInterval(createHeart, 1000);

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Add sparkle effect on hover
document.querySelectorAll('.photo-item').forEach(item => {
    item.addEventListener('mouseenter', () => {
        for (let i = 0; i < 5; i++) {
            const sparkle = document.createElement('div');
            sparkle.className = 'sparkle';
            sparkle.style.left = Math.random() * 100 + '%';
            sparkle.style.top = Math.random() * 100 + '%';
            sparkle.style.animationDelay = Math.random() * 0.5 + 's';
            item.appendChild(sparkle);

            setTimeout(() => {
                sparkle.remove();
            }, 1000);
        }
    });
});

// Wish form submission
const wishForm = document.querySelector('.wish-form');
wishForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = wishForm.querySelector('input').value;
    const message = wishForm.querySelector('textarea').value;

    if (name && message) {
        const newWish = document.createElement('div');
        newWish.className = 'wish-card';
        newWish.innerHTML = `
            <p>"${message}"</p>
            <span>- ${name}</span>
        `;

        document.querySelector('.wishes-container').appendChild(newWish);

        // Clear form
        wishForm.reset();

        // Show success message
        showNotification('Wish sent successfully! 🎉');

        // Animate the new wish
        setTimeout(() => {
            newWish.style.animation = 'slideInUp 0.5s ease-out';
        }, 100);
    } else {
        showNotification('Please fill in all fields! 😊', 'error');
    }
});

// Notification system
function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    document.body.appendChild(notification);

    setTimeout(() => {
        notification.style.opacity = '1';
        notification.style.transform = 'translateY(0)';
    }, 100);

    setTimeout(() => {
        notification.style.opacity = '0';
        notification.style.transform = 'translateY(-20px)';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 5px 20px rgba(0,0,0,0.15)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = '0 2px 20px rgba(0,0,0,0.1)';
    }
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.querySelectorAll('.wish-card, .photo-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(50px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Typing effect for hero subtitle
const heroSubtitle = document.querySelector('.hero-subtitle');
const originalText = heroSubtitle.textContent;
heroSubtitle.textContent = '';

let i = 0;
function typeWriter() {
    if (i < originalText.length) {
        heroSubtitle.textContent += originalText.charAt(i);
        i++;
        setTimeout(typeWriter, 50);
    }
}

setTimeout(typeWriter, 2000);

// Particle background effect
function createParticle() {
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.style.left = Math.random() * 100 + 'vw';
    particle.style.animationDuration = Math.random() * 10 + 10 + 's';
    particle.style.animationDelay = Math.random() * 5 + 's';
    document.querySelector('.hero').appendChild(particle);

    setTimeout(() => {
        particle.remove();
    }, 15000);
}

setInterval(createParticle, 2000);

// Add CSS for particles and notifications
const style = document.createElement('style');
style.textContent = `
    .particle {
        position: absolute;
        width: 2px;
        height: 2px;
        background: rgba(255, 255, 255, 0.5);
        border-radius: 50%;
        animation: floatParticle 15s linear infinite;
        pointer-events: none;
    }

    @keyframes floatParticle {
        from { transform: translateY(100vh) rotate(0deg); }
        to { transform: translateY(-100vh) rotate(360deg); }
    }

    .notification {
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 1rem 2rem;
        border-radius: 10px;
        color: white;
        font-weight: 600;
        z-index: 3000;
        opacity: 0;
        transform: translateY(-20px);
        transition: all 0.3s ease;
        box-shadow: 0 5px 15px rgba(0,0,0,0.2);
    }

    .notification.success {
        background: linear-gradient(135deg, #4CAF50, #45a049);
    }

    .notification.error {
        background: linear-gradient(135deg, #f44336, #d32f2f);
    }
`;
document.head.appendChild(style);

// Birthday Modal Functionality
document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('birthday-modal');
    const closeBtn = document.querySelector('.close-modal');
    const modalBtn = document.querySelector('.modal-btn');

    // Show modal on page load
    modal.style.display = 'flex';

    // Close modal when clicking the close button
    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    // Close modal when clicking the "Let's Celebrate!" button
    modalBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    // Close modal when clicking outside the modal content
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
});
