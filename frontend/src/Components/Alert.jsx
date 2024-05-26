import React from "react";

const Notification = ({ message }) => {
  return (
    <div
      style={{
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        padding: "20px",
        backgroundColor: "rgba(0, 0, 0, 0.7)",
        color: "white",
        borderRadius: "10px",
        zIndex: "1000"
      }}
    >
      {message}
    </div>
  );
};

export default Notification;