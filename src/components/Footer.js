import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
function Footer() {
  return (
    <footer className="footer">
      <div className="social">
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

        <ul className="list">
          <li> <a href="/">FAQ</a> </li>
          <li> <a href="#services">Services</a> </li>
          <li> <a href="#home">About Me</a> </li>
          <li> <a href="#contact">Contact</a> </li>
        </ul>
        <p className="copyright">
          Altaf Rehman | All Rights Reserved.
        </p>
    </footer>
  )
}

export default Footer