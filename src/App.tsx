import "./App.css";
import { useState } from "react";
import { FiArrowUpRight } from "react-icons/fi";
import linkedin from "./assets/linkedin-logo-linkedin-icon-transparent-free-png.webp";
import github from "./assets/png-transparent-github-social-media-computer-icons-logo-android-github-logo-computer-wallpaper-banner-thumbnail.png";
import moi from "../public/moi.jpeg";

function App() {
  const [projet, setProjet] = useState(false);
  const toggleProjet = () => {
    setProjet(!projet);
  };
  const [diplome, setDiplome] = useState(false);
  const toggleDiplome = () => {
    setDiplome(!diplome);
  };
  const [savoir, setSavoir] = useState(false);
  const toggleSavoir = () => {
    setSavoir(!savoir);
  };
  const [exp, setExp] = useState(false);
  const toggleExp = () => {
    setExp(!exp);
  };

  return (
    <div className="App">
      <header className="header">Anthony Francius</header>
      <main className="main">
        <div className="gauche">
          <div className="ligne1">
            <div className="accroche">
              <h1>
                Mon terrain de jeu ? <br />
                Architecture front-end et logique métier
              </h1>
            </div>
            <div className="photo">
              <img src={moi} />
            </div>
          </div>
          <div className="ligne2">
            <div className="contact">
              <button>
                <a href="mailto:anthony.francius@laposte.net">
                  <FiArrowUpRight />
                </a>
              </button>
              <h2>Contactez-moi</h2>
            </div>
            <div className="description">
              <button>
                <FiArrowUpRight />
              </button>
              <p>
                Développeur web avec une passion grandissante pour le front-end
                et une envie constante d'apprendre. <br /> Chaque projet est une
                nouvelle mission
              </p>
            </div>
          </div>
        </div>
        <div className="droite">
          <div className="experience">
            <div className="projet">
              <button onClick={toggleProjet}>
                {projet && (
                  <div className="modal">
                    <div className="overlay">
                      <div className="contenu">vive les chamois</div>
                    </div>
                  </div>
                )}
                <FiArrowUpRight />
              </button>
              <h4>Projet</h4>
            </div>
            <div className="trait" />
            <div className="savoir">
              <button onClick={toggleSavoir}>
                {savoir && (
                  <div className="modal">
                    <div className="overlay">
                      <div className="contenu">aller l'om</div>
                    </div>
                  </div>
                )}
                <FiArrowUpRight />
              </button>
              <h4>Savoir faire</h4>
            </div>
            <div className="trait" />
            <div className="diplome">
              <button onClick={toggleDiplome}>
                {diplome && (
                  <div className="modal">
                    <div className="overlay" />
                    <div className="contenu">
                      <h1>Diplômes</h1>
                      <h3>O'Clock</h3>
                      <h4>En distenciel</h4>
                      <p>Développeur web fullstack</p>
                      <p>2024</p>
                      <h3>Lycée St André</h3>
                      <h4>Niort</h4>
                      <p>Baccalauréal Négosiation et suivi de la clientèle</p>
                      <p>2010</p>
                      <h3>Lycée St André</h3>
                      <h4>Niort</h4>
                      <p>Brevet d'Etudes Professionnel comptabilité</p>
                      <p>2008</p>
                    </div>
                  </div>
                )}
                <FiArrowUpRight />
              </button>
              <h4>Diplômes</h4>
            </div>
            <div className="trait" />
            <div className="exp">
              <button onClick={toggleExp}>
                {exp && (
                  <div className="modal">
                    <div className="overlay">
                      <div className="contenu">nul psg</div>
                    </div>
                  </div>
                )}
                <FiArrowUpRight />
              </button>
              <h4>Expériences</h4>
            </div>
          </div>
          <div className="reseaux">
            <a
              href="https://linkedin.com/in/anthony-francius-7869311ab"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={linkedin} alt="logo linkedin" />
            </a>
            <a
              href="https://github.com/AnthonyFrancius"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={github} alt=" logo github" />
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
