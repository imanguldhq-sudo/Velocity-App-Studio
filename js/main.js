// Velocity App Studio - Premium Interactive Engine v2.0

document.addEventListener('DOMContentLoaded', () => {
    // 1. Smooth Reveal Animations
    const revealElements = document.querySelectorAll('.reveal');
    
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
    });

    revealElements.forEach(el => revealObserver.observe(el));

    // 2. Navbar Dynamic Background
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.padding = '10px 0';
            header.style.background = 'rgba(255, 255, 255, 0.95)';
            header.style.boxShadow = '0 10px 30px rgba(0,0,0,0.05)';
        } else {
            header.style.padding = '0';
            header.style.background = 'rgba(255, 255, 255, 0.8)';
            header.style.boxShadow = 'none';
        }
    });

    // 3. Button Micro-interactions
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(btn => {
        btn.addEventListener('mousedown', () => {
            btn.style.transform = 'scale(0.96)';
        });
        btn.addEventListener('mouseup', () => {
            btn.style.transform = '';
        });
    });

    // 4. Parallax Effect for Hero Shapes
    window.addEventListener('mousemove', (e) => {
        const shapes = document.querySelectorAll('.shape');
        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;

        shapes.forEach((shape, index) => {
            const speed = (index + 1) * 20;
            shape.style.transform = `translate(${x * speed}px, ${y * speed}px)`;
        });
    });

    // 5. Lazy Loading Images
    const images = document.querySelectorAll('img');
    if ('loading' in HTMLImageElement.prototype) {
        images.forEach(img => {
            img.loading = 'lazy';
        });
    }

    console.log('Velocity App Studio: Premium UI Engine Initialized');
});
