import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import ElectricityAndDiagnosis from './components/ElectricityAndDiagnosis';
import Conditioning from './components/Conditioning';
import Mechanics from './components/Mechanics';
import Lab from './components/Lab';
import Hybrids from './components/Hybrids';
import Regulation from './components/Regulations';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="electricity-and-diagnosis" element={<ElectricityAndDiagnosis />} />
          <Route path="conditioning" element={<Conditioning />} />
          <Route path="mechanics" element={<Mechanics />} />
          <Route path="lab" element={<Lab />} />
          <Route path="hybrids" element={<Hybrids />} />
          <Route path="regulation" element={<Regulation />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
