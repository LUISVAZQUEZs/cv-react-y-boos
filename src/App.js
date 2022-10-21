import React from "react";
import "./styles.css";

import InfoCard from "./InfoCard";
import experience from "./experience";
import CVComponent from "./CVComponent";
import education from "./education";
import SkillsList from "./SkillsList";

const info = {
  imgSrc: "./FotoPL.png",
  name: "LUIS ALBERTO VAZQUEZ ABARCA",
  profession: "Ingenieria en sistemas computacionales",
  address: "Las rosas, chiapas",
  phone: 992-112-9938,
  email: "wichincompisyeli@gmail.com",
  about:
    "calle san jose las rosas."
};

export default function App() {
  const experienceComponent = experience.map(item => (
    <CVComponent item={item} />
  ));
  const educationComponent = education.map(item => <CVComponent item={item} />);

  return (
    <div>
      <main>
        <section className="container">
          <section className="info">
            <InfoCard info={info} />
            <h2>
              
            </h2>
            <SkillsList />
          </section>

          <section className="work">
            <h1>
              <i className="fa fa-briefcase fa" /> INFORMACION PERSONAL{" "}
            </h1>
            {experienceComponent}
          </section>
          <hr />
          <section className="education">
            <h1>
              {" "}
              <i className="fa fa-university" /> EducaCION/ESTUDIOS{" "}
            </h1>
            {educationComponent}
          </section>

          <section className="other">
            <h1>
              {" "}
              <i className="fa fa-desktop" /> trayectoria academica{" "}
            </h1>
            <h3> primaria </h3>
            <li>primaria narciso mendoza</li>
            <h3>secundaria </h3>
            <ul>
              <li>secundaria tenica #27</li>
              
            </ul>
            <h3>preparatoria</h3>
            <ul>
              <li>fortunato argueta robles</li>
              
            </ul>
          </section>
        </section>
      </main>
      <footer className="footer">
        <p>desarrollado por luis alberto vazquez abarca</p>
        
      </footer>
    </div>
  );
}
