//import {firebase} from "../config/firebase.js";
import Footer from './Footer';
import Header from './Header';
import Recent from './Recent';
import Top from "./Top";
import '../css/App.css';

// const db = firebase.firestore();

// const articles = db.collection("Articles");
const scrollToContact = ()=> window.scrollTo({
  top : document.documentElement.scrollHeight,
  behavior:"smooth"
})
function App() {
  return (
    <div className="app">
      <div className="app__container">
        <Header scrollToContact={scrollToContact}/>
        <Top/>
        <Recent />
        <Footer/>
      </div>
      
    </div>
  );
}

export default App;
