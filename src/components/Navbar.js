import React, { useState } from "react";
import MenuIcon from '@mui/icons-material/Menu';

function Navbar() {
  const [active, setActive] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleClick = (section) => {
    setActive(section);
    setIsMobileMenuOpen(false); // Close the menu when a link is clicked
  };

  return (
    <header className="header">
      <a href="/home" className="logo">
        Altaf<span>Rehman</span>
      </a>
      <MenuIcon fontSize="large"
        className="bx bx-menu"
        id="menu-icon"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      />
      <nav className={`navbar ${isMobileMenuOpen ? "active" : ""}`}>
        <a
          href="#home"
          className={active === "home" ? "active" : ""}
          onClick={() => handleClick("home")}
        >
          Home
        </a>
        <a
          href="#projects"
          className={active === "projects" ? "active" : ""}
          onClick={() => handleClick("projects")}
        >
          Projects
        </a>
        <a
          href="#services"
          className={active === "services" ? "active" : ""}
          onClick={() => handleClick("services")}
        >
          Services
        </a>
        <a
          href="#testimonials"
          className={active === "testimonials" ? "active" : ""}
          onClick={() => handleClick("testimonials")}
        >
          Testimonials
        </a>
        <a
          href="#contact"
          className={active === "contact" ? "active" : ""}
          onClick={() => handleClick("contact")}
        >
          Contact
        </a>
      </nav>
    </header>
  );
}

export default Navbar;
