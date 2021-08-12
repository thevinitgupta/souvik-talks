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
import NotFound from "./NotFound";


function App() {
  
  return (
    <div className="app">
      <div className="app__container">
      <AuthProvider>
        <Router>
          <Header />
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
            <Route path="/contact">
              <Footer/>
            </Route>
            <Route component={NotFound} />
          </Switch>
        </Router>
      </AuthProvider>        
      </div>
    </div>
  );
}

export default App;
