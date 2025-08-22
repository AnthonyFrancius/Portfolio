import "./App.css";
import { FiArrowUpRight } from "react-icons/fi";
import linkedin from "./assets/linkedin-logo-linkedin-icon-transparent-free-png.webp";
import github from "./assets/png-transparent-github-social-media-computer-icons-logo-android-github-logo-computer-wallpaper-banner-thumbnail.png";
import moi from "../public/moi.jpeg";

function App() {
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
                <FiArrowUpRight />
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
              <button>
                <FiArrowUpRight />
              </button>
              <h4>Projet</h4>
            </div>
            <div className="trait" />
            <div className="savoir">
              <button>
                <FiArrowUpRight />
              </button>
              <h4>savoir faire</h4>
            </div>
            <div className="trait" />
            <div className="etude">
              <button>
                <FiArrowUpRight />
              </button>
              <h4>Etudes</h4>
            </div>
            <div className="trait" />
            <div className="exp">
              <button>
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
