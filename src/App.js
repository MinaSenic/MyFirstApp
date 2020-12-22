import logo from './logo.svg';
import './App.css';
import Ul from './Ul';
import Header from './Header';
import Footer from './Footer';
import Stranica from './Pagination';

function App() {

  const mina = [10, 15, 20, 30, 40];


  const variable = ["Bla", "bla", "truc"];
  const novi = [2, 4, 6, 8, 10]

  return (
    <div className="App">
      <Header
      />

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className="WelcomeMessage">
          Welcome to UQ Design!
        </p>

        <Ul variable={variable} title="Variable title" description="OPIS" startingNumber="10" name="Prva" />
        <Ul variable={novi} startingNumber="23" name="Druga" />
        <Ul variable={mina} description="test123131" startingNumber="30" name="Treca" />

        <br />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

      </header>

      <Footer/>
      <Stranica />
    </div>
  )
}

export default App;