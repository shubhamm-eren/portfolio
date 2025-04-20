import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Experience = () => {
  gsap.registerPlugin(ScrollTrigger);

  const listRef = useRef(null);
  const fillRef = useRef(null);
  const triggerRef = useRef(null);
  const containerRef = useRef(null);

  const [isMobile, setIsMobile] = useState(false);

  // Function to check screen width and update the state
  const checkIfMobile = () => {
    setIsMobile(window.innerWidth <= 768); // 768px is typically the breakpoint for tablets/mobile
  };

  useEffect(() => {
    checkIfMobile();
    window.addEventListener("resize", checkIfMobile); // Listen to window resize events

    // Run GSAP animations if not mobile
    if (!isMobile) {
      const ctx = gsap.context(() => {
        const list = listRef.current;
        const fill = fillRef.current;
        const slides = gsap.utils.toArray(containerRef.current.querySelectorAll('.exp'));
        const listItems = gsap.utils.toArray(list.querySelectorAll('li'));

        const totalSteps = listItems.length;
        const initialFill = 1 / totalSteps;

        // 🟢 Set initial fill (first step pre-filled)
        gsap.set(fill, {
          scaleY: initialFill,
          transformOrigin: "top left",
        });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: triggerRef.current,
            start: "top top",
            end: `+=${totalSteps * 100}%`,
            pin: true,
            scrub: true,
            // markers: true, // Turn off in production
          },
        });

        // Timeline animations for experience steps
        listItems.forEach((item, i) => {
          const prevItem = listItems[i - 1];

          if (prevItem) {
            tl.set(item, { color: "#09d3df" }, 0.5 * i)
              .to(slides[i], { autoAlpha: 1, duration: 0.2 }, "<")
              .set(prevItem, { color: "#fffce1" }, "<")
              .to(slides[i - 1], { autoAlpha: 0, duration: 0.2 }, "<");
          } else {
            // Initial active state for the first item and slide
            gsap.set(item, { color: "#09d3df" });
            gsap.set(slides[i], { autoAlpha: 1 });
          }
        });

        // Animate `.fill` based on scroll progress after first step
        ScrollTrigger.create({
          trigger: triggerRef.current,
          start: "top top",
          end: `+=${totalSteps * 100}%`,
          scrub: true,
          onUpdate: (self) => {
            const progress = self.progress;
            const totalFill = initialFill + progress * (1 - initialFill);
            gsap.to(fill, {
              scaleY: totalFill,
              transformOrigin: "top left",
              ease: "none",
              overwrite: true,
            });
          },
        });
      }, triggerRef); // scoped GSAP

      return () => ctx.revert(); // cleanup on unmount
    }
  }, [isMobile]); // Re-run only if screen size changes

  return (
    <section className="exp_sec pin-section" ref={triggerRef}>
      <h2>Experience</h2>
      <div className="container exp_wrap">
        <ul className="list" ref={listRef}>
          <li>2022</li>
          <li>2024</li>
          <li>2025</li>
          <div className="fill" ref={fillRef}></div>
        </ul>
        <div className="exp_main" ref={containerRef}>
          <div className="exp exp_3">
            <h3>Frontend Trainee with a Freelancer</h3>
            <p>2022 – 2023</p>
            <ul>
              <li>Learned web dev basics by working with a freelancer.</li>
              <li>Technologies: HTML, CSS, jQuery, PHP, MySQL.</li>
              <li>Built custom websites and landing pages.</li>
              <li>Used WordPress with Elementor and Divi.</li>
              <li>Understood clean layout and structure principles.</li>
              <li>Great foundational phase of the journey.</li>
            </ul>
          </div>
          <div className="exp exp_2">
            <h3>WordPress Developer – Flymedia Technology</h3>
            <p>2023 – 2024</p>
            <ul>
              <li>Worked as a CMS WordPress Developer for 4 months.</li>
              <li>Created sites based on client references and branding.</li>
              <li>Used Elementor for pixel-perfect designs.</li>
              <li>Integrated WooCommerce for e-commerce solutions.</li>
              <li>Handled SEO, plugins, and responsive design.</li>
              <li>Gained client-oriented and design-focused skills.</li>
            </ul>
          </div>
          <div className="exp exp_1">
            <h3>Web Developer – Technocrats Horizons</h3>
            <p>2024 – Present</p>
            <ul>
              <li>Working in a dynamic IT environment with constant learning opportunities.</li>
              <li>Designing & developing websites focusing on UI/UX and performance.</li>
              <li>Optimizing for Google PageSpeed.</li>
              <li>WooCommerce customization.</li>
              <li>Debugging, refining layouts, and improving interactions.</li>
              <li>Collaborating with designers and backend developers.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
