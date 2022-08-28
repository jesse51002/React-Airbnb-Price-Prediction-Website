//import bnbLogo from './Airbnb_Logo.png';
import "./App.css";
import Questions from './Questions.js'

function App() {
  return (
    <div className="GlobalContainer" style={{ backgroundImage: "url(/AirbnbBackground.jpg)"}}>
      <header className='AirbnbHeader'>
        <div className="AirbnbTitleDiv">
          <h1 className='HeaderTitle'>New York Airbnb Price Recommendation</h1>
        </div>
      </header>

      <div className="MainBodyDiv" >
          <Questions/>
      </div>

    </div>
  );

}

export default App;
