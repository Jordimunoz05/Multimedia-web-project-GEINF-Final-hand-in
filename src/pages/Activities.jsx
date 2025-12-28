import React, { useState } from "react";
import CartModal from "../components/CartModal";
import { FaShoppingCart, FaMapMarkedAlt } from "react-icons/fa";
import { asset } from "../utils/asset";

const Activities = ({ cart, addToCart, removeFromCart, decreaseQuantity }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const activities = [
    // Paid Activities
    {
      id: 1,
      title: "Guided Tour: Torre d'en Llobet",
      price: 5,
      type: "paid",
      image: "/media/img/historic/torre-llobet.jpg",
      description:
        "A guided historical tour inside the fortified farmhouse and its defense tower.",
    },
    {
      id: 2,
      title: "Bunker History Walk",
      price: 8,
      type: "paid",
      image: "/media/img/historic/BUNQUER_BATLLOSERA.JPG",
      description:
        "Explore the Civil War bunkers and air raid shelters with a historian.",
    },
    {
      id: 3,
      title: "Jazz Festival Day Pass",
      price: 15,
      type: "paid",
      image: "/media/img/fairs/FESTIVAL-JAZZ.jpg",
      description:
        "Access to all concerts and workshops for one day of the festival.",
    },
    // Free + Reserve
    {
      id: 4,
      title: "Nature Walk: Bosc d'en Puig",
      price: 0,
      type: "book",
      image: "/media/img/natural/bosc-puig.png",
      description:
        "Join a ranger-led group walk through the pine forests. Registration required.",
    },
    {
      id: 5,
      title: "Ranxo Evaluation Jury",
      price: 0,
      type: "book",
      image: "/media/img/fairs/ranxoVIDRERES.jpg",
      description:
        "Be part of the popular jury tasting the traditional stew. Limited spots.",
    },
    // Free + Plan
    {
      id: 6,
      title: "Self-Guided Old Town Tour",
      price: 0,
      type: "plan",
      image: "/media/img/historic/Vidreres-Esglesia-parroquial-01.jpg",
      description:
        "Download our map and audio guide to explore the historic center at your own pace.",
      mapUrl:
        "https://www.google.com/maps/place/Plaça+Església,+17411+Vidreres,+Girona/@41.7888104,2.7744169,810m/data=!3m2!1e3!4b1!4m15!1m8!3m7!1s0x12bb22083147e0af:0x596760a680cfb81b!2s17411+Vidreres,+Girona!3b1!8m2!3d41.7902198!4d2.7776036!16s%2Fm%2F0h53bh4!3m5!1s0x12bb18a0677d6613:0xbb424973e84a2f9a!8m2!3d41.7887997!4d2.779265!16s%2Fg%2F11bw4by3s1?entry=ttu&g_ep=EgoyMDI1MTIwMi4wIKXMDSoASAFQAw%3D%3D",
    },
    {
      id: 7,
      title: "Cycling Route: Els Pantans",
      price: 0,
      type: "plan",
      image: "/media/img/natural/pantansllobet.jpg",
      description:
        "A scenic 10km cycling route passing by the three reservoirs.",
      mapUrl:
        "https://www.google.com/maps/place/Pantans+D'en+Llobet/@41.7845166,2.8092817,810m/data=!3m2!1e3!4b1!4m6!3m5!1s0x12bb19979194b791:0x5459af56d0493dc5!8m2!3d41.7845126!4d2.8118566!16s%2Fg%2F11ghpsrsvm?entry=ttu&g_ep=EgoyMDI1MTIwMi4wIKXMDSoASAFQAw%3D%3D",
    },
    {
      id: 8,
      title: "Saint Martin's Footprint Hike",
      price: 0,
      type: "plan",
      image: "/media/img/natural/lapetjadesantmarti.jpg",
      description:
        "A hiking trail leading to the legendary rock with amazing coastal views.",
      mapUrl:
        "https://www.google.com/maps/place/Ermita+de+Santa+Susanna/@41.7730869,2.8445203,811m/data=!3m2!1e3!4b1!4m6!3m5!1s0x12bb197064a4573f:0xa7ff459a21c08127!8m2!3d41.7730829!4d2.8470952!16s%2Fg%2F11h1ss8x7?entry=ttu&g_ep=EgoyMDI1MTIwMi4wIKXMDSoASAFQAw%3D%3D",
    },
  ];

  const handleAddToCart = (activity) => {
    addToCart(activity);
    setIsCartOpen(true);
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div style={{ padding: "4rem 0", position: "relative" }}>
      <div className="container">
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "3rem",
          }}
        >
          <h1 style={{ margin: 0 }}>Activities & Experiences</h1>
          <button
            onClick={() => setIsCartOpen(true)}
            className="btn"
            style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}
          >
            <FaShoppingCart /> View Selection (
            {cart.reduce((acc, item) => acc + item.quantity, 0)})
          </button>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "2rem",
          }}
        >
          {activities.map((activity) => (
            <div
              key={activity.id}
              style={{
                border: "1px solid #eee",
                borderRadius: "8px",
                overflow: "hidden",
                boxShadow: "0 2px 4px rgba(0,0,0,0.05)",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div style={{ height: "200px", overflow: "hidden" }}>
                <img
                  src={asset(activity.image)}
                  alt={activity.title}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
              <div
                style={{
                  padding: "1.5rem",
                  flex: 1,
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "start",
                    marginBottom: "1rem",
                  }}
                >
                  <h3 style={{ margin: 0, fontSize: "1.25rem" }}>
                    {activity.title}
                  </h3>
                  {activity.price > 0 ? (
                    <span
                      style={{
                        backgroundColor: "var(--color-secondary)",
                        color: "white",
                        padding: "0.25rem 0.5rem",
                        borderRadius: "4px",
                        fontWeight: "bold",
                      }}
                    >
                      {activity.price} €
                    </span>
                  ) : (
                    <span
                      style={{
                        backgroundColor: "#4CAF50",
                        color: "white",
                        padding: "0.25rem 0.5rem",
                        borderRadius: "4px",
                        fontWeight: "bold",
                        fontSize: "0.9rem",
                      }}
                    >
                      FREE
                    </span>
                  )}
                </div>
                <p style={{ color: "#666", marginBottom: "1.5rem", flex: 1 }}>
                  {activity.description}
                </p>

                {activity.type === "plan" ? (
                  <button
                    className="btn"
                    style={{ backgroundColor: "#666", alignSelf: "flex-start" }}
                    onClick={() => window.open(activity.mapUrl, "_blank")}
                  >
                    <FaMapMarkedAlt style={{ marginRight: "0.5rem" }} />{" "}
                    Download Plan
                  </button>
                ) : (
                  <button
                    className="btn"
                    style={{ alignSelf: "flex-start" }}
                    onClick={() => handleAddToCart(activity)}
                  >
                    <FaShoppingCart style={{ marginRight: "0.5rem" }} />
                    {activity.type === "paid" ? "Buy Ticket" : "Book Now"}
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <CartModal
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cart}
        onRemoveItem={removeFromCart}
        addToCart={addToCart}
        decreaseQuantity={decreaseQuantity}
        totalPrice={getTotalPrice()}
      />
    </div>
  );
};

export default Activities;
