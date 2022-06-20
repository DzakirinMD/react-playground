import logo from './logo.svg';
import './App.css';

// importing components
import Header from './components/header';
import MainContent from './components/maincontent';
import Footer from './components/footer';

function App() {
  return (
    <div>
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;
