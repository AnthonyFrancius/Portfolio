import "./App.css";
import { useEffect, useState } from "react";
import { FiArrowUpRight } from "react-icons/fi";
import linkedin from "./assets/linkedin-logo-linkedin-icon-transparent-free-png.webp";
import github from "./assets/png-transparent-github-social-media-computer-icons-logo-android-github-logo-computer-wallpaper-banner-thumbnail.png";

const taff = [
  {
    key: "1",
    href: "https://laclim.vercel.app/",
    className: "clim",
    src: "climaserv.png",
    alt: "image page d'accueil du site clim a serv",
    nom: "Clim @ Serv'",
    description:
      "Site internet pour une entreprise de climatisation et pompe à chaleur",
  },
];

function App() {
  // Animation à l'ouverture du site
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  // Modals parti de droite
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

  return loading ? (
    <div className="loader">
      <div className="anim">
        <span />
      </div>
    </div>
  ) : (
    <div className="App">
      <header className="header">Anthony Francius</header>
      <main className="main">
        <div className="gauche">
          <div className="ligne1">
            <div className="accroche">
              <h1>
                Mon terrain de jeu ? <br />
                Architecture web et logique métier
              </h1>
            </div>
            <div className="photo">
              <img src="moi.jpeg" />
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
                et une envie constante d'apprendre.
                <br /> Chaque projet est une nouvelle mission.
              </p>
            </div>
          </div>
        </div>
        <div className="droite">
          <div className="experience">
            <div className="projets">
              <button onClick={toggleProjet}>
                {projet && (
                  <div className="modal">
                    <div className="overlay" />
                    <div className="contenu">
                      <h1> Projets</h1>
                      {taff.map((i) => (
                        <div className="projet">
                          <a
                            key={i.key}
                            href={i.href}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <img
                              className={i.className}
                              src={i.src}
                              alt={i.alt}
                            />
                          </a>

                          <div key={i.key}>
                            <h4>{i.nom}</h4>
                            <p>{i.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                <FiArrowUpRight />
              </button>
              <h4>Projets</h4>
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
                      <h4>2024</h4>
                      <p>Développeur web fullstack</p>
                      <p>En distanciel</p>
                      <p />
                      <h3>Lycée St André</h3>
                      <h4>2010</h4>
                      <p>Baccalauréal Négosiation et suivi de la clientèle</p>
                      <p>Niort</p>
                      <p />
                      <h3>Lycée St André</h3>
                      <h4>2008</h4>
                      <p>Brevet d'Etudes Professionnel comptabilité</p>
                      <p>Niort</p>
                      <p />
                      <p />
                    </div>
                  </div>
                )}
                <FiArrowUpRight />
              </button>
              <h4>Diplômes</h4>
            </div>
            <div className="trait" />
            <div className="savoir">
              <button onClick={toggleSavoir}>
                {savoir && (
                  <div className="modal">
                    <div className="overlay" />
                    <div className="contenu">
                      <h1> Savoir faire</h1>
                      <h3>Font-End</h3>
                      <p />
                      <p>React.js</p>
                      <p>Next.js</p>
                      <p>JavaScript</p>
                      <p>TypeScript</p>
                      <p>Vite</p>
                      <h3>Back-End</h3>
                      <p />
                      <p>Node js</p>
                      <p>Firebase</p>
                      <p>PosgreSQL</p>
                      <h3>Design et céation visuel</h3>
                      <p />
                      <p>Figma</p>
                      <p>Photoroom</p>
                      <p>Canva</p>
                      <p>Blender</p>
                      <h3>Autres</h3>
                      <p />
                      <p>Git/Github</p>
                      <p>Vercel</p>
                      <p>Vs Code</p>
                      <p />
                    </div>
                  </div>
                )}
                <FiArrowUpRight />
              </button>
              <h4>Savoir faire</h4>
            </div>
            <div className="trait" />
            {/* Expériences remplacer par Savoir etre */}
            <div className="exp">
              <button onClick={toggleExp}>
                {exp && (
                  <div className="modal">
                    <div className="overlay" />
                    <div className="contenu">
                      <h1>Savoir être</h1>
                      <p />
                      <p>Motivé</p>
                      <p>Organisé</p>
                      <p>Autonome</p>
                      <p>Coopératif</p>
                      <p />
                      <p />
                    </div>
                  </div>
                )}
                <FiArrowUpRight />
              </button>
              <h4>Savoir être</h4>
            </div>
          </div>
          <div className="reseaux">
            <a
              href="https://linkedin.com/in/anthony-francius-7869311ab"
              // pour que ca ouvre une autre page
              target="_blank"
              // pour des raison de sécurité et confidencialité
              rel="noopener noreferrer"
            >
              <img src={linkedin} alt="logo linkedin" />
            </a>
            <a
              href="https://github.com/AnthonyFrancius"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={github} alt=" logo github" className="github" />
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
