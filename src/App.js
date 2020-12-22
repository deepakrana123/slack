import React from "react" ;
import './App.css';
import Header from './Header';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Chat from "./Chat";
import Login from "./Login"; 
import Sidebar from "./Sidebar";
import { useStateValue } from "./StateProvider";

function App() {

    
    const[{user}]=useStateValue();
    return(
      <div className="app">
      <Router>
     { /* {!user?(
          <Login/>
       ):(
          <h1>hii</h1>
       )} */}
                
       <Header/>   
       <div className="app_body">
    <Sidebar/>
       <Switch>
       
       <Route path="/room/:roomId">
       <Chat/>
       </Route>
       <Route path="/">
      
       </Route>
       </Switch>
       </div>
         

       
      
       </Router>
       </div>
       
    )
}

export default App;
   