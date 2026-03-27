import { animate, stagger, spring, inView } from "https://cdn.jsdelivr.net/npm/motion@11.11.13/+esm";

document.addEventListener('DOMContentLoaded', () => {
    
    // Initial Hero Load Animations via Framer Motion
    
    // Advanced Stagger Text Reveal for H1
    animate(
        ".word-split",
        { opacity: [0, 1], y: [40, 0], filter: ['blur(12px)', 'blur(0px)'] },
        { 
            delay: stagger(0.12, { start: 0.1 }), 
            duration: 0.8,
            easing: spring({ stiffness: 100, damping: 12 })
        }
    );

    // Fade in the remaining hero elements
    animate(
        ".motion-in",
        { opacity: [0, 1], y: [30, 0] },
        { 
            delay: stagger(0.15, { start: 0.8 }), 
            duration: 0.8,
            easing: spring({ stiffness: 70, damping: 15 })
        }
    );

    animate(
        ".canvas-reveal",
        { opacity: [0, 1], scale: [0.9, 1] },
        { 
            delay: 0.4,
            duration: 1.5,
            easing: spring({ stiffness: 50, damping: 20 })
        }
    );

    // Scroll Animations
    inView(".motion-scroll", (info) => {
        animate(
            info.target,
            { opacity: [0, 1], y: [40, 0] },
            { 
                duration: 0.6,
                easing: "ease-out" 
            }
        );
    });

});
