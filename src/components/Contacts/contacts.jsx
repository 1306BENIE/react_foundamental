import React from "react";
import "./contacts.css"

const Contacts = () => {
  return (
    <div className="contact-container">

      <h2>Contactez-nous</h2>
      <p>
        N'hésiter pas à me contacter pour toute <br /> 
        demande de renseignement ou collaboration.
      </p>
      <button className="btn">Envoyer</button>
    </div>
  );
};

export default Contacts;
