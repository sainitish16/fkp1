import React from 'react';
// import { render } from 'react-dom';
import {Link} from "react-router-dom"; 
import LOGO_MAIN from './fkp_logo.jpg';
class Navbar extends React.Component{
    render(){
        return(
    
    <nav class="navbar navbar-expand-lg navbar-dark " style={{backgroundColor:"black"}}>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
  </button>
  {/* <a class="navbar-brand" href="#"><img src={LOGO_MAIN} alt="Logo FKP" height="60px" width="250px" /> </a> */}

  <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
            <ul class="navbar-nav   ml-auto  ">
                            <li class="nav-item active"  ><Link class="nav-link" to="/">Home</Link></li>
                            <li class="nav-item active"><Link class="nav-link" to="/wedding">Weddings</Link></li>
                            <li class="nav-item active"><Link class="nav-link" to="/s">Portraits</Link></li> 
                            <li class="nav-item active"><Link class="nav-link" to="/sa">Wallpapers</Link></li> 
                            <li class="nav-item active"><Link class="nav-link" to="/sas">About us</Link></li> 
                            <li class="nav-item active"><Link class="nav-link" to="/Contactus">Contact us</Link></li>
            </ul>
    
  </div>
</nav>

        );
    }
}
export default Navbar