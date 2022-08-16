import { NavBar, Banner, Skills, Projects, Contacts, Footer } from './components';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      <Contacts />
      <Footer/>
    </div>
  );
}

export default App;
