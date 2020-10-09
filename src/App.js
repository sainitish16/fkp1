import React from 'react';
import logo from './logo.svg';
import './App.css';
import Hello from './components/Helloworld';
import Navbar from './components/Navbar.jsx';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Footer from './components/Footer';
import Homepage from './components/Homepage';
import Contact from './components/Contact';
import Wedding from './components/Wedding';
import Contactus from './components/Contactus.jsx';

 
class App extends React.Component{
  constructor(props){
    super(props)
    this.state={
      brand: "ford",
      color: "red"


    };
  }
  
  render()
   {
     return(
       <div className='App' >
         <Router>
           <Navbar />
           
           <Switch>
           
           <Route exact path="/" component={Homepage} />
             <Route exact path="/hello" component={Hello} />
             <Route exact path="/wedding" component={Wedding} />
             <Route exact path="/Contactus" component={Contactus} />
           </Switch>
           <Footer/>
           </Router>
           
          
      </div>
    
     );
   }
  

}
export default App;
