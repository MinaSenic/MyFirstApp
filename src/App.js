import logo from './logo.svg';
import './App.css';

function App() {
  const variable = ["Bla", "bla", "truc"];
  const mina = [10, 15, 20, 30, 40];

  let output = "";

  for (let i =0; i< mina.length;i++) {
    output += mina[i]+ " ";
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className="WelcomeMessage">
          Hello & Welcome to our Unique world of jewelry! Let us take you on a jurney through the cristals...
        </p>
        <ul className="Selection">
          {variable.map (function (item) {
            return (
              <li>
                {item}
                </li>

            )
          }
          )}
          </ul>
          
          {mina.map (function(item) {
            return (
              <span>{item}</span>
            )
          }
          )}
         

          {variable}
          <br/>
          {output}
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
  );
}

export default App;
