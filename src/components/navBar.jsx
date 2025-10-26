import React, { useState } from "react";
import "../style/navbar.css";

const NavBar = () => {
  const [active, setActive] = useState("#home");

  const links = [
    { href: "home", label: "HOME" },
    { href: "#biography", label: "BIOGRAPHY" },
    { href: "#skills", label: "SKILLS" },
    { href: "#projects", label: "PROJECTS" },
    { href: "#experience", label: "EXPERIENCE" },
    { href: "#contact", label: "CONTACT" },
  ];

  const handleClick = (e, href) => {
    e.preventDefault(); // prevent page reload or jump
    setActive(href);
    window.location.hash = href; // update hash manually (so scroll still works)
  };

  return (
    <aside className="navbar">
      <div className="navbar-header">
        <h1 className="logo-text"><a href="#home">ROKHO</a></h1>
      </div>

      <nav className="navbar-nav">
        <ul>
          {links.map((link) => (
            <li
              key={link.href}
              className={active === link.href ? "active" : ""}
              onClick={(e) => handleClick(e, link.href)}
            >
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="navbar-footer">
        <div className="social-icons">
          <a href="https://www.linkedin.com/in/rokho" target="_blank"><img src="src/assets/linkedin.png" alt="LinkedIn" /></a>
          <a href="https://github.com/R0KH0" target="_blank"><img src="src/assets/github.png" alt="GitHub" /></a>
          <a href="https://www.instagram.com/marwane.rokho?igsh=aXFrOHYybTZmYzlz" target="_blank"><img src="src/assets/instagram.png" alt="Instagram" /></a>
        </div>
        <p className="copyright">
          &copy; 2025 Created by Marwane Rohko
        </p>
      </div>
    </aside>
  );
};

export default NavBar;
