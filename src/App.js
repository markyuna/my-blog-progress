import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

import "./css/app.css";
import Menu from "./components/Menu";
import Home from "./pages/Home";
import TechnoAdd from "./pages/TechnoAdd";
import TechnoList from "./pages/TechnoList";
import { useLocalStorage } from "./hooks/useLocalStorage";
import SweetAlert from 'react-bootstrap-sweetalert';

function App() {
  const STORAGE_KEY = "technos";
  const [storedTechnos, setStoredTechnos] = useLocalStorage(STORAGE_KEY, []);
  const [technos, setTechnos] = useState(storedTechnos);
  const [showAlert, setShowAlert] = useState(false);
  const [technoToDelete, setTechnoToDelete] = useState(null);

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
    setTechnoToDelete(id);
    setShowAlert(true);
  }

  function onConfirm() {
    setTechnos((prevTechnos) =>
      prevTechnos.filter((tech) => tech.technoid !== technoToDelete),
    );
    setShowAlert(false);
  }

  function onCancel() {
    setShowAlert(false);
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
      {showAlert && (
        <SweetAlert
          warning
          showCancel
          confirmBtnText="Eliminar"
          confirmBtnBsStyle="danger"
          cancelBtnBsStyle="default"
          title="¿Estás seguro de eliminar este techno?"
          onConfirm={onConfirm}
          onCancel={onCancel}
          focusCancelBtn
        >
          El techno seleccionado será eliminado permanentemente.
        </SweetAlert>
      )}
    </>
  );
}

export default App;
