import logo from './logo.svg';
import './App.css';
import Ul from './Ul';

function App() {
  
  const mina = [10, 15, 20, 30, 40];
  

  const variable = ["Bla", "bla", "truc"];
  const novi = [2,4,6,8,10]

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className="WelcomeMessage">
          Welcome to UQ Design!
        </p>

        <Ul variable={variable} title="Variable title" description="OPIS"/>
        <Ul variable={novi}/>
          
<Ul variable={mina} description="test123131"/>

          <br/>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
    
      </header>
    </div>
  )
  }

export default App;