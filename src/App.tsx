import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import MainPage from './pages/Main';
import ErrorPage from './pages/Error';
import AboutUs from './pages/AboutUs';
import Footer from './components/Footer';
import CreatePerson from './components/Form';

function App() {
  alert('Please, give me more time! :)');
  return (
    <>
      <Navigation />
      <main className="main">
        <Routes>
          <Route path="/" element={<MainPage />}></Route>
          <Route path="/about-us" element={<AboutUs />}></Route>
          <Route path="/add-person" element={<CreatePerson />}></Route>
          <Route path="*" element={<ErrorPage />}></Route>
        </Routes>
      </main>
      <div className="success-adding">
        <p className="success-adding-text">Person are added!</p>
      </div>
      <Footer />
    </>
  );
}

export default App;
