import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Hobbies from './components/Hobbies';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="app">
      <Header />
      <main id="inicio">
        <Hero />
        <About />
        <Hobbies />
      </main>
      <Footer />
    </div>
  );
}

export default App;
