import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

import "./css/app.css";
import Menu from "./components/Menu";
import Home from "./pages/Home";
import TechnoAdd from "./pages/TechnoAdd";
import TechnoList from "./pages/TechnoList";
import { useLocalStorage } from "./hooks/useLocalStorage";

function App() {
  const STORAGE_KEY = "technos";
  const [storedTechnos, setStoredTechnos] = useLocalStorage(STORAGE_KEY, []);
  const [technos, setTechnos] = useState(storedTechnos);

  useEffect(() => {
    console.log("App component mounted");
  }, []);

  useEffect(() => {
    setStoredTechnos(technos);
    console.log("Technos changed");
  }, [technos, setStoredTechnos]);

  function handleAddTechno(techno) {
    console.log("handleAddTechno", techno);
    setTechnos((prevTechnos) => [
      ...prevTechnos,
      { ...techno, technoid: uuidv4() },
    ]);
  }

  function handleDeleteTechno(id) {
    setTechnos((prevTechnos) =>
      prevTechnos.filter((tech) => tech.technoid !== id)
    );
  }

  return (
    <>
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/add"
          element={<TechnoAdd handleAddTechno={handleAddTechno} />}
        />
        <Route
          path="/list"
          element={
            <TechnoList
              technos={technos}
              handleDeleteTechno={handleDeleteTechno}
            />
          }
        />
      </Routes>
    </>
  );
}

export default App;
