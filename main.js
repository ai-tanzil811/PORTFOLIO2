jQuery(document).ready(function () {
    
    initParallax();
    
    
    initCustomCursor();
    
    
    setTimeout(function() {
        const mainImg = document.querySelector(".main-img");
        if (mainImg) {
            mainImg.classList.add("character-animation");
        }
    }, 500);
    
    
    initModals();
    
    
    initSmoothScroll();
    initScrollEffects();
    
    
    window.addEventListener('resize', handleResize);
    
    
    handleResize();
    
    
    initMobileMenu();
    initEmailPopup();
});

function initMobileMenu() {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const headerMenu = document.querySelector('.header-menu');
    
    if (!mobileMenuToggle || !headerMenu) {
        console.warn('Mobile menu elements not found');
        return;
    }
    
    mobileMenuToggle.addEventListener('click', function() {
        this.classList.toggle('active');
        headerMenu.classList.toggle('active');
        
        
        if (headerMenu.classList.contains('active')) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    });
    
    
    const menuItems = headerMenu.querySelectorAll('a');
    if (menuItems.length > 0) {
        menuItems.forEach(item => {
            item.addEventListener('click', function() {
                mobileMenuToggle.classList.remove('active');
                headerMenu.classList.remove('active');
                document.body.style.overflow = '';
            });
        });
    }
}

function initParallax() {
    try {
        var scene = document.querySelectorAll(".scene");
        if (scene.length > 0 && typeof Parallax !== 'undefined') {
            scene.forEach(function(el) {
                var parallax = new Parallax(el);
            });
        }
    } catch (error) {
        console.warn('Parallax initialization failed:', error);
    }
}

function initCustomCursor() {
    let cursor = document.querySelector('.cursor');
    let cursorScale = document.querySelectorAll('.cursor-scale');
    let mouseX = 0;
    let mouseY = 0;

    
    if (typeof gsap === 'undefined' || !cursor) {
        return;
    }

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
    
    if (cursorScale.length > 0) {
        cursorScale.forEach(link => {
            link.addEventListener('mousemove', () => {
                if (cursor) {
                    cursor.classList.add('grow');
                    if (link.classList.contains('small')) {
                        cursor.classList.remove('grow');
                        cursor.classList.add('grow-small');
                    }
                }
            });
            
            link.addEventListener('mouseleave', () => {
                if (cursor) {
                    cursor.classList.remove('grow');
                    cursor.classList.remove('grow-small');
                }
            });
        });
    }
}



function initSmoothScroll() {
    
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
    const header = document.querySelector('.header-section-main');
    if (!header) {
        console.warn('Header element not found for scroll effects');
        return;
    }

    window.addEventListener('scroll', function() {
        const scrollPosition = window.scrollY;
        
        if (scrollPosition > 100) {
            header.style.background = 'rgba(13, 2, 33, 0.95)';
            header.style.boxShadow = '0 0 20px rgba(0, 255, 65, 0.5)';
        } else {
            header.style.background = 'rgba(13, 2, 33, 0.8)';
            header.style.boxShadow = '0 0 20px rgba(0, 255, 65, 0.3)';
        }
        
        
        const sections = document.querySelectorAll('section[id]');
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 150;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                const activeLink = document.querySelector(`.header-menu ul li a[href="#${sectionId}"]`);
                if (activeLink && activeLink.parentElement) {
                    activeLink.parentElement.classList.add('active');
                }
            } else {
                const inactiveLink = document.querySelector(`.header-menu ul li a[href="#${sectionId}"]`);
                if (inactiveLink && inactiveLink.parentElement) {
                    inactiveLink.parentElement.classList.remove('active');
                }
            }
        });
    });
}


function initModals() {
    
    document.querySelectorAll('[data-modal]').forEach(trigger => {
        trigger.addEventListener('click', function(e) {
            e.preventDefault();
            const modalId = this.getAttribute('data-modal');
            const modal = document.getElementById(modalId);
            if (modal) openModal(modal);
        });
    });
    
    
    document.querySelectorAll('.modal-close').forEach(closeBtn => {
        closeBtn.addEventListener('click', function() {
            const modal = this.closest('.modal-overlay');
            closeModal(modal);
        });
    });
    
    
    document.querySelectorAll('.modal-overlay').forEach(overlay => {
        overlay.addEventListener('click', function(e) {
            if (e.target === this) closeModal(this);
        });
    });
    
    
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            const activeModal = document.querySelector('.modal-overlay.active');
            if (activeModal) closeModal(activeModal);
        }
    });
}

function openModal(modal) {
    if (!modal) {
        console.warn('Modal element not found');
        return;
    }
    
    const modalContent = modal.querySelector('.modal-content');
    if (modalContent) {
        modalContent.scrollTop = 0;
    }
    
    
    modal.classList.add('active');
    
    
    document.body.style.overflow = 'hidden';
}

function closeModal(modal) {
    if (!modal) {
        console.warn('Modal element not found');
        return;
    }
    
    
    modal.classList.remove('active');
    
    
    document.body.style.overflow = '';
}


function handleResize() {
    
    setTimeout(initParallax, 100);
    
    
    if (window.innerWidth > 768) {
        const headerMenu = document.querySelector('.header-menu');
        const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
        
        if (headerMenu && headerMenu.classList.contains('active')) {
            headerMenu.classList.remove('active');
            if (mobileMenuToggle) {
                mobileMenuToggle.classList.remove('active');
            }
            document.body.style.overflow = '';
        }
    }
}


document.addEventListener('DOMContentLoaded', function() {
    
    setTimeout(function() {
        initModals();
    }, 100);
});

function initEmailPopup() {
    const emailBox = document.querySelector('.email-box');
    const emailPopup = emailBox ? emailBox.querySelector('.email-popup') : null;
    if (!emailBox || !emailPopup) return;

    emailBox.addEventListener('mouseenter', function () {
        emailPopup.style.opacity = '1';
        emailPopup.style.visibility = 'visible';
    });
    emailBox.addEventListener('mouseleave', function () {
        emailPopup.style.opacity = '0';
        emailPopup.style.visibility = 'hidden';
    });
}