import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Mahakaleshwar from './Pages/Mahakaleshwar'; // Import your Mahalakeshwar component
import { Routes, Route } from 'react-router-dom'; // Import Routes and Route

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/mahakaleshwar" element={<Mahakaleshwar />} /> 
      </Routes>
    </>
  );
}

export default App;
