import logo from './logo.svg';
import './App.css';
import PersonCard from './components/PersonCard';

const App = () => {



  return (
    <div className="App">
      <header className="App-header">
      <PersonCard firstName="David" lastName="Lee" age={ 30 } hairColor="Brown" />
      <PersonCard firstName="Stephen" lastName="Diaz" age={ 28 } hairColor="Black" />
      <PersonCard firstName="Yang" lastName="Cui" age={ 25 } hairColor="Black" />
      <PersonCard firstName="Minh" lastName="Le" age={ 33 } hairColor="Blonde" />
      </header>
    </div>
  );
}

export default App;
