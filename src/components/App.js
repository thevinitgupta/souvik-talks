import Footer from './Footer';
import Header from './Header';
import Recent from './Recent';
import Top from "./Top";
import '../css/App.css';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Post from './Post';
import Articles from './Articles';
import Article from './Article';


const scrollToContact = ()=> window.scrollTo({
  top : document.documentElement.scrollHeight,
  behavior:"smooth"
})
function App() {
  
  return (
    <div className="app">
      <div className="app__container">
      <Router>
        <Header scrollToContact={scrollToContact}/>
        <Switch>
          <Route path="/" exact>
            <Top/>
            <Recent/>
            <Footer/>
          </Route>
          <Route path="/post">
            <Post/>
          </Route>
          <Route path="/article/:id">
            <Article/>
          </Route>
          <Route path="/all-articles">
            <Articles/>
            <Footer/>
          </Route>
        </Switch>
      </Router>
        
      </div>
      
    </div>
  );
}

export default App;
