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
import StateEventHandler from './components/stateeventhandler';
import LifecycleDidMountPhase from './components/lifecyclephases/LifecycleDidMountPhase';
import LifecycleUnmountPhase from './components/lifecyclephases/LifecycleUnmountPhase';
import LifecycleComponentDidUpdatePhase from './components/lifecyclephases/LifecycleComponentDidUpdatePhase';


// console.log(React.version);

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          {/* passing props  pageTitle and numTopics to component */}
          <Route path="/" element={<Home pageTitle = {"Home Page"} />} />
          <Route path="/header" element={<Header />} />
          <Route path="/classmaincontent" element={<ClassMainContent pageTitle = {"Class Component Header"} numTopics = {5} />} />
          <Route path="/functionmaincontent" element={<FunctionMainContent pageTitle = {"Function Component Header"} numTopics = {10} />} />
          <Route path="/apicalls" element={<ApiCalls />} />
          <Route path="/eventhandlers" element={<StateEventHandler />} />
          <Route path="/lifecycledidmountphase" element={<LifecycleDidMountPhase initialNames={['Zack', 'Halia']} />} />
          <Route path="/lifecycleunmountmountphase" element={<LifecycleUnmountPhase initialNames={['Ronald', 'Donald', 'Elise', 'Kim']} />} />
          <Route path="/lifecyclecomponentdidupdatephase" element={<LifecycleComponentDidUpdatePhase />} />
          <Route path="/footer" element={<Footer />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
