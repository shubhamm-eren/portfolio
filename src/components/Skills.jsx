const Skills = () => {
    const skills = [
        { name: 'HTML5', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
        { name: 'CSS3', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
        { name: 'JavaScript', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
        { name: 'PHP', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg' },
        { name: 'MySQL', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
        { name: 'WordPress', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg' },
        { name: 'WooCommerce', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/woocommerce/woocommerce-original.svg' },  // Updated WooCommerce Icon
        { name: 'Elementor', img: 'https://img.icons8.com/color/96/web-design.png' },  // Updated Elementor Icon
        { name: 'Custom Themes', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg' },
        { name: 'Bootstrap', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg' },
        { name: 'Git', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
        { name: 'VS Code', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg' },
        { name: 'PageSpeed Optimization', img: 'https://cdn.worldvectorlogo.com/logos/google-pagespeed-insights-icon-2021-.svg' },
        { name: 'Core Web Vitals', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg' },  // Add Core Web Vitals icon (Google)
        { name: 'FileZilla', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/filezilla/filezilla-original.svg' },
        { name: 'Figma (Design to Code)', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
    ];    

    return (
      <section className="skills_sec">
        <h2>Skills & Tools</h2>
        <div className="skills_grid">
          {skills.map((skill, index) => (
            <div className="skill_card" key={index}>
              <img src={skill.img} alt={`${skill.name} logo`} />
              <h3>{skill.name}</h3>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default Skills;
  