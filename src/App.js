import React from 'react';
import './App.css';
// using react-router-dom version 6
import {BrowserRouter, Route, Routes} from 'react-router-dom';

// importing custom components
import Header from './components/Header';
import FunctionMainContent from './components/FunctionMaincontent';
import ClassMainContent from './components/ClassmainContent';
import Footer from './components/Footer';
import Home from './components/Home';
import ApiCalls from './components/APICalls';
import StateEventHandler from './components/StateEventHandler';
import LifecycleDidMountPhase from './components/lifecyclephases/LifecycleDidMountPhase';
import LifecycleUnmountPhase from './components/lifecyclephases/LifecycleUnmountPhase';
import LifecycleComponentDidUpdatePhase from './components/lifecyclephases/LifecycleComponentDidUpdatePhase';
import ControlledComponentsSingleInput from './components/forms/ControlledComponentsSingleInput';
import MultipleComponentsHotelBookingForm from './components/forms/MultipleComponentsHotelBookingForm';
import HotelBookingForm from './components/forms/HotelBookingForm';
import FileUpload from './components/forms/FileUpload';

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
          <Route path="/controlledcomponentssingleinput" element={<ControlledComponentsSingleInput />} />
          <Route path="/multiplecomponentshotelbookingform" element={<MultipleComponentsHotelBookingForm />} />
          <Route path="/hotelbookingform" element={<HotelBookingForm />} />
          <Route path="/fileupload" element={<FileUpload />} />
          <Route path="/footer" element={<Footer />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
