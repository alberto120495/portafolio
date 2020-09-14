import React from "react";
import "./Home.css";
function Home() {
  return (
    <div className="home">
      <h1>Soy Alberto Pimentel.</h1>

      <div className="home__body">
        <div className="home__presentacion">
          <h2>Bienvenido a mi portafolio online</h2>
          <p className="subtitle">¿Cómo estás?</p>

          <p className="descripcion">
            Soy Desarrollador web, front-end de México. Mi pasión por el
            desarrollo me ha llevado a conocer nuevas tecnologias y aprender de
            todo, pero lo que mas me encanta es la parte con la que el usuario
            final interactua.
          </p>
        </div>
        {/* <div className="home__card">
          <img
            src="https://images.unsplash.com/photo-1537884944318-390069bb8665?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
            alt=""
          />
          <p className="homeCard__stats">
            Patel, P. (2018). Drag and Drop JS code in VSCode editor. [Figura].
            Recuperado de https://unsplash.com
          </p>
        </div> */}
      </div>

      <blockquote>
        <span className="frase">"</span>El trabajo duro vence al talento cuando
        el talento no trabaja duro.
        <span className="frase">"</span>
      </blockquote>
      <cite>-Tim Notke</cite>

      <div className="home__card">
        <img
          src="https://images.unsplash.com/photo-1537884944318-390069bb8665?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
          alt=""
        />
        <img
          src="https://images.unsplash.com/photo-1535551951406-a19828b0a76b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=746&q=80"
          alt=""
        />
        <img
          src="https://images.unsplash.com/photo-1504639725590-34d0984388bd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=667&q=80"
          alt=""
        />
      </div>
    </div>
  );
}

export default Home;
