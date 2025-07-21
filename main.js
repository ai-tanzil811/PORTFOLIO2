// Character data structure
const characters = [
    {
        id: "omen",
        name: "Omen",
        role: "Controlador",
        roleEng: "CONTROLLER",
        background: "https://images4.alphacoders.com/131/1319447.jpeg",
        portrait: "https://i.namu.wiki/i/6zCYHawLrCQRwVU73XyB-3UnMTkoJ2XnDa5BETMWPv5gT3WTutTZUIOXczvscHmg2GpfnW6jUfqB4RyS9p7ReuLf9OZuDnZDzQptsZtnQdhI06b1GH_inpBLQZqxfwuQEPy9fXMV-eHLh1kmFphdVA.webp",
        icon: "https://gamerhub.gg/images/source/a30b236eb6904c37baff000c8e08a9c9.png",
        description: "A phantom of a memory, Omen hunts in the shadows. He renders enemies blind, teleports across the field, then lets paranoia take hold as his foe scrambles to learn where he might strike next.",
        abilities: [
            {key: "q", icon: "https://titles.trackercdn.com/valorant-api/agents/8e253930-4c05-31dd-1b6c-968525494517/abilities/ability1/displayicon.png"},
            {key: "e", icon: "https://titles.trackercdn.com/valorant-api/agents/8e253930-4c05-31dd-1b6c-968525494517/abilities/ability2/displayicon.png"},
            {key: "c", icon: "https://titles.trackercdn.com/valorant-api/agents/8e253930-4c05-31dd-1b6c-968525494517/abilities/grenade/displayicon.png"},
            {key: "x", icon: "https://titles.trackercdn.com/valorant-api/agents/8e253930-4c05-31dd-1b6c-968525494517/abilities/ultimate/displayicon.png"}
        ],
        displayIcon: "https://titles.trackercdn.com/valorant-api/agents/8e253930-4c05-31dd-1b6c-968525494517/displayicon.png",
        buttonBg: "https://www.yudiz.com/codepen/valorant-characters/button-bg.svg",
        colorClass: "banner-loop-one"
    },
    {
        id: "phoenix",
        name: "Phoenix",
        role: "duelist",
        roleEng: "CONTROLLER",
        background: "https://www.pixground.com/wp-content/uploads/2023/08/Agent-Phoenix-Valorant-4K-Wallpaper-1-1081x608.jpg",
        portrait: "https://trackercdn.com/cdn/tracker.gg/valorant/db/agents/phoenix_portrait.png",
        icon: "https://valorantinfo.gg/wp-content/uploads/2021/10/valorant-spotlight-spray.png",
        description: "Hailing from the U.K., Phoenix's star power shines through in his fighting style, igniting the battlefield with flash and flare. Whether he's got backup or not, he's rushing in to fight on his own terms",
        abilities: [
            {key: "q", icon: "https://titles.trackercdn.com/valorant-api/agents/eb93336a-449b-9c1b-0a54-a891f7921d69/abilities/ability1/displayicon.png"},
            {key: "e", icon: "https://titles.trackercdn.com/valorant-api/agents/eb93336a-449b-9c1b-0a54-a891f7921d69/abilities/ability2/displayicon.png"},
            {key: "c", icon: "https://titles.trackercdn.com/valorant-api/agents/eb93336a-449b-9c1b-0a54-a891f7921d69/abilities/grenade/displayicon.png"},
            {key: "x", icon: "https://titles.trackercdn.com/valorant-api/agents/eb93336a-449b-9c1b-0a54-a891f7921d69/abilities/ultimate/displayicon.png"}
        ],
        displayIcon: "https://titles.trackercdn.com/valorant-api/agents/eb93336a-449b-9c1b-0a54-a891f7921d69/displayicon.png",
        buttonBg: "https://www.yudiz.com/codepen/valorant-characters/button-bg-2.svg",
        colorClass: "banner-loop-second"
    },
    {
        id: "viper",
        name: "VIper",
        role: "Controlador",
        roleEng: "CONTROLLER",
        background: "https://images.hdqwalls.com/wallpapers/viper-valorant-2020-4k-4g.jpg",
        portrait: "https://trackercdn.com/cdn/tracker.gg/valorant/db/agents/viper_portrait.png",
        icon: "https://titles.trackercdn.com/valorant-api/agents/707eab51-4836-f488-046a-cda6bf494859/displayicon.png",
        description: "The American Chemist, Viper deploys an array of poisonous chemical devices to control the battlefield and choke the enemy's vision. If the toxins don't kill her prey, her mindgames surely will..",
        abilities: [
            {key: "q", icon: "https://titles.trackercdn.com/valorant-api/agents/707eab51-4836-f488-046a-cda6bf494859/abilities/ability1/displayicon.png"},
            {key: "e", icon: "https://titles.trackercdn.com/valorant-api/agents/707eab51-4836-f488-046a-cda6bf494859/abilities/ability2/displayicon.png"},
            {key: "c", icon: "https://titles.trackercdn.com/valorant-api/agents/707eab51-4836-f488-046a-cda6bf494859/abilities/grenade/displayicon.png"},
            {key: "x", icon: "https://titles.trackercdn.com/valorant-api/agents/707eab51-4836-f488-046a-cda6bf494859/abilities/ultimate/displayicon.png"}
        ],
        displayIcon: "https://titles.trackercdn.com/valorant-api/agents/707eab51-4836-f488-046a-cda6bf494859/displayicon.png",
        buttonBg: "https://www.yudiz.com/codepen/valorant-characters/button-bg-3.svg",
        colorClass: "banner-loop-third"
    }
];

jQuery(document).ready(function() {
    // Generate HTML for characters
    generateCharactersHTML();
    
    // Initialize parallax effect
    initParallax();
    
    // Initialize sliders
    initSliders();
    
    // Custom Mouse Pointer 
    initCustomCursor();
    
    // Make website responsive to touch events
    initTouchEvents();
    
    // Add resize event listener for responsive adjustments
    window.addEventListener('resize', handleResize);
    
    // Initial resize check
    handleResize();
    
    // Ensure rain effect is generated for each slide
    jQuery('.banner-section-inner').on('afterChange', function() {
        // If rain.js defines a global function, call it here
        if (typeof generateRain === 'function') {
            generateRain();
        }
    });
});

function generateCharactersHTML() {
    // Clear existing content
    jQuery('.banner-section-inner').empty();
    jQuery('.controller-right-icons-inner').empty();
    
    // Generate HTML for each character
    characters.forEach(character => {
        // Create main character slide
        const characterSlide = `
        <div class="banner-section-loop ${character.colorClass}" style="background-image: url('${character.background}')">
          <div class="banner-left-vertical-main">
            <h6>BIND PERSONALIZADA</h6>
            <img src="${character.icon}" class="gl-logo-img"/>  
          </div>
          <div class="banner-main-img">
            <div class="main-img scene">
              <img src="${character.portrait}" alt="${character.name}" class="layer img-responsive" data-depth="0.2" />
            </div>
          </div>
          <div class="banner-content-main">
            <h5>${character.role}</h5>
            <h1>${character.name}</h1>
            <div class="controller-box-section">
              <div class="controller-box-img">
                <img src="${character.icon}" alt="controller-img">
              </div>
              <div class="controller-box-content">
                <h5>${character.roleEng}</h5>
                <p>${character.description}</p>
              </div>
            </div>
            <div class="controller-icons-main">
              ${character.abilities.map(ability => `
                <div class="controller-icons-inner">
                  <div class="controller-img">
                    <img src="${ability.icon}" alt="">
                  </div>
                  <p>${ability.key}</p>
                </div>
              `).join('')}
            </div>
            <div class="view-contract-btn-main cursor-scale" style="background-image: url('${character.buttonBg}')">
              <a href="#" class="view-contract-btn">view contract</a>
            </div>
          </div>
        </div>
        `;
        
        // Add character slide to the container
        jQuery('.banner-section-inner').append(characterSlide);
        
        // Add character icon to the sidebar
        jQuery('.controller-right-icons-inner').append(`
            <div>
                <img src="${character.displayIcon}" alt="${character.name}" />
            </div>
        `);
    });
}

function initParallax() {
    var scene = document.querySelectorAll(".scene");
    scene.forEach(function(el) {
        var parallax = new Parallax(el);
    });
}

function initSliders() {
    jQuery('.banner-section-inner').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        fade: true,
        speed: 800,
        asNavFor: '.controller-right-icons-inner',
        touchThreshold: 100,
        adaptiveHeight: true,
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    dots: true,
                    adaptiveHeight: true
                }
            }
        ]
    });
    
    jQuery('.controller-right-icons-inner').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.banner-section-inner',
        arrows: false,
        dots: false,
        focusOnSelect: true,
        variableWidth: true,
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 3,
                    centerMode: true
                }
            }
        ]
    });
    
    jQuery('.banner-section-inner').on('afterChange', function(event, slick, currentSlide) {
        updateHeaderClass();
        animateCharacter();
    });
    
    // Initial update
    updateHeaderClass();
}

function updateHeaderClass() {
    if (jQuery(".banner-loop-one").hasClass('slick-current')) {
        jQuery(".header-section-main").removeClass("header-section-orange header-section-green").addClass("header-section-blue");
    } else if (jQuery(".banner-loop-second").hasClass('slick-current')) {
        jQuery(".header-section-main").removeClass("header-section-blue header-section-green").addClass("header-section-orange");
    } else if (jQuery(".banner-loop-third").hasClass('slick-current')) {
        jQuery(".header-section-main").removeClass("header-section-blue header-section-orange").addClass("header-section-green");
    }
}

function animateCharacter() {
    jQuery(".banner-main-img .main-img").removeClass("character-animation");
    setTimeout(function() {
        jQuery(".banner-main-img .main-img").addClass("character-animation");
    }, 50);
}

function initCustomCursor() {
    let cursor = document.querySelector('.cursor');
    let cursorScale = document.querySelectorAll('.cursor-scale');
    let mouseX = 0;
    let mouseY = 0;

    gsap.to({}, 0.016, {
        repeat: -1,
        onRepeat: function() {
            gsap.set(cursor, {
                css: {
                    left: mouseX,
                    top: mouseY,
                }
            });
        }
    });
    
    window.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });
    
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

function initTouchEvents() {
    // Add swipe support for mobile
    jQuery('.banner-section-inner').on('swipe', function(event, slick, direction) {
        if (direction === 'left') {
            jQuery(this).slick('slickNext');
        } else {
            jQuery(this).slick('slickPrev');
        }
    });
}

function handleResize() {
    const width = window.innerWidth;
    
    // Toggle classes or adjust elements based on screen size
    if (width <= 767) {
        jQuery('.banner-section-inner').slick('slickSetOption', 'dots', true, true);
    } else {
        jQuery('.banner-section-inner').slick('slickSetOption', 'dots', false, true);
    }
    
    // Reinitialize parallax on resize
    setTimeout(initParallax, 100);
}