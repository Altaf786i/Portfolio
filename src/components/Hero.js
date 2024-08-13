import React from 'react'
import "./image.jpg"
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
function Hero() {
  return (
    <section className="home" id="home">
      <div className="home-content">
        <h1>Hi, It's <span>Altaf</span></h1>
        <h3 className="text-animation">I'm a <span> </span></h3>
        <p>
I'm a passionate Software Engineer specializing in crafting efficient and innovative solutions. With expertise in C++, Web Development, Java Spring Boot, and the MERN stack, I bring your vision to life through cutting-edge technology and seamless user experiences. Let's collaborate to build robust, scalable, and user-friendly applications that drive your success.
Ready to take your project to the next level? Let's get started!
        </p>

        <div className="social-icons">
      <a href="https://www.linkedin.com/in/altaf-rehman-351847310/" target="_blank" rel="noopener noreferrer">
        <LinkedInIcon fontSize='large'/>
      </a>
      <a href="https://github.com/Altaf786i" target="_blank" rel="noopener noreferrer">
        <GitHubIcon fontSize='large'/>
      </a>
      <a href="https://www.instagram.com/ill_taf/" target="_blank" rel="noopener noreferrer">
        <InstagramIcon fontSize='large'/>
      </a>
      <a href="https://www.facebook.com/arien.altaf.1" target="_blank" rel="noopener noreferrer">
        <FacebookIcon fontSize='large'/>
      </a>
    </div>

        <div className="btn-group">
          <a href="/myresume.pdf" className="btn">Download CV</a>
          <a href="#contact" className="btn">Contact</a>
        </div>
      </div>

      <div className="home-img">
        <img src="image.jpg" alt="" />
      </div>
      
    </section>
  )
}

export default Hero