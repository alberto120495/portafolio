import React from "react";
import "./Contact.css";
function Contact() {
  return (
    <div className="contact">
      <center className="contact__title">
        <h1>Informacion de contacto</h1>
      </center>
      <div class="contact__details">
        <h3 class="contact__title">Contactame en:</h3>
        <img src="https://img.icons8.com/fluent/48/000000/gmail.png" />
        <p>albertopimentel04@gmail.com</p>
        <img src="https://img.icons8.com/color/48/000000/android.png" />
        <p>+52 55 32 40 98 02</p>
      </div>
      <div class="contact__info">
        <p>
          Mucho gusto ! Si quieres mantenerte en contacto conmigo, enviame un
          mensaje usando mi numero de celular o mi direccion de correo
          electronico y sera un placer para mi el atenderte. De igual manera
          puedes contactarme por mis redes sociales abajo:
        </p>
      </div>
      <div className="contact__infoRedes">
        <a href="https://www.instagram.com/albertopimentel04/" target="_blank">
          <img src="https://img.icons8.com/fluent/48/000000/instagram-new.png" />
        </a>
        <a href="https://twitter.com/betitomx04" target="_blank">
          <img src="https://img.icons8.com/fluent/48/000000/twitter.png" />
        </a>
        <a href="https://github.com/alberto120495" target="_blank">
          <img src="https://img.icons8.com/fluent/48/000000/github.png" />
        </a>
      </div>
    </div>
  );
}

export default Contact;
