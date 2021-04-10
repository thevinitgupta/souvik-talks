
import './App.css';
import Header from './Header';
import Recent from './Recent';
import Top from "./Top";

function App() {
  return (
    <div className="app">
      <div className="app__container">
        <Header/>
        <Top/>
        <Recent/>
      </div>
      
    </div>
  );
}

export default App;
