import React from "react";
import "./About.css";
import GetAppIcon from "@material-ui/icons/GetApp";

function About() {
  return (
    <div className="about">
      <center className="about__title">
        <h1>Sobre mi</h1>
      </center>

      <div className="about__section">
        <img
          className="profile-pic"
          src="https://scontent.fmex12-1.fna.fbcdn.net/v/t1.0-9/38985052_1337493846380543_4830993684285620224_n.jpg?_nc_cat=111&_nc_sid=174925&_nc_ohc=gRlrHWf4c2kAX8cjBH1&_nc_ht=scontent.fmex12-1.fna&oh=8912a1d38dc9980ecafa6d5c608409a1&oe=5F8603E3"
          alt=""
        />
        <div className="about__sectionMe">
          <p className="about__sectionMePersonal">
            Mi nombre es Alberto Pimentel, soy desarrollador front end.
            Actualmente estoy trabajando como instructor de robotica y enseño a
            programar a niños y jovenes interesados en nuevas tecnologias.
          </p>
          <h2 className="about__sectionTitles">Educacion</h2>
          <p>Universidad Autonoma del Estado de México (UAEM)</p>
          <p>Ingeniería en computación (20013 - 2018) </p>
          <p>Titulado por Aprovechamiento académico.</p>
          <h2 className="about__sectionTitles">Habilidades</h2>
          <ul>
            <li>
              <img src="https://img.icons8.com/color/48/000000/html-5.png" />
              HTML
            </li>
            <li>
              <img src="https://img.icons8.com/color/48/000000/css3.png" />
              CSS
            </li>
            <li>
              <img src="https://img.icons8.com/color/48/000000/javascript.png" />
              JavaScript
            </li>
            <li>
              <img src="https://img.icons8.com/color/48/000000/react-native.png" />
              ReactJs
            </li>
            <li>
              <img src="https://img.icons8.com/offices/40/000000/php-logo.png" />
              PHP
            </li>
            <li>
              <img src="https://img.icons8.com/ultraviolet/40/000000/database-restore.png" />
              SQL
            </li>
            <li>
              <img src="https://img.icons8.com/color/48/000000/merge-git.png" />
              GIT
            </li>
          </ul>
        </div>
        <div className="download">
          <GetAppIcon />
          <a href="https://ucb80d625ed48928995a9ec0c072.dl.dropboxusercontent.com/cd/0/get/A_ZWZ4u2brQfkOXzYmD6iAKFt3zSzCU6RP5lByiEvHXqSlZwRECIyaFmJAT9X7dvWn7WoLl3jkPFFsfD23eE9yVPVzooXjyTu5E8j7DxQso9pTD6WvO5euGuSi1c_hgQc9g/file#">
            Descargar CV
          </a>
        </div>
      </div>
    </div>
  );
}

export default About;
