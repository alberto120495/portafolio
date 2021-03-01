import React from "react";
import "./Contact.css";
function Contact() {
  return (
    <div className="contact">
      <center className="contact__title">
        <h1>Información de contacto</h1>
      </center>
      <div class="contact__details">
        <h2>¿Qué sigue después?</h2>
        <div class="contact__info">
          <p>
            Mucho gusto ! Si quieres mantenerte en contacto conmigo, enviame un
            mensaje usando mi numero de celular o mi dirección de correo
            electronico, mi inbox estará abierto y sera un placer poder
            atenderte. De igual manera puedes contactarme por mis redes
            sociales, responderé lo más pronto posible:
          </p>
        </div>
        <h3>Contactame en:</h3>
        <img
          src="https://img.icons8.com/fluent/48/000000/gmail.png"
          alt="gmail"
        />
        <p>albertopimentel04@gmail.com</p>
        <img
          src="https://img.icons8.com/color/48/000000/android.png"
          alt="phone"
        />
        <p>+52 55 32 40 98 02</p>
      </div>

      <div className="contact__infoRedes">
        <a
          href="https://www.instagram.com/albertopimentel04/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://img.icons8.com/fluent/48/000000/instagram-new.png"
            alt="instagram"
          />
        </a>
        <a
          href="https://twitter.com/betitomx04"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://img.icons8.com/fluent/48/000000/twitter.png"
            alt="twitter"
          />
        </a>
        <a
          href="https://github.com/alberto120495"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://img.icons8.com/fluent/48/000000/github.png"
            alt="github"
          />
        </a>
      </div>
    </div>
  );
}

export default Contact;
