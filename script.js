import { animate, stagger, spring, inView } from "https://cdn.jsdelivr.net/npm/motion@11.11.13/+esm";

document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Text Reveal Animations for Hero Title
    // We animate each word in the split-title
    animate(
        ".split-title .word",
        { opacity: [0, 1], y: [60, 0], filter: ['blur(10px)', 'blur(0px)'] },
        { 
            delay: stagger(0.15, { start: 0.1 }), 
            duration: 0.8,
            easing: spring({ stiffness: 100, damping: 15 })
        }
    );

    // 2. Fade in main hero elements and sidebar
    // Select elements that should float in when the page loads
    const initialElements = document.querySelectorAll("aside, .hero-desc, .stats-row, .colored-card");
    animate(
        initialElements,
        { opacity: [0, 1], y: [40, 0] },
        { 
            delay: stagger(0.1, { start: 0.5 }), 
            duration: 1,
            easing: spring({ stiffness: 70, damping: 14 })
        }
    );

    // 3. Scroll Reveal for List Sections
    // When a list section comes into view, its heading and children stagger in
    document.querySelectorAll(".list-section").forEach((section) => {
        inView(section, (info) => {
            // Animate heading first
            animate(
                section.querySelector(".section-heading"),
                { opacity: [0, 1], x: [-30, 0] },
                { duration: 0.6, easing: "ease-out" }
            );

            // Animate list items consecutively
            const items = section.querySelectorAll(".list-item");
            if (items.length > 0) {
                animate(
                    items,
                    { opacity: [0, 1], y: [20, 0] },
                    { 
                        delay: stagger(0.1, { start: 0.2 }),
                        duration: 0.5,
                        easing: "ease-out" 
                    }
                );
            }
        });
    });

});
