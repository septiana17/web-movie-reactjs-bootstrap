import './App.css';
import NavigationBar from './components/NavigationBar';
import Intro from './components/Intro';
import Tranding from './components/Tranding';
import Superhero from './components/Superhero';
import "./style/landingPage.css";

function App() {
  return (
    <div>
      {/* Intro Section */}
      <div className="background">
        <NavigationBar />
        <Intro />
      </div>
      {/* End of Intro */}

      {/* Tranding Section */}
      <div className="tranding">
        <Tranding />
      </div>
      {/* End of Tranding */}

      {/* Superhero Section */}
      <div className="superhero">
        <Superhero />
      </div>
      {/* End of Superhero */}

    </div>
  );
}

export default App;
