import React, { useState, useEffect } from 'react';
// import gsap from "gsap";

const About = () =>{
    const [activeIndex, setActiveIndex] = useState(0);
    useEffect(() => {
        const intervalId = setInterval(() => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % 4); // Switch between 0, 1, 2
        }, 2000); 
        // Clear interval on component unmount to prevent memory leaks
        return () => clearInterval(intervalId);
    }, []);
      
    return(
        <section className="about_sec">
            <div className="container">
                <div className="about_main">
                    <div className="about_txt">
                        <span className="head-tip">Hello</span>
                        <h2>
                            I’m Shubham a 
                            <span className="cd-words-wrapper">
                                <b className={activeIndex === 0 ? 'cd_active' : ''}>Web Developer.</b>
                                <b className={activeIndex === 1 ? 'cd_active' : ''}>Freelancer.</b>
                                <b className={activeIndex === 2 ? 'cd_active' : ''}>Web Designer.</b>
                                <b className={activeIndex === 3 ? 'cd_active' : ''}>Wordpress Expert.</b>
                            </span>
                        </h2>
                        <p>As a skilled Web Developer, I craft innovative, responsive websites tailored to your needs. Let's collaborate to build a powerful online presence and drive your business forward!</p>
                        <a href="#" className="btn">View Portfolio</a>
                    </div>
                    <div className="about_img">
                        <h3 className="txt_image">Web Developer</h3>
                        <img className="img_abt" src="/shubham-coat.webp" alt="Profile" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;

