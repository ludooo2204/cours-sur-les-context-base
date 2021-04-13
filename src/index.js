import React, { useState, useContext } from "react";
import ReactDOM from "react-dom";

import DataContext from "./DataContext";
import Test from "./Test";

import "./styles.css";


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
        <Test></Test>
        <p>context utilisé : {JSON.stringify(data)}</p>
      </div>
    </DataContext.Provider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
