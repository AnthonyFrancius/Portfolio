import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="header">Anthony Francius</header>
      <main className="main">
        <div className="gauche">
          <div className="ligne1">
            <div className="accroche"></div>
            <div className="photo">
              <img />
            </div>
          </div>
          <div className="ligne2">
            <div className="contact"></div>
            <div className="description"></div>
          </div>
        </div>
        <div className="droite">
          <div className="experience"></div>
          <div className="reseaux"></div>
        </div>
      </main>
    </div>
  );
}

export default App;
