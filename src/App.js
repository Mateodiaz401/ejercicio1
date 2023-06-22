import logo from './logo.svg';
import './App.css';
import ListContacto from './components/container/ListContactoA';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ListContacto
          nombre="Mateo"
         apellido="Lopez"
         email="mateo.lopez@example.com"
         conectado={true}
        />
      </header>
    </div>
  );
}

export default App;
