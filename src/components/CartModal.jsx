import React from "react";
import { FaTimes, FaTrash } from "react-icons/fa";
import { asset } from "../utils/asset";

const CartModal = ({
  isOpen,
  onClose,
  cartItems,
  onRemoveItem,
  addToCart,
  decreaseQuantity,
  totalPrice,
}) => {
  if (!isOpen) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1000,
      }}
    >
      <div
        style={{
          backgroundColor: "white",
          padding: "2rem",
          borderRadius: "8px",
          width: "90%",
          maxWidth: "500px",
          position: "relative",
          maxHeight: "80vh",
          overflowY: "auto",
        }}
      >
        <button
          onClick={onClose}
          style={{
            position: "absolute",
            top: "1rem",
            right: "1rem",
            background: "none",
            border: "none",
            fontSize: "1.5rem",
            cursor: "pointer",
            color: "#666",
          }}
        >
          <FaTimes />
        </button>

        <h2
          style={{
            marginTop: 0,
            marginBottom: "1.5rem",
            borderBottom: "2px solid var(--color-primary)",
            paddingBottom: "0.5rem",
          }}
        >
          Your Selection
        </h2>

        {cartItems.length === 0 ? (
          <p
            style={{ textAlign: "center", color: "#666", fontStyle: "italic" }}
          >
            Your cart is empty.
          </p>
        ) : (
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            {cartItems.map((item, index) => (
              <li
                key={index}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "1rem",
                  borderBottom: "1px solid #eee",
                }}
              >
                <div>
                  <h4 style={{ margin: "0 0 0.25rem" }}>{item.title}</h4>
                  <div style={{ fontSize: "0.9rem", color: "#666" }}>
                    {item.price === 0 ? "Free" : `${item.price} €`} x{" "}
                    {item.quantity}
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                  }}
                >
                  <button
                    onClick={() => decreaseQuantity(item)}
                    style={{
                      background: "#ddd",
                      border: "none",
                      width: "25px",
                      height: "25px",
                      borderRadius: "50%",
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontWeight: "bold",
                    }}
                  >
                    -
                  </button>
                  <span style={{ fontWeight: "bold" }}>{item.quantity}</span>
                  <button
                    onClick={() => addToCart(item)}
                    style={{
                      background: "#ddd",
                      border: "none",
                      width: "25px",
                      height: "25px",
                      borderRadius: "50%",
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontWeight: "bold",
                    }}
                  >
                    +
                  </button>
                  <div style={{ marginLeft: "1rem", fontWeight: "bold" }}>
                    {item.price * item.quantity} €
                  </div>
                  <button
                    onClick={() => onRemoveItem(item.id)}
                    style={{
                      background: "none",
                      border: "none",
                      color: "#ff4d4d",
                      cursor: "pointer",
                      padding: "0.5rem",
                      marginLeft: "0.5rem",
                    }}
                    title="Remove item"
                  >
                    <FaTrash />
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}

        <div
          style={{
            marginTop: "2rem",
            paddingTop: "1rem",
            borderTop: "2px solid #eee",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <h3 style={{ margin: 0 }}>Total:</h3>
          <h3 style={{ margin: 0, color: "var(--color-secondary)" }}>
            {totalPrice} €
          </h3>
        </div>

        <button
          style={{
            width: "100%",
            marginTop: "1.5rem",
            padding: "1rem",
            backgroundColor: "var(--color-secondary)",
            color: "white",
            border: "none",
            borderRadius: "4px",
            fontSize: "1.1rem",
            cursor: "pointer",
            fontWeight: "bold",
          }}
          onClick={() => alert("Proceeding to checkout/reservation...")}
        >
          Confirm Selection
        </button>
      </div>
    </div>
  );
};

export default CartModal;
