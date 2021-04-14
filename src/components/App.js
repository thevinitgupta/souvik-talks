import Footer from './Footer';
import Header from './Header';
import Recent from './Recent';
import Top from "./Top";
import '../css/App.css';
import firebase from "../config/firebase";
import 'firebase/firestore';
import { useEffect, useState } from 'react';

const scrollToContact = ()=> window.scrollTo({
  top : document.documentElement.scrollHeight,
  behavior:"smooth"
})
function App() {
  const [recent,setRecent] = useState([]);
  // useEffect(() => {
  //   const fetchRecentArticles = ()=> {
  //     const db = firebase.firestore();

  //     const articles = await db.collection("Articles").get();

  function getArticles(){
    const db = firebase.firestore();
      db.collection("Articles")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
        //      doc.data() is never undefined for query doc snapshots
          setRecent((prevValue)=> {
            return [
              ...prevValue,
              {
                id: doc.id,
                data : doc.data()
              }
            ]
          })
         });
    })
    .catch((error) => {
      console.log("Error getting articles: ", error);
  });
  }
  useEffect(getArticles,[]);
  // }, [])
  return (
    <div className="app">
      <div className="app__container">
        <Header scrollToContact={scrollToContact}/>
        <Top/>
        <Recent recent={recent}/>
        <Footer/>
      </div>
      
    </div>
  );
}

export default App;
