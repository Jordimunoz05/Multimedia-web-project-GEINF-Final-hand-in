import React from "react";
import { asset } from "../utils/asset";

const Calendar = () => {
  const events = [
    {
      id: 1,
      date: "12 DEC",
      title: "Start of Christmas Lights",
      location: "Town Square",
      time: "18:00",
      image: "/media/img/calendar/LLUMSNADALVIDRERES.jpg",
    },
    {
      id: 2,
      date: "15 DEC",
      title: "Traditional Market",
      location: "Old Town",
      time: "10:00 - 20:00",
      image: "/media/img/calendar/MERCATRADICIONAL.jpeg",
    },
    {
      id: 3,
      date: "21 DEC",
      title: "Winter Solstice Concert",
      location: "City Hall",
      time: "21:00",
      image: "/media/img/calendar/CONCERTNADALVIDRERES.jpg",
    },
    {
      id: 4,
      date: "05 JAN",
      title: "Three Kings Parade",
      location: "Main Streets",
      time: "17:00",
      image: "/media/img/calendar/REISVIDRERES.jpg",
    },
  ];

  return (
    <div className="container" style={{ padding: "3rem 0" }}>
      <h1 style={{ marginBottom: "2rem" }}>Calendar</h1>
      <div style={{ display: "grid", gap: "1.5rem" }}>
        {events.map((event) => (
          <div
            key={event.id}
            style={{
              display: "flex",
              backgroundColor: "white",
              border: "1px solid #eee",
              borderRadius: "8px",
              overflow: "hidden",
              boxShadow: "0 2px 4px rgba(0,0,0,0.05)",
              alignItems: "stretch",
            }}
          >
            {/* Date Box */}
            <div
              style={{
                backgroundColor: "var(--color-secondary)",
                color: "var(--color-primary)",
                padding: "1.5rem",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                minWidth: "100px",
              }}
            >
              <span
                style={{
                  fontSize: "1.5rem",
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                {event.date}
              </span>
            </div>

            {/* Image */}
            <div style={{ width: "150px", flexShrink: 0 }}>
              <img
                src={asset(event.image)}
                alt={event.title}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>

            {/* Info */}
            <div
              style={{
                padding: "1.5rem",
                flex: 1,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <h3 style={{ margin: "0 0 0.5rem", fontSize: "1.3rem" }}>
                {event.title}
              </h3>
              <p style={{ margin: 0, color: "#666" }}>
                📍 {event.location} &nbsp;|&nbsp; 🕒 {event.time}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calendar;
