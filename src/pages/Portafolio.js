import React from "react";
import "./Portafolio.css";
import Card from "../components/Card";
import FB from "../images/FB.png";
import airbnb from "../images/airbnb.png";
import amazon from "../images/amazon.png";
import covid from "../images/covid.png";
import Google from "../images/Google.png";
import hulu from "../images/hulu.png";
import slack from "../images/slack.png";
import netflix from "../images/netflix.png";
import robin from "../images/robin.png";
import linkedin from "../images/linkedin.png";
import whatsapp from "../images/whatsapp.png";
import gmail from "../images/gmail.png";
import LaraFoto from "../images/LaraFoto.png";
import AnimeFY from "../images/AnimeFY.png";
import snapchat from "../images/snapchat.png";

function Portafolio() {
  return (
    <div className="portafolio">
      <center className="portafolio__title">
        <h1>Revisa algunos de mis trabajos </h1>
      </center>

      <div className="portafolio__section">
        <a
          href="https://clone-105a2.web.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Card
            src={amazon}
            title="Amazon Clone"
            description="Amazon clone realizado con React, con funcion de login, agregar al carrito y proceso de compras. (Click DEMO)"
          />
        </a>
        <a
          href="https://airbnb-clone-96c30.web.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Card
            src={airbnb}
            title="Airbnb Clone"
            description="Airbnb clone realizado con React, con funcion de calendario y agradable diseño. (Click DEMO)"
          />
        </a>

        <a
          href="https://covid-19-tracker-adc50.web.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Card
            src={covid}
            title="Covid Tracker"
            description="Seguidor de Covid-19 realizado con React, con funcion de seguir casos por pais o  mundial. (Click DEMO) "
          />
        </a>
      </div>
      <div className="portafolio__section">
        <a
          href="https://netflix-challenge-9b611.web.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Card
            src={netflix}
            title="Netflix Clone"
            description="Netflix clone realizado con React y Redux, con funcion de login, visualizacion aletoria de portadas de peliculas y si esta disponible; visualizador de trailers. (Click DEMO)"
          />
        </a>
        <a
          href="https://hulu-clone-c2bc6.web.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Card
            src={hulu}
            title="Hulu Clone"
            description="Hulo clone realizado con React, con funcion para visualizar portadas de peliculas, utilizando una API para conseguir las portadas. (Click DEMO)"
          />
        </a>
        <a
          href="https://snapchat-clone-7c145.web.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Card
            src={snapchat}
            title="Snapchat Clone"
            description="Snapchat clone realizado con React y Redux, con funcion para tomar capturas directo de la webcam, sesion con Google y mas. (Click DEMO)"
          />
        </a>
      </div>
      <div className="portafolio__section">
        <a
          href="https://whatsapp-clone-9161d.web.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Card
            src={whatsapp}
            title="Whatsapp Clone"
            description="Whatsapp clone realizado con React, con funcion de login con google, base de datos en tiempo real y creacion de varios canales (Click DEMO)"
          />
        </a>
        <a
          href="https://slack-clone-6f122.web.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Card
            src={slack}
            title="Slack Clone"
            description="Slack clone realizado con React y Redux, con funcion de login con google, identificacion de usuario, creacion de canales, base de datos en tiempo real en firebase y loader.(Click DEMO)"
          />
        </a>

        <a
          href="https://clone-42272.web.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Card
            src={Google}
            title="Google Clone"
            description="Google clone realizado con React, con funcion de busquedas reales basado en una API de Google. (Click DEMO)"
          />
        </a>
      </div>
      <div className="portafolio__section">
        <a
          href="https://facebook-clone-d4ea6.web.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Card
            src={FB}
            title="Facebook Clone"
            description="Facebook clone realizado con React, con funcion para publicar posts con o sin imagenes, base de datos en tiempo real. (Click DEMO)"
          />
        </a>
        <a
          href="https://clone-e9d70.web.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Card
            src={linkedin}
            title="Linkedin Clone"
            description="Linkedin clone realizado con React y Redux, con funcion de login con correo y contraseña y capacidad para publicar posts, un diseño minimalista y base de datos en tiempo real. (Click DEMO)"
          />
        </a>
        <a
          href="https://clone-8bc36.web.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Card
            src={gmail}
            title="Gmail Clone"
            description="Gmail clone realizado con React y Redux, con funcion de login, enviar mensajes demostrativos a tu inbox, cuenta con un diseño muy similar a la verdadera aplicacion. (Click DEMO)"
          />
        </a>
      </div>
      <div className="portafolio__section">
        <a
          href="https://robinhood-clone-6f22e.web.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Card
            src={robin}
            title="Robinhood Clone"
            description="Robinhood clone realizado con React, con funcion para visualizar datos en tiempo real de las acciones de diferentes marcas, una interfaz moderna, minimalista y funcional (Datos de una API). (Click DEMO)"
          />
        </a>

        <Card
          src={AnimeFY}
          title="Aplicacion para ver anime online"
          description="Aplicacion realizada con PHP, con funcion para gestionar usuarios, publicar con Facebook y reproduccion de video online. (Aplicacion NO en Hosting)"
        />
        <Card
          src={LaraFoto}
          title="LaraFoto"
          description="Aplicacion realizada con Laravel, con funcion de login, publicar, comentar y dar likes. (Aplicacion NO en Hosting)"
        />
      </div>
    </div>
  );
}

export default Portafolio;
