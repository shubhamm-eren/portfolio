import React, { useEffect,useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Portfolio = () => {
    const sectionRef = useRef(null);
    const triggerRef = useRef(null);

    gsap.registerPlugin(ScrollTrigger);

    useEffect(() => {
        // Set timeout for 3 seconds
        const timeoutId = setTimeout(() => {
          // This code will run after 3 seconds
          console.log('Starting animation after 3 seconds');
    
          // Your GSAP animation
          const pin = gsap.fromTo(
            sectionRef.current,
            {
              translateX: 0,
            },
            {
              translateX: `-${sectionRef.current.offsetWidth - window.innerWidth}`,
              ease: 'none',
              duration: 1,
              scrollTrigger: {
                trigger: triggerRef.current,
                start: 'top top',
                end: '2000 top',
                scrub: 0.6,
                pin: true,
              },
            }
          );
    
          // Cleanup the GSAP animation when the component unmounts or before starting a new one
          return () => {
            pin.kill();
          };
        }, 200); // Delay by 3000ms (3 seconds)

        return () => clearTimeout(timeoutId);
    }, []);
    
    return(
        <section className="main_portfolio" id="panels" ref={triggerRef}>
            <div className="main_portfolio_txt">
                <h2>Portfolio</h2>
            </div>
            <div id="panels-container"  ref={sectionRef}>
                <div className="panel">
                    <img src="/screenshot.png" alt="Portfolio1"/>
                </div>
                <div className="panel">
                    <img src="/screenshot.png" alt="Portfolio1"/>
                </div>
                <div className="panel">
                    <img src="/screenshot.png" alt="Portfolio1"/>
                </div>
                <div className="panel">
                    <img src="/screenshot.png" alt="Portfolio1"/>
                </div>
                <div className="panel">
                    <img src="/screenshot.png" alt="Portfolio1"/>
                </div>
                <div className="panel">
                    <img src="/screenshot.png" alt="Portfolio1"/>
                </div>
                <div className="panel">
                    <img src="/screenshot.png" alt="Portfolio1"/>
                </div>
            </div>
        </section>
    )
}

export default Portfolio;