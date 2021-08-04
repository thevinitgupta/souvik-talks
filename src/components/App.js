import { AuthProvider } from "../context/userContext";
import Footer from './Footer';
import Header from './Header';
import Recent from './Recent';
import Signup from './Signup';
import Top from "./Top";
import '../css/App.css';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Post from './Post';
import Articles from './Articles';
import Article from './Article';
import Login from "./Login";


const scrollToContact = ()=> window.scrollTo({
  top : document.documentElement.scrollHeight,
  behavior:"smooth"
})
function App() {
  
  return (
    <div className="app">
      <div className="app__container">
      <AuthProvider>
        <Router>
          <Header scrollToContact={scrollToContact}/>
          <Switch>
            <Route path="/" exact>
              <Top/>
              <Recent/>
              <Footer/>
            </Route>
            
            <Route path="/article/:id">
              <Article/>
            </Route>
            <Route path="/all-articles">
              <Articles/>
              <Footer/>
            </Route>
            <Route path="/post">
              <Post/>
            </Route>
            <Route path="/signup">
              <Signup/>
            </Route>
            <Route path="/login">
              <Login/>
            </Route>
          </Switch>
        </Router>
      </AuthProvider>        
      </div>
    </div>
  );
}

export default App;
