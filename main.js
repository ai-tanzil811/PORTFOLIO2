jQuery(document).ready(function () {
    // Initialize parallax effect for profile image
    initParallax();
    
    // Initialize custom cursor
    initCustomCursor();
    
    // Initialize smooth scroll functionality
    initSmoothScroll();
    
    // Initialize scroll effects
    initScrollEffects();
    
    // Add animation to main image
    setTimeout(function() {
        const mainImg = document.querySelector(".main-img");
        if (mainImg) {
            mainImg.classList.add("character-animation");
        }
    }, 500);
    
    // Init modal functionality
    initModals();
    
    // Add resize listener
    window.addEventListener('resize', handleResize);
    
    // Initial resize check
    handleResize();
    
    // Mobile menu toggle
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const headerMenu = document.querySelector('.header-menu');
    
    if (mobileMenuToggle && headerMenu) {
        mobileMenuToggle.addEventListener('click', function() {
            this.classList.toggle('active');
            headerMenu.classList.toggle('active');
            
            // Toggle body scroll
            if (headerMenu.classList.contains('active')) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = '';
            }
        });
        
        // Close menu when clicking menu items on mobile
        const menuItems = headerMenu.querySelectorAll('a');
        menuItems.forEach(item => {
            item.addEventListener('click', function() {
                mobileMenuToggle.classList.remove('active');
                headerMenu.classList.remove('active');
                document.body.style.overflow = '';
            });
        });
    }
});

function initParallax() {
    // Check if Parallax constructor is available
    if (typeof Parallax === 'undefined') {
        return;
    }
    
    var scene = document.querySelectorAll(".scene");
    if (scene.length > 0) {
        scene.forEach(function(el) {
            var parallax = new Parallax(el);
        });
    }
}

function initCustomCursor() {
    let cursor = document.querySelector('.cursor');
    let cursorScale = document.querySelectorAll('.cursor-scale');
    let mouseX = 0;
    let mouseY = 0;

    gsap.to({}, 0.016, {
        repeat: -1,
        onRepeat: function() {
            if (cursor) {
                gsap.set(cursor, {
                    css: {
                        left: mouseX,
                        top: mouseY,
                    }
                });
            }
        }
    });
    
    window.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });
    
    if (cursorScale.length > 0 && cursor) {
        cursorScale.forEach(link => {
            link.addEventListener('mousemove', () => {
                cursor.classList.add('grow');
                if (link.classList.contains('small')) {
                    cursor.classList.remove('grow');
                    cursor.classList.add('grow-small');
                }
            });
            
            link.addEventListener('mouseleave', () => {
                cursor.classList.remove('grow');
                cursor.classList.remove('grow-small');
            });
        });
    }
}



function initSmoothScroll() {
    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 100,
                    behavior: 'smooth'
                });
            }
        });
    });
}

function initScrollEffects() {
    window.addEventListener('scroll', function() {
        const scrollPosition = window.scrollY;
        const header = document.querySelector('.header-section-main');
        
        if (header) {
            if (scrollPosition > 100) {
                header.style.background = 'rgba(13, 2, 33, 0.95)';
                header.style.boxShadow = '0 0 20px rgba(0, 255, 65, 0.5)';
            } else {
                header.style.background = 'rgba(13, 2, 33, 0.8)';
                header.style.boxShadow = '0 0 20px rgba(0, 255, 65, 0.3)';
            }
        }
        
        // Check which section is visible and highlight nav item
        const sections = document.querySelectorAll('section[id]');
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 150;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                document.querySelector(`.header-menu ul li a[href="#${sectionId}"]`)?.parentElement?.classList.add('active');
            } else {
                document.querySelector(`.header-menu ul li a[href="#${sectionId}"]`)?.parentElement?.classList.remove('active');
            }
        });
    });
}

// Fix for modal initialization
function initModals() {
    // Open modal when clicking on menu items
    document.querySelectorAll('[data-modal]').forEach(trigger => {
        trigger.addEventListener('click', function(e) {
            e.preventDefault();
            const modalId = this.getAttribute('data-modal');
            const modal = document.getElementById(modalId);
            if (modal) {
                openModal(modal);
            }
        });
    });
    
    // Close modal when clicking on close button
    document.querySelectorAll('.modal-close').forEach(closeBtn => {
        closeBtn.addEventListener('click', function() {
            const modal = this.closest('.modal-overlay');
            closeModal(modal);
        });
    });
    
    // Close modal when clicking outside modal content
    document.querySelectorAll('.modal-overlay').forEach(overlay => {
        overlay.addEventListener('click', function(e) {
            if (e.target === this) {
                closeModal(this);
            }
        });
    });
    
    // Close modal with ESC key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            const activeModal = document.querySelector('.modal-overlay.active');
            if (activeModal) {
                closeModal(activeModal);
            }
        }
    });
}

function openModal(modal) {
    if (modal) {
        // Reset scroll position
        const modalContent = modal.querySelector('.modal-content');
        if (modalContent) {
            modalContent.scrollTop = 0;
        }
        
        // Add active class to show modal with animation
        modal.classList.add('active');
        
        // Prevent body scrolling
        document.body.style.overflow = 'hidden';
    }
}

function closeModal(modal) {
    if (modal) {
        // Remove active class to hide modal with animation
        modal.classList.remove('active');
        
        // Re-enable body scrolling
        document.body.style.overflow = '';
    }
}

// Debounce utility function
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

// Enhanced resize handler for better responsiveness
function handleResize() {
    // Debounced parallax re-initialization
    const debouncedParallaxInit = debounce(initParallax, 250);
    debouncedParallaxInit();
    
    // Reset mobile menu state on window resize (especially orientation change)
    if (window.innerWidth > 768) {
        const headerMenu = document.querySelector('.header-menu');
        const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
        
        if (headerMenu && headerMenu.classList.contains('active')) {
            headerMenu.classList.remove('active');
            if (mobileMenuToggle) mobileMenuToggle.classList.remove('active');
            document.body.style.overflow = '';
        }
    }
}

// Add this at the bottom of the file to ensure all elements are properly initialized
document.addEventListener('DOMContentLoaded', function() {
    // Re-initialize modals after a slight delay to ensure all elements are ready
    setTimeout(function() {
        initModals();
    }, 100);
});