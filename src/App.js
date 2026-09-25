import './App.css';
import Header from './components/fail header/header.jsx';
import Hero from './components/file Hero/Hero.jsx';
import Project from './components/project/project.jsx';
import AboutMe from './components/aboutMe/aboutMe.jsx';
import ContactMe from './components/contactMe/contactMe.jsx';
import Footer from './components/footer/footer.jsx'

function App() {
  return (
    <div className="App">
       <Header />
       <Hero />
       <Project />
       <AboutMe />
       <ContactMe />
       <Footer />
    </div>
  );
}

export default App;