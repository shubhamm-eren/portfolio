import Particles, { initParticlesEngine } from "@tsparticles/react";
import { useEffect, useMemo, useState } from "react";
import { loadSlim } from "@tsparticles/slim"; 

const Hero = () => {
    const [init, setInit] = useState(false);
    // this should be run only once per application lifetime
    useEffect(() => {
        initParticlesEngine(async (engine) => {
        // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        //await loadAll(engine);
        //await loadFull(engine);
        await loadSlim(engine);
        //await loadBasic(engine);
        }).then(() => {
        setInit(true);
        });
    }, []);
    const options = useMemo(
        () => ({
            "fullscreen": { 
              "enable": false,
              "z-index":-1
             },
            "particles": {
              "number": {
                "value": 6,
                "density": {
                  "enable": true,
                  "value_area": 800
                }
              },
              "color": {
                "value": "#111111"
              },
              "shape": {
                "type": "polygon",
                "stroke": {
                  "width": 0,
                  "color": "#000"
                },
                "polygon": {
                  "nb_sides": 6
                },
                "image": {
                  "src": "img/github.svg",
                  "width": 100,
                  "height": 100
                }
              },
              "opacity": {
                "value": 0.3,
                "random": true,
                "anim": {
                  "enable": false,
                  "speed": 1,
                  "opacity_min": 0.1,
                  "sync": false
                }
              },
              "size": {
                "value": 160,
                "random": false,
                "anim": {
                  "enable": true,
                  "speed": 10,
                  "size_min": 40,
                  "sync": false
                }
              },
              "line_linked": {
                "enable": false,
                "distance": 200,
                "color": "#ffffff",
                "opacity": 1,
                "width": 2
              },
              "move": {
                "enable": true,
                "speed": 8,
                "direction": "none",
                "random": false,
                "straight": false,
                "out_mode": "out",
                "bounce": false,
                "attract": {
                  "enable": false,
                  "rotateX": 600,
                  "rotateY": 1200
                }
              }
            },
            "interactivity": {
              "detect_on": "canvas",
              "events": {
                "onhover": {
                  "enable": false,
                  "mode": "grab"
                },
                "onclick": {
                  "enable": false,
                  "mode": "push"
                },
                "resize": true
              },
              "modes": {
                "grab": {
                  "distance": 400,
                  "line_linked": {
                    "opacity": 1
                  }
                },
                "bubble": {
                  "distance": 400,
                  "size": 40,
                  "duration": 2,
                  "opacity": 8,
                  "speed": 3
                },
                "repulse": {
                  "distance": 200,
                  "duration": 0.4
                },
                "push": {
                  "particles_nb": 4
                },
                "remove": {
                  "particles_nb": 2
                }
              }
            },
            "retina_detect": true
          }),
        [],
    );
    return(
        <section className="banner">
            <Particles id="cs_particles" options={options} />
            <div className="inner_banner">
                <div className="black_strip">
                    <h3>Web Developer</h3>
                    {/* <h3>Web developer</h3> */}
                </div>
                <div className="animation_text">
                    <h1>
                        <span className="animation_txt_wrp">
                            <span>Its</span>
                            <span>Shubham!</span>
                            <span>Its</span>
                            <span>Shubham!</span>
                        </span>
                    </h1>
                </div>
                <div className="profile_image">
                    <img src="/banner-shubh.png" alt="Profile" />
                </div>
            </div>
        </section>
    )
}

export default Hero;