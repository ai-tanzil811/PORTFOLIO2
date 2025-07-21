/**
 * Dynamic Rain Effect Generator
 */
(function() {
    // Configuration
    const config = {
        raindrops: 100,
        minDelay: 1,
        maxDelay: 19,
        minDuration: 5,
        maxDuration: 10,
        minOpacity: 0.3,
        maxOpacity: 0.6
    };
    
    // Generate rain HTML
    function generateRain() {
        // Check if container exists, if not create it
        let rainContainer = document.querySelector('.rain-container');
        if (!rainContainer) {
            rainContainer = document.createElement('div');
            rainContainer.className = 'rain-container';
            document.querySelector('.banner-section-main').prepend(rainContainer);
        }
        
        // Clear existing raindrops
        rainContainer.innerHTML = '';
        
        // Create stylesheet for rain animations
        let styleSheet = document.createElement('style');
        document.head.appendChild(styleSheet);
        
        // Generate raindrops
        for (let i = 1; i <= config.raindrops; i++) {
            const raindrop = document.createElement('i');
            raindrop.className = 'rain';
            
            // Dynamic rain animation properties
            const left = Math.floor(Math.random() * 100);
            const top = Math.floor(Math.random() * 50) + 50;
            const opacity = (Math.random() * (config.maxOpacity - config.minOpacity) + config.minOpacity).toFixed(2);
            const delay = Math.floor(Math.random() * (config.maxDelay - config.minDelay)) + config.minDelay;
            const duration = Math.floor(Math.random() * (config.maxDuration - config.minDuration)) + config.minDuration;
            
            // Create unique animation name
            const animationName = `rain-drop-${i}-${Date.now()}`;
            
            // Add keyframe rule to stylesheet
            const keyframeRule = `
                @keyframes ${animationName} {
                    from { left: ${left}%; opacity: ${opacity}; top: -${top}%; }
                    to { opacity: 0; top: ${100 + top}%; }
                }
            `;
            styleSheet.sheet.insertRule(keyframeRule, 0);
            
            // Apply animation and styles to raindrop
            raindrop.style.cssText = `
                animation: ${animationName} ${duration}s ${delay}s infinite;
                left: ${left}%;
                opacity: ${opacity};
                top: -${top}%;
                background: white;
                background: linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, #ffffff 100%);
                height: 50px;
                position: absolute;
                width: 3px;
                z-index: 9998;
            `;
            
            // Add raindrop to container
            rainContainer.appendChild(raindrop);
        }
    }
    
    // Initialize when DOM is ready
    function init() {
        generateRain();
        
        // Regenerate rain on window resize for responsive behavior
        window.addEventListener('resize', generateRain);
    }
    
    // Check if DOM is already loaded
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init(); // DOM already loaded, run the initialization
    }
})();
