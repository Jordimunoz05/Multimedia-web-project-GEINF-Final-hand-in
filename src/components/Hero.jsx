import React from "react";
import { Link } from "react-router-dom";
import CoatOfArms from "./CoatOfArms";

const Hero = () => {
  return (
    <section
      style={{
        background:
          "url(/media/img/layout/vidreres-2.png) no-repeat center center",
        backgroundSize: "cover",
        padding: "10rem 0", // Increased padding for "enlarged" feel
        textAlign: "center",
        borderBottom: "5px solid var(--color-secondary)",
        position: "relative", // Needed if we add an overlay, though we are doing text box instead
      }}
    >
      <div className="container">
        <CoatOfArms />
        <div
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.85)", // Semi-transparent background for readability
            padding: "2rem",
            borderRadius: "12px",
            maxWidth: "700px",
            margin: "2rem auto 0",
            boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
          }}
        >
          <h2
            style={{
              fontSize: "3rem",
              margin: "0 0 0.5rem",
              color: "var(--color-secondary)",
            }}
          >
            Welcome to Vidreres
          </h2>
          <p style={{ fontSize: "1.2rem", margin: "0 0 2rem", color: "#333" }}>
            Discover our history, our culture, and all the activities we have
            prepared for you.
          </p>
          <Link to="/activities" className="btn">
            Explore Activities
          </Link>

          <div style={{ marginTop: "1.5rem", width: "100%" }}>
            <p
              style={{
                fontSize: "0.9rem",
                marginBottom: "0.5rem",
                color: "#555",
              }}
            >
              Listen to the atmosphere:
            </p>
            <audio controls style={{ width: "100%", borderRadius: "30px" }}>
              <source src="/media/vidreres_sound.mp3" type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
