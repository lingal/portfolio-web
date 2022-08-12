import { NavBar, Banner, Skills, Projects, Contacts } from './components';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      <Contacts/>
    </div>
  );
}

export default App;
