import React from "react";
import { asset } from "../utils/asset";

const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: "var(--color-secondary)",
        color: "var(--color-white)",
        padding: "2rem 0",
        marginTop: "auto",
        textAlign: "center",
      }}
    >
      <div className="container">
        <p>
          &copy; {new Date().getFullYear()} Vidreres City Council. Tourism
          Project.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
