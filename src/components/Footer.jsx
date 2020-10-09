import React, { Component } from 'react';
import LOGO_MAIN from './fkp_logo.jpg';
class Footer extends Component {
    
    render() { 
        return ( 
            <div className="container-fluid" style={{backgroundColor:"black"}}>
                <footer>
                    <div className="row ">
                        <div className="col-md-4">
                           
                        </div>
                        <div className="col-md-4 justify-content-center">
                            <div className="" style={{padding:"25px"}}> <img src={LOGO_MAIN} alt="Logo FKP" height="60px" width="250px" /> 
                            </div>
                            <div className=""> </div>
                            <div className="" style={{color:"whitesmoke"}}><center> </center></div>
                            <div className="" style={{color:"whitesmoke"}}><center><i class="fa fa-instagram" style={{padding:"3%"}} aria-hidden="true"></i><i class="fa fa-envelope  "style={{padding:"3%"}} aria-hidden="true"></i><i class="fa fa-facebook"style={{padding:"3%"}} aria-hidden="true"></i><i class="fa fa-map-marker" style={{padding:"3%"}} aria-hidden="true"></i> </center></div>
                        </div>
                        <div className="col-md-4">
                            
                        </div>
                    </div>
                </footer>
            </div>
         );
    }
}
 
export default Footer;