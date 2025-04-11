const Hero = () => {
    return(
        <section className="banner">
            <div className="inner_banner">
                <div className="black_strip">
                    <h3>Wordpress Expert</h3>
                    {/* <h3>Web developer</h3> */}
                </div>
                <div className="animation_text">
                    <h1>
                        <span className="animation_txt_wrp">
                            <span>Shubham</span>
                            <span>Kumar</span>
                            <span>Shubham</span>
                            <span>Kumar</span>
                        </span>
                    </h1>
                </div>
                <div className="profile_image">
                    <img src="/shubham-coat-2.webp" alt="Profile" />
                </div>
            </div>
        </section>
    )
}

export default Hero;