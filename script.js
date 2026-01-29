// ===================================
// Theme Management
// ===================================

class ThemeManager {
    constructor() {
        this.theme = localStorage.getItem('theme') || 'light';
        this.init();
    }

    init() {
        this.setTheme(this.theme);
        this.bindEvents();
    }

    setTheme(theme) {
        this.theme = theme;
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    }

    toggleTheme() {
        const newTheme = this.theme === 'light' ? 'dark' : 'light';
        this.setTheme(newTheme);
    }

    bindEvents() {
        const themeToggle = document.getElementById('themeToggle');
        const themeToggleMobile = document.getElementById('themeToggleMobile');
        
        if (themeToggle) {
            themeToggle.addEventListener('click', () => this.toggleTheme());
        }
        
        if (themeToggleMobile) {
            themeToggleMobile.addEventListener('click', () => {
                this.toggleTheme();
                this.updateMobileSwitchLabel();
            });
        }
        
        // Initialize mobile switch label
        this.updateMobileSwitchLabel();
    }
    
    updateMobileSwitchLabel() {
        const modeLabel = document.querySelector('.theme-switch-mode');
        if (modeLabel) {
            modeLabel.textContent = this.theme === 'light' ? 'Light' : 'Dark';
        }
    }
}

// ===================================
// Navigation Management
// ===================================

class NavigationManager {
    constructor() {
        this.navbar = document.getElementById('navbar');
        this.mobileToggle = document.getElementById('mobileToggle');
        this.navMenu = document.getElementById('navMenu');
        this.navLinks = document.querySelectorAll('.nav-link');
        this.init();
    }

    init() {
        this.handleScroll();
        this.bindEvents();
        this.handleActiveLink();
    }

    handleScroll() {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                this.navbar.classList.add('scrolled');
            } else {
                this.navbar.classList.remove('scrolled');
            }
        });
    }

    bindEvents() {
        // Mobile menu toggle
        if (this.mobileToggle) {
            this.mobileToggle.addEventListener('click', () => {
                this.navMenu.classList.toggle('active');
                this.animateHamburger();
            });
        }

        // Close mobile menu when clicking on links
        this.navLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (window.innerWidth <= 768) {
                    this.navMenu.classList.remove('active');
                    this.animateHamburger(); // Reset hamburger icon
                }
            });
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (window.innerWidth <= 768 && 
                this.navMenu.classList.contains('active') &&
                !this.navMenu.contains(e.target) && 
                !this.mobileToggle.contains(e.target)) {
                this.navMenu.classList.remove('active');
                this.animateHamburger(); // Reset hamburger icon
            }
        });

        // Smooth scroll for anchor links
        this.navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                const href = link.getAttribute('href');
                if (href.startsWith('#')) {
                    e.preventDefault();
                    const target = document.querySelector(href);
                    if (target) {
                        const offset = 80;
                        const targetPosition = target.offsetTop - offset;
                        window.scrollTo({
                            top: targetPosition,
                            behavior: 'smooth'
                        });
                    }
                }
            });
        });
    }

    animateHamburger() {
        const spans = this.mobileToggle.querySelectorAll('span');
        if (this.navMenu.classList.contains('active')) {
            spans[0].style.transform = 'rotate(45deg) translateY(8px)';
            spans[1].style.opacity = '0';
            spans[2].style.transform = 'rotate(-45deg) translateY(-8px)';
        } else {
            spans[0].style.transform = '';
            spans[1].style.opacity = '1';
            spans[2].style.transform = '';
        }
    }

    handleActiveLink() {
        const sections = document.querySelectorAll('section[id]');
        
        window.addEventListener('scroll', () => {
            const scrollY = window.pageYOffset;
            
            sections.forEach(section => {
                const sectionHeight = section.offsetHeight;
                const sectionTop = section.offsetTop - 100;
                const sectionId = section.getAttribute('id');
                
                if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                    this.navLinks.forEach(link => {
                        link.classList.remove('active');
                        if (link.getAttribute('href') === `#${sectionId}`) {
                            link.classList.add('active');
                        }
                    });
                }
            });
        });
    }
}

// ===================================
// Image Hover Effects
// ===================================

class ImageAnimator {
    constructor() {
        this.images = document.querySelectorAll('.hoverable-image');
        this.init();
    }

    init() {
        this.images.forEach(img => {
            // Add parallax effect on mouse move
            const parent = img.closest('.project-image, .project-mini-image, .project-card-image');
            if (parent) {
                parent.addEventListener('mousemove', (e) => this.handleMouseMove(e, img));
                parent.addEventListener('mouseleave', () => this.handleMouseLeave(img));
            }
        });
    }

    handleMouseMove(e, img) {
        const rect = img.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const deltaX = (x - centerX) / centerX;
        const deltaY = (y - centerY) / centerY;
        
        img.style.transform = `scale(1.1) translate(${deltaX * 10}px, ${deltaY * 10}px)`;
    }

    handleMouseLeave(img) {
        img.style.transform = 'scale(1) translate(0, 0)';
    }
}

// ===================================
// Scroll Animations
// ===================================

class ScrollAnimator {
    constructor() {
        this.init();
    }

    init() {
        // Initialize AOS (Animate On Scroll)
        if (typeof AOS !== 'undefined') {
            const isMobile = window.innerWidth <= 768;
            AOS.init({
                duration: isMobile ? 600 : 1000,  // Faster animations on mobile
                once: false,
                offset: isMobile ? 50 : 100,  // Trigger animations sooner on mobile
                easing: 'ease-out-cubic',
                mirror: true,
                delay: 0,  // Remove global delay
                disable: false  // Keep animations enabled on mobile
            });
        }

        // Custom scroll animations
        this.observeElements();
    }

    observeElements() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });

        // Observe all cards
        const cards = document.querySelectorAll('.project-card, .project-mini, .project-card-mini');
        cards.forEach(card => observer.observe(card));
    }
}

// ===================================
// Cursor Effects
// ===================================

class CursorEffect {
    constructor() {
        this.cursor = null;
        this.cursorFollower = null;
        this.init();
    }

    init() {
        // Only add custom cursor on desktop
        if (window.innerWidth > 768) {
            this.createCursor();
            this.bindEvents();
        }
    }

    createCursor() {
        // Main cursor dot
        this.cursor = document.createElement('div');
        this.cursor.className = 'custom-cursor';
        this.cursor.style.cssText = `
            position: fixed;
            width: 10px;
            height: 10px;
            border-radius: 50%;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            pointer-events: none;
            z-index: 9999;
            transition: transform 0.1s ease;
            opacity: 0;
        `;
        document.body.appendChild(this.cursor);

        // Cursor follower
        this.cursorFollower = document.createElement('div');
        this.cursorFollower.className = 'cursor-follower';
        this.cursorFollower.style.cssText = `
            position: fixed;
            width: 40px;
            height: 40px;
            border-radius: 50%;
            border: 2px solid rgba(102, 126, 234, 0.3);
            pointer-events: none;
            z-index: 9998;
            transition: transform 0.2s ease;
            opacity: 0;
        `;
        document.body.appendChild(this.cursorFollower);
    }

    bindEvents() {
        let mouseX = 0, mouseY = 0;
        let followerX = 0, followerY = 0;

        // Track mouse position
        document.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
            
            this.cursor.style.opacity = '1';
            this.cursorFollower.style.opacity = '1';
            this.cursor.style.transform = `translate(${mouseX - 5}px, ${mouseY - 5}px)`;
        });

        // Smooth follower animation
        const animateFollower = () => {
            const dx = mouseX - followerX;
            const dy = mouseY - followerY;
            
            followerX += dx * 0.1;
            followerY += dy * 0.1;
            
            this.cursorFollower.style.transform = `translate(${followerX - 20}px, ${followerY - 20}px)`;
            requestAnimationFrame(animateFollower);
        };
        animateFollower();

        // Scale up on hover over interactive elements
        const interactiveElements = document.querySelectorAll('a, button, .hoverable-image, .project-card');
        interactiveElements.forEach(element => {
            element.addEventListener('mouseenter', () => {
                this.cursor.style.transform = `translate(${mouseX - 5}px, ${mouseY - 5}px) scale(1.5)`;
                this.cursorFollower.style.transform = `translate(${followerX - 20}px, ${followerY - 20}px) scale(1.5)`;
            });
            
            element.addEventListener('mouseleave', () => {
                this.cursor.style.transform = `translate(${mouseX - 5}px, ${mouseY - 5}px) scale(1)`;
                this.cursorFollower.style.transform = `translate(${followerX - 20}px, ${followerY - 20}px) scale(1)`;
            });
        });
    }
}

// ===================================
// Loading Animation
// ===================================

class LoadingAnimation {
    constructor() {
        this.init();
    }

    init() {
        // Create loading overlay
        const loader = document.createElement('div');
        loader.className = 'loading-overlay';
        loader.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 10000;
            transition: opacity 0.5s ease;
        `;

        const spinner = document.createElement('div');
        spinner.style.cssText = `
            width: 60px;
            height: 60px;
            border: 4px solid rgba(255, 255, 255, 0.3);
            border-top-color: white;
            border-radius: 50%;
            animation: spin 1s linear infinite;
        `;

        loader.appendChild(spinner);
        document.body.appendChild(loader);

        // Add spin animation
        const style = document.createElement('style');
        style.textContent = `
            @keyframes spin {
                to { transform: rotate(360deg); }
            }
        `;
        document.head.appendChild(style);

        // Remove loader when page is loaded
        window.addEventListener('load', () => {
            setTimeout(() => {
                loader.style.opacity = '0';
                setTimeout(() => loader.remove(), 500);
            }, 500);
        });
    }
}

// ===================================
// Parallax Effect
// ===================================

class ParallaxEffect {
    constructor() {
        this.init();
    }

    init() {
        const parallaxElements = document.querySelectorAll('.hero-bg');
        
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            parallaxElements.forEach(element => {
                const speed = 0.5;
                element.style.transform = `translateY(${scrolled * speed}px)`;
            });
        });
    }
}

// ===================================
// Tech Tag Animations
// ===================================

class TechTagAnimator {
    constructor() {
        this.tags = document.querySelectorAll('.tech-tag, .tech-stack-mini span');
        this.init();
    }

    init() {
        this.tags.forEach((tag, index) => {
            // Stagger animation on load
            tag.style.opacity = '0';
            tag.style.transform = 'translateY(20px)';
            
            setTimeout(() => {
                tag.style.transition = 'all 0.5s ease';
                tag.style.opacity = '1';
                tag.style.transform = 'translateY(0)';
            }, index * 50);

            // Pulse animation on hover
            tag.addEventListener('mouseenter', () => {
                tag.style.animation = 'pulse 0.5s ease';
            });
            
            tag.addEventListener('animationend', () => {
                tag.style.animation = '';
            });
        });

        // Add pulse animation
        const style = document.createElement('style');
        style.textContent = `
            @keyframes pulse {
                0%, 100% { transform: scale(1); }
                50% { transform: scale(1.1); }
            }
        `;
        document.head.appendChild(style);
    }
}

// ===================================
// Card Reveal Animation
// ===================================

class CardRevealAnimator {
    constructor() {
        this.cards = document.querySelectorAll('.project-card, .project-mini, .project-card-mini');
        this.init();
    }

    init() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                    }, index * 100);
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px'
        });

        this.cards.forEach(card => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(50px)';
            card.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
            observer.observe(card);
        });
    }
}

// ===================================
// Gradient Animation
// ===================================

class GradientAnimator {
    constructor() {
        this.init();
    }

    init() {
        const gradientElements = document.querySelectorAll('.hero-title, .section-title');
        
        gradientElements.forEach(element => {
            element.style.backgroundSize = '200% 200%';
            element.style.animation = 'gradientMove 3s ease infinite';
        });

        const style = document.createElement('style');
        style.textContent = `
            @keyframes gradientMove {
                0%, 100% { background-position: 0% 50%; }
                50% { background-position: 100% 50%; }
            }
        `;
        document.head.appendChild(style);
    }
}

// ===================================
// Initialize Everything
// ===================================

document.addEventListener('DOMContentLoaded', () => {
    // Initialize all features
    new ThemeManager();
    new NavigationManager();
    new ImageAnimator();
    new ScrollAnimator();
    new LoadingAnimation();
    new ParallaxEffect();
    new TechTagAnimator();
    new CardRevealAnimator();
    new GradientAnimator();
    
    // Initialize cursor effect only on desktop
    if (window.innerWidth > 768) {
        new CursorEffect();
    }
    
    console.log('✨ Aslase Portfolio Website Loaded Successfully!');
});

// ===================================
// Performance Optimization
// ===================================

// Enhanced lazy load images with eager loading for above-the-fold content
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    observer.unobserve(img);
                }
            }
        });
    }, {
        // Load images slightly before they enter viewport
        rootMargin: '100px 0px',
        threshold: 0.01
    });

    // Observe all lazy-loadable images
    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
    
    // For mobile: Preload all images more aggressively and reduce AOS delays
    if (window.innerWidth <= 768) {
        // Preload images immediately on mobile
        const preloadMobileImages = () => {
            // Get all images in the first few sections
            const allImages = document.querySelectorAll('img');
            allImages.forEach((img, index) => {
                // Preload first 20 images immediately
                if (index < 20) {
                    const src = img.getAttribute('src') || img.dataset.src;
                    if (src && !img.complete) {
                        const preloadImg = new Image();
                        preloadImg.src = src;
                    }
                }
            });
        };
        
        // Reduce AOS delays for mobile
        const reduceMobileAOSDelays = () => {
            document.querySelectorAll('[data-aos-delay]').forEach(el => {
                const delay = el.getAttribute('data-aos-delay');
                if (delay && parseInt(delay) > 0) {
                    el.setAttribute('data-aos-delay', '0');
                }
            });
        };
        
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => {
                preloadMobileImages();
                reduceMobileAOSDelays();
            });
        } else {
            preloadMobileImages();
            reduceMobileAOSDelays();
        }
    }
} else {
    // Fallback for browsers without IntersectionObserver
    document.querySelectorAll('img[data-src]').forEach(img => {
        img.src = img.dataset.src;
        img.removeAttribute('data-src');
    });
}

// Smooth scroll polyfill for older browsers
if (!('scrollBehavior' in document.documentElement.style)) {
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/smoothscroll-polyfill@0.4.4/dist/smoothscroll.min.js';
    document.head.appendChild(script);
}

// Debounce function for performance
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Throttle function for scroll events
function throttle(func, limit) {
    let inThrottle;
    return function(...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// Handle window resize
window.addEventListener('resize', debounce(() => {
    // Reinitialize cursor effect on resize
    const existingCursor = document.querySelector('.custom-cursor');
    if (window.innerWidth > 768 && !existingCursor) {
        new CursorEffect();
    } else if (window.innerWidth <= 768 && existingCursor) {
        existingCursor.remove();
        document.querySelector('.cursor-follower')?.remove();
    }
}, 250));

// Add ripple effect to buttons
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function(e) {
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.5);
            left: ${x}px;
            top: ${y}px;
            transform: scale(0);
            animation: ripple 0.6s ease-out;
            pointer-events: none;
        `;
        
        this.style.position = 'relative';
        this.style.overflow = 'hidden';
        this.appendChild(ripple);
        
        setTimeout(() => ripple.remove(), 600);
    });
});

// Add ripple animation
const rippleStyle = document.createElement('style');
rippleStyle.textContent = `
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(rippleStyle);

// ===================================
// Project Card Glow Effect
// ===================================

// Apply to all project card types including tech-showcase
document.querySelectorAll('.project-card, .project-card-mini, .project-mini, .tech-showcase').forEach(card => {
    let isHovering = false;
    let currentX = 50;
    let currentY = 50;
    let targetX = 50;
    let targetY = 50;
    let animationFrame = null;
    
    card.addEventListener('mouseenter', function(e) {
        isHovering = true;
        this.classList.add('glow-active');
        const rect = this.getBoundingClientRect();
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        currentX = targetX = (mouseX / rect.width) * 100;
        currentY = targetY = (mouseY / rect.height) * 100;
        updateGlowPosition.call(this);
        animate.call(this);
    });
    
    card.addEventListener('mousemove', function(e) {
        if (isHovering) {
            const rect = this.getBoundingClientRect();
            const mouseX = e.clientX - rect.left;
            const mouseY = e.clientY - rect.top;
            targetX = (mouseX / rect.width) * 100;
            targetY = (mouseY / rect.height) * 100;
        }
    });
    
    card.addEventListener('mouseleave', function() {
        isHovering = false;
        this.classList.remove('glow-active');
        if (animationFrame) {
            cancelAnimationFrame(animationFrame);
            animationFrame = null;
        }
    });
    
    function animate() {
        if (!isHovering) return;
        
        // Smooth interpolation (lerp)
        const smoothness = 0.15;
        currentX += (targetX - currentX) * smoothness;
        currentY += (targetY - currentY) * smoothness;
        
        updateGlowPosition.call(this);
        
        animationFrame = requestAnimationFrame(() => animate.call(this));
    }
    
    function updateGlowPosition() {
        this.style.setProperty('--glow-x', `${currentX}%`);
        this.style.setProperty('--glow-y', `${currentY}%`);
    }
});
