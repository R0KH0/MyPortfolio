import React from "react";
import "../style/home.css"
import profileImage from "../../public/assets/123.png"

const Home = () => {
  return (
    <section id="home" className="home-section">
      <div className="home-content">
        <div className="image-container">
          <div className="image-accent"></div>
            <img src={profileImage} alt="Marwane Rokho" className="profile-image" />
        </div>
        
        <div className="text-container">
          <h2 className="main-title">FULLSTACK DEVELOPER (MERN)</h2>
          <hr className="title-divider" />
          <p className="description">
            Web design meets code.<br/>I bring both together as a MERN stack developer who codes for fun and creativity
          </p>
          <div className="signature">
            Marwane Rohko
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;