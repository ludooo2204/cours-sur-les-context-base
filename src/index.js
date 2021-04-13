import React, { useState, useContext } from "react";
import ReactDOM from "react-dom";

import DataContext from "./DataContext";

import "./styles.css";

// Composant en fin de chaine
// Il reçoit dans ses props le thème et la fonction qui permet de le changer
function ThemeChoice(props) {
  const { data, updateData } = useContext(DataContext);

  const handleChange = event => {
    const value = event.currentTarget.value;
    updateData(value);
  };

  return (
    <input placeholder="texte a saisir" onChange={handleChange}></input>
  );
}

// Composant en deuxième ligne
// Il reçoit dans ses props le thème et la fonction qui permet de le changer
// Notons qu'en vrai il en a rien à foutre il s'en sert pas lui même
// C'est uniquement pour pouvoir le passer au composant ThemeChoice ...
function ToolBar() {
  return (
    <div>
      <button>Zoomer</button>
      <button>Dezoomer</button>
      <ThemeChoice />
    </div>
  );
}

function App() {
  // Le thème est en fait une classe CSS qui englobera notre app
  // Ca change juste le couleur de la typo ...
  const [data, setData] = useState(null);

  const contextValue = {
    data:data,
    updateData: setData
  };

  return (
    <DataContext.Provider value={contextValue}>
      <div >
        <ToolBar />
        <p>context utilisé : {JSON.stringify(data)}</p>
      </div>
    </DataContext.Provider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
