import { useState } from 'react';
import {Routes, Route} from 'react-router-dom';

import './css/app.css';
import Home from './pages/Home';
import Menu from './components/Menu';
import TechnoAdd from './pages/TechnoAdd';
import TechnoList from './pages/TechnoList';

function App() {
  const [technos, setTechnos] = useState([]);
  const addTechno = (techno) => {
    setTechnos([...technos, techno]);
  }

  function handleAddTechno(techno) {
    console.log('handleAddTechno', techno);
  }

  return (
    <>
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<TechnoAdd handleAddTechno={handleAddTechno}/>} />
        <Route path="/list" element={<TechnoList />} />
      </Routes>
    </>
  );
}

export default App;
