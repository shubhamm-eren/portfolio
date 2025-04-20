import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Portfolio = () => {
    const sectionRef = useRef(null);
    const triggerRef = useRef(null);
    const [isMobile, setIsMobile] = useState(false);

    // Function to check if the device is mobile
    const checkIfMobile = () => {
        setIsMobile(window.innerWidth <= 768); // 768px is commonly used as the mobile breakpoint
    };

    useEffect(() => {
        // Check if mobile initially
        checkIfMobile();

        // Update on window resize
        window.addEventListener("resize", checkIfMobile);

        // Only run GSAP animation if it's not a mobile device
        if (!isMobile) {
            const ctx = gsap.context(() => {
                const panels = sectionRef.current;
            
                gsap.fromTo(
                    panels,
                    { x: 0 },
                    {
                        x: `-${panels.scrollWidth - window.innerWidth}`,
                        ease: "none",
                        scrollTrigger: {
                            trigger: triggerRef.current,
                            start: "top top",
                            end: () => `+=${panels.scrollWidth - window.innerWidth}`,
                            scrub: 1.5,
                            pin: true,
                            anticipatePin: 1,
                            markers: false,
                        },
                    }
                );
            }, triggerRef);

            return () => ctx.revert(); // cleanup on unmount
        }
    }, [isMobile]); // Run effect when isMobile changes

    return (
        <section className="main_portfolio" id="panels" ref={triggerRef}>
            <div className="main_portfolio_txt" id="portfolio">
                <h2>Portfolio</h2>
            </div>
            <div id="panels-container" ref={sectionRef}>
                <div className="panel">
                    <img src="/portfolio/img3.webp" alt="Portfolio1" />
                </div>
                <div className="panel">
                    <img src="/portfolio/img1.webp" alt="Portfolio2" />
                </div>
                <div className="panel">
                    <img src="/portfolio/img4.webp" alt="Portfolio3" />
                </div>
                <div className="panel">
                    <img src="/portfolio/img2.webp" alt="Portfolio4" />
                </div>
                <div className="panel">
                    <img src="/portfolio/img5.webp" alt="Portfolio5" />
                </div>
                <div className="panel">
                    <img src="/portfolio/img6.webp" alt="Portfolio6" />
                </div>
                <div className="panel">
                    <img src="/portfolio/img7.webp" alt="Portfolio7" />
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
