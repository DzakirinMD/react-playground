import './App.css';

// importing components
import Header from './components/header';
import MainContent from './components/maincontent';
import Footer from './components/footer';

function App() {
  return (
    <div>
      <Header />
      {/* send data to MainContent */}
      <MainContent pageTitle = {"Weight Loss Competition"} 
      numTopics = {5} />
      <Footer />
    </div>
  );
}

export default App;
