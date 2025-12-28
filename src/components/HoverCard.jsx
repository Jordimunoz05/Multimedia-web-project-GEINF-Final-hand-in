import React, { useState } from "react";
import { Link } from "react-router-dom";
import Modal from "./Modal";
import { asset } from "../utils/asset";

const HoverCard = ({
  image,
  title,
  subtitle,
  boldText,
  description,
  linkTo = "/activities",
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const imgSrc = asset(image);

  return (
    <>
      <div
        className="hover-card"
        onClick={() => setIsModalOpen(true)}
        style={{
          position: "relative",
          height: "300px",
          overflow: "hidden",
          borderRadius: "8px",
          boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
          cursor: "pointer",
          transition: "transform 0.3s ease",
        }}
      >
        <img
          src={imageSrc}
          alt={title}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />

        {/* Title Overlay */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            background: "linear-gradient(to top, rgba(0,0,0,0.8), transparent)",
            padding: "1.5rem 1rem 1rem",
            color: "white",
          }}
        >
          <h3
            style={{
              margin: 0,
              fontSize: "1.3rem",
              textShadow: "1px 1px 2px black",
            }}
          >
            {title}
          </h3>
          <small style={{ color: "var(--color-primary)" }}>
            Click to learn more
          </small>
        </div>
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <img
          src={imageSrc}
          alt={title}
          style={{
            width: "100%",
            height: "200px",
            objectFit: "cover",
            borderRadius: "4px",
            marginBottom: "1rem",
          }}
        />
        <h2
          style={{
            color: "var(--color-secondary)",
            marginTop: 0,
            marginBottom: "0.5rem",
          }}
        >
          {title}
        </h2>
        {subtitle && (
          <h4
            style={{ color: "#666", margin: "0 0 1rem", fontStyle: "italic" }}
          >
            {subtitle}
          </h4>
        )}

        <div style={{ fontSize: "1rem", lineHeight: 1.6, color: "#333" }}>
          {boldText && (
            <p>
              <strong>{boldText}</strong>
            </p>
          )}
          <p>{description}</p>
        </div>

        <div style={{ marginTop: "2rem", textAlign: "right" }}>
          <Link
            to={linkTo}
            className="btn"
            onClick={() => setIsModalOpen(false)}
            style={{ display: "inline-block" }}
          >
            Go to Details
          </Link>
        </div>
      </Modal>
    </>
  );
};

export default HoverCard;
