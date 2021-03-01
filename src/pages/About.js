import React from "react";
import "./About.css";
import GetAppIcon from "@material-ui/icons/GetApp";
import cv from "../images/cv.png";

function About() {
  return (
    <div className="about">
      <center className="about__title">
        <h1>Sobre mi</h1>
      </center>
      <div className="imagen-cv">
        <img className="profile-pic" src={cv} alt="Alberto Pimentel" />
        <div className="download">
          <GetAppIcon />
          <a
            href="https://mega.nz/file/Ew82jI6L#VzYvMeK_9qCkEr-6jqriz9a4_mI0qcf7_uDy2kvRAFI"
            target="_blank"
            rel="noopener noreferrer"
          >
            Descargar CV
          </a>
        </div>
      </div>

      <div className="about__section">
        <div className="about__sectionMe">
          <p className="about__sectionMePersonal">
            Mi nombre es Alberto Pimentel, soy Ingeniero en Computación y
            encantado con el desarrollo front end. Soy una persona muy bien
            organizada, me gusta resolver problemas, aprender cosas nuevas y
            trabajar con gente positiva. Me gusta realizar actividades al aire
            libre, ver series de televisión y recientemente leer libros sobre
            como ser una mejor persona.
            <br />
            <br />
            La principal área de experiencia la tengo en el desarrollo del lado
            de cliente en la web (front end). He realizado algunos pequeños y
            medianos proyectos. También he tenido la oportunidad de explorar el
            mundo del backend utilizando PHP y Node.js, así como MySql y MongoDB
            para el manejo de las bases de datos.
          </p>
          <h2 className="about__sectionTitles">Educacion</h2>
          <p>Universidad Autonoma del Estado de México (UAEM)</p>
          <p>Ingeniería en computación (20013 - 2018) </p>
          <p>Titulado por Aprovechamiento académico.</p>
          <h2 className="about__sectionTitles">Habilidades</h2>
          <ul>
            <li>
              <img
                src="https://img.icons8.com/color/48/000000/html-5.png"
                alt="html"
              />
              HTML
            </li>
            <li>
              <img
                src="https://img.icons8.com/color/48/000000/css3.png"
                alt="css"
              />
              CSS
            </li>
            <li>
              <img
                src="https://img.icons8.com/color/48/000000/javascript.png"
                alt="js"
              />
              JavaScript
            </li>
            <li>
              <img
                src="https://img.icons8.com/color/48/000000/react-native.png"
                alt="react"
              />
              ReactJs
            </li>
            <li>
              <img
                src="https://img.icons8.com/offices/40/000000/php-logo.png"
                alt="php"
              />
              PHP
            </li>
            <li>
              <img
                src="https://img.icons8.com/ultraviolet/40/000000/database-restore.png"
                alt="sql"
              />
              SQL
            </li>
            <li>
              <img
                src="https://img.icons8.com/color/48/000000/merge-git.png"
                alt="git"
              />
              GIT
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default About;
