import './App.css';

// importing components
import Header from './components/header';
import FunctionMainContent from './components/functionmaincontent';
import ClassMainContent from './components/classmaincontent';
import Footer from './components/footer';

function App() {
  return (
    <div>
      <Header />
      <hr />
      {/* send data to Function or Class MainContent */}
      <ClassMainContent pageTitle = {"Class Component Header"} 
      numTopics = {5} />
     <hr />
      <FunctionMainContent pageTitle = {"Function Component Header"} 
      numTopics = {10} />
      <hr />
      <Footer />
    </div>
  );
}

export default App;
