import "./App.css";
import { useEffect, useState } from "react";
import { FiArrowUpRight } from "react-icons/fi";
import linkedin from "./assets/linkedin-logo-linkedin-icon-transparent-free-png.webp";
import github from "./assets/png-transparent-github-social-media-computer-icons-logo-android-github-logo-computer-wallpaper-banner-thumbnail.png";
import moi from "./assets/moi.jpeg";
import clim from "./assets/climaserv.png";

const emploi = [
  {
    key: "1",
    href: "https://laclim.vercel.app/",
    className: "clim",
    src: clim,
    alt: "image page d'accueil du site clim a serv",
    nom: "Clim @ Serv'",
    description:
      "Site internet pour une entreprise de climatisation et pompe à chaleur",
    outil1: "Next Js",
    outil2: "",
    outil3: "",
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
      <div className="portable">
        <h3>
          le format mobile <br />
          n'est pas disponible <br />
          pour le moment.
        </h3>
      </div>
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
              <p>
                Développeur web junior avec une envie constante d'apprendre.
                <br /> Pour moi, chaque projet est une nouvelle mission.
                <br /> Je souhaite mettre en pratique les savoirs acquis pendant
                ma formation et me perfectionner au sein d'une entreprise ayant
                pour ambition de développer ses services en ligne.
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
                      <div className="titre">
                        <h1> Projets</h1>
                      </div>
                      {emploi.map((i) => (
                        <div className="projet">
                          <div className="mini">
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
                          </div>
                          <div key={i.key} className="desc">
                            <h4>{i.nom}</h4>
                            <p>{i.description}</p>
                            <div className="outil">
                              {i.outil1 && <ul>{i.outil1}</ul>}
                              {i.outil2 && <ul>{i.outil2}</ul>}
                              {i.outil3 && <ul>{i.outil3}</ul>}
                            </div>
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
                      <div className="titre">
                        <h1>Diplômes</h1>
                      </div>
                      <div className="dip">
                        <div className="card">
                          <h3 className="lieu">O'Clock</h3>
                          <h4 className="annee">2024</h4>
                          <p className="etude">Développeur Web et Web Mobile</p>
                          <p className="ou">En distanciel</p>
                        </div>
                        <div className="card">
                          <h3 className="lieu">Lycée St André</h3>
                          <h4 className="annee">2010</h4>
                          <p className="etude">
                            Baccalauréal Négociation <br /> et suivi de la
                            clientèle
                          </p>
                          <p className="ou">Niort</p>
                        </div>
                        <div className="card">
                          <h3 className="lieu">Lycée St André</h3>
                          <h4 className="annee">2008</h4>
                          <p className="etude">
                            Brevet d'Etudes Professionnel comptabilité
                          </p>
                          <p className="ou">Niort</p>
                        </div>
                      </div>
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
                      <div className="titre">
                        <h1> Savoir faire</h1>
                      </div>
                      <div className="faire">
                        <div className="card">
                          <div className="index">
                            <p>React.js</p>
                            <p>Next.js</p>
                            <p>JavaScript</p>
                            <p>TypeScript</p>
                            <p>Vite</p>
                          </div>
                          <h3>Font-End</h3>
                        </div>
                        <div className="card">
                          <div className="index">
                            <p>Node js</p>
                            <p>Firebase</p>
                            <p>PosgreSQL</p>
                          </div>
                          <h3>Back-End</h3>
                        </div>
                        <div className="card">
                          <div className="index">
                            <p>Figma</p>
                            <p>Photoroom</p>
                            <p>Canva</p>
                            <p>Blender</p>
                          </div>
                          <h3>Design et céation visuel</h3>
                        </div>
                        <div className="card">
                          <div className="index">
                            <p>Git / Github</p>
                            <p>Vercel</p>
                            <p>Visual Studio Code</p>
                          </div>
                          <h3>Autres</h3>
                        </div>
                      </div>
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
                      <div className="titre">
                        <h1>Savoir être</h1>
                      </div>
                      <div className="etre">
                        <div className="tableau">
                          <div className="adj">
                            <p>Motivé</p>
                            <p>Attentionné</p>
                            <p>Assertif</p>
                            <p>Coopératif</p>
                          </div>
                          <h4>Collectif</h4>
                        </div>
                        <div className="tableau">
                          <div className="adj">
                            <p>Autonome</p>
                            <p>Organisé</p>
                            <p>Curieux</p>
                            <p>Patient</p>
                          </div>
                          <h4>Individuel</h4>
                        </div>
                      </div>
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
