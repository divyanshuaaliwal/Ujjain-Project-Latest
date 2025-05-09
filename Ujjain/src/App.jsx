import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
// import Mahakaleshwar from './Pages/Mahakaleshwar'; // Import your Mahalakeshwar component
import { Routes, Route } from 'react-router-dom'; // Import Routes and Route
import TemplePage from './components/TemplePage';

const App = () => {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<Hero />} />
                <Route path="/destination/:dname" element={<TemplePage />} />
            </Routes>
        </>
    );
}

export default App;
