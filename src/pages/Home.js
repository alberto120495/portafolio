import React from "react";
import "./Home.css";
import Typed from "react-typed";
function Home() {
  return (
    <div className="home">
      <h1>Alberto Pimentel</h1>
      <Typed
        strings={["Desarrollo web", "front-end", "JavaScript", "ReactJs"]}
        typeSpeed={40}
        backSpeed={60}
        loop
        className="typed-text"
      />

      <div className="home__body">
        <div className="home__presentacion">
          <h2>Bienvenido a mi portafolio</h2>
          <p className="subtitle">¿Quien soy?</p>
          <p className="descripcion">
            Soy un desarrollador web junior mexicano, especializado en
            front-end. Mi pasión por el desarrollo me ha llevado a conocer
            nuevas tecnologías y disfrutar de crear cosas que viven en internet,
            ya sea sitios web, aplicaciones o cualquier cosa en el medio.
          </p>
        </div>
      </div>

      <blockquote>
        <span className="frase">"</span>El trabajo duro vence al talento cuando
        el talento no trabaja duro.
        <span className="frase">"</span>
      </blockquote>
      <cite>-Tim Notke</cite>

      <div className="home__card">
        <div className="img-con">
          <img
            src="https://images.unsplash.com/photo-1537884944318-390069bb8665?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9"
            alt="code"
          />
          <span class="oculto">
            Pankaj Patel, Drag and Drop JS code in VSCode editor
          </span>
        </div>

        <div className="img-con">
          <img
            src="https://images.unsplash.com/photo-1503437313881-503a91226402?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D"
            alt="desktop"
          />
          <span class="oculto">Martin Shreder, Custom workspace</span>
        </div>
      </div>
    </div>
  );
}

export default Home;
