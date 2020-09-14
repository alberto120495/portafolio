import React from "react";
import "./Portafolio.css";
import Card from "../components/Card";
import FB from "../images/FB.png";
import airbnb from "../images/airbnb.png";
import amazon from "../images/amazon.png";
import covid from "../images/covid.png";
import Google from "../images/Google.png";
import hulu from "../images/hulu.png";
import messenger from "../images/messenger.png";
import netflix from "../images/netflix.png";
import tiktok from "../images/tiktok.png";
import twitter from "../images/twitter.png";
import whatsapp from "../images/whatsapp.png";
import youtube from "../images/youtube.png";

function Portafolio() {
  return (
    <div className="portafolio">
      <center className="portafolio__title">
        <h1>Revisa algunos de mis trabajos </h1>
      </center>

      <div className="portafolio__section">
        <a href="https://clone-105a2.web.app/" target="_blank">
          <Card
            src={amazon}
            title="Amazon Clone"
            description="Amazon clone realizado con React, con funcion de login, agregar al carrito y proceso de compras. (Click DEMO)"
          />
        </a>
        <a href="https://airbnb-clone-96c30.web.app/" target="_blank">
          <Card
            src={airbnb}
            title="Airbnb Clone"
            description="Airbnb clone realizado con React, con funcion de calendario y agradable diseño. (Click DEMO)"
          />
        </a>

        <a href="https://covid-19-tracker-adc50.web.app/" target="_blank">
          <Card
            src={covid}
            title="Covid Tracker"
            description="Seguidor de Covid-19 realizado con React, con funcion de seguir casos por pais o  mundial. (Click DEMO) "
          />
        </a>
      </div>
      <div className="portafolio__section">
        <a href="https://whatsapp-clone-9161d.web.app/" target="_blank">
          <Card
            src={whatsapp}
            title="Whatsapp Clone"
            description="Whatsapp clone realizado con React, con funcion de login con google, base de datos en tiempo real y creacion de varios canales (Click DEMO)"
          />
        </a>
        <a href="https://messenger-clone-aad32.web.app/" target="_blank">
          <Card
            src={messenger}
            title="Messenger Clone"
            description="Messenger clone realizado con React, con funcion de  identificacion de usuario y base de datos en tiempo real.(Click DEMO)"
          />
        </a>

        <a href="https://clone-42272.web.app/" target="_blank">
          <Card
            src={Google}
            title="Google Clone"
            description="Google clone realizado con React, con funcion de busquedas reales basado en una API de Google. (Click DEMO)"
          />
        </a>
      </div>
      <div className="portafolio__section">
        <a href="https://netflix-clone-479f5.web.app/" target="_blank">
          <Card
            src={netflix}
            title="Netflix Clone"
            description="Netflix clone realizado con React, con funcion aleatoria para visualizar portadas de peliculas y si esta disponible; visualizador de trailers. (Click DEMO)"
          />
        </a>
        <a href="https://hulu-clone-c2bc6.web.app/" target="_blank">
          <Card
            src={hulu}
            title="Hulu Clone"
            description="Hulo clone realizado con React, con funcion para visualizar portadas de peliculas, utilizando una API para conseguir las portadas. (Click DEMO)"
          />
        </a>

        <a href="https://clone-3c26e.web.app/" target="_blank">
          <Card
            src={youtube}
            title="Youtube Clone"
            description="Youtube clone realizado con React, con funcion de busqueda ya PREDEFINIDA, con diseño muy similar a la verdadera aplicacion. (Click DEMO)"
          />
        </a>
      </div>
      <div className="portafolio__section">
        <a href="https://facebook-clone-d4ea6.web.app/" target="_blank">
          <Card
            src={FB}
            title="Facebook Clone"
            description="Facebook clone realizado con React, con funcion para publicar posts con o sin imagenes, base de datos en tiempo real. (Click DEMO)"
          />
        </a>
        <a href="https://twitter-clone-eb11d.web.app/" target="_blank">
          <Card
            src={twitter}
            title="Twitter Clone"
            description="Twitter clone realizado con React, con funcion para publicar posts con o sin imagenes, base de datos en tiempo real y contenido eembebido. (Click DEMO)"
          />
        </a>

        <a href="https://tiktok-clone-7b49d.web.app/" target="_blank">
          <Card
            src={tiktok}
            title="TikTok Clone"
            description="Tiktok clone realizado con React, con funcion para visualizar nombre de canciones y spin de disco con animacion *Videos sacados de TikTok. (Click DEMO)"
          />
        </a>
      </div>
    </div>
  );
}

export default Portafolio;
