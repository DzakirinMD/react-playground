import React from 'react';
import './App.css';
// using react-router-dom version 6
import {BrowserRouter, Route, Routes} from 'react-router-dom';

// importing custom components
import Home from './components/home';

// console.log(React.version);

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/header" element={<Header />} />
          <Route path="/classmaincontent" element={<ClassMainContent pageTitle = {"Class Component Header"} numTopics = {5} />} />
          <Route path="/functionmaincontent" element={<FunctionMainContent pageTitle = {"Function Component Header"} numTopics = {10} />} />
          <Route path="/footer" element={<Footer />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
