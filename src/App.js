import React from 'react';
import './App.css';
// using react-router-dom version 6
import {BrowserRouter, Route, Routes} from 'react-router-dom';

// importing custom components
import Header from './components/header';
import FunctionMainContent from './components/functionmaincontent';
import ClassMainContent from './components/classmaincontent';
import Footer from './components/footer';
import Home from './components/home';
import ApiCalls from './components/apicalls';

// console.log(React.version);

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home pageTitle = {"Home Page"} />} />
          <Route path="/header" element={<Header />} />
          <Route path="/classmaincontent" element={<ClassMainContent pageTitle = {"Class Component Header"} numTopics = {5} />} />
          <Route path="/functionmaincontent" element={<FunctionMainContent pageTitle = {"Function Component Header"} numTopics = {10} />} />
          <Route path="/apicalls" element={<ApiCalls />} />
          <Route path="/footer" element={<Footer />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
