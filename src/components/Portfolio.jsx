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
                scrub: 1.5,
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
                    <img src="/portfolio/img3.webp" alt="Portfolio1"/>
                    {/* <div className="panel_txt">
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    </div> */}
                </div>
                <div className="panel">
                    <img src="/portfolio/img1.webp" alt="Portfolio1"/>
                    {/* <div className="panel_txt">
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    </div> */}
                </div>
                <div className="panel">
                    <img src="/portfolio/img4.webp" alt="Portfolio1"/>
                    {/* <div className="panel_txt">
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    </div> */}
                </div>
                <div className="panel">
                    <img src="/portfolio/img2.webp" alt="Portfolio1"/>
                    {/* <div className="panel_txt">
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    </div> */}
                </div>
                <div className="panel">
                    <img src="/portfolio/img5.webp" alt="Portfolio1"/>
                    {/* <div className="panel_txt">
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    </div> */}
                </div>
                <div className="panel">
                    <img src="/portfolio/img6.webp" alt="Portfolio1"/>
                    {/* <div className="panel_txt">
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    </div> */}
                </div>
                <div className="panel">
                    <img src="/portfolio/img7.webp" alt="Portfolio1"/>
                    {/* <div className="panel_txt">
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    </div> */}
                </div>
            </div>
        </section>
    )
}

export default Portfolio;