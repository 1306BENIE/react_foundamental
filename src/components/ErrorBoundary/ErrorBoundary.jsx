// src/components/ErrorBoundary.jsx
import React from "react";

const ErrorBoundary = ({ error }) => {
  console.error("Erreur attrapée par ErrorBoundary :", error);

  return (
    <div style={{ padding: "2rem", color: "#b00020", textAlign: "center" }}>
      <h2>😢 Oups ! Une erreur est survenue.</h2>
      {/* <p>{error.message}</p> */}
      <p>Essayez de recharger la page ou revenez plus tard.</p>
    </div>
  );
};

export default ErrorBoundary;
