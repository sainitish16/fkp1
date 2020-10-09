import React, { Component } from 'react';
class Counter extends Component {
    
    render() { 
        console.log("Hello world");
        return (
            <div>
                {/* <!-- navbar --> */}
    <nav class="navbar navbar-expand-lg bg-light navbar-light justify-content-center">
        <div class="justify-content-between">
            <ul class="navbar-nav ml-auto">
                <li class="nav-item">
                    <a href="one.html" class="nav-link"> HOME</a>
                </li>
                <li class="nav-item">
                    <a href="#" class="nav-link"> TESTIMONIALS</a>
                </li>
                <li class="nav-item">
                  {/* <!-- dropdown --> */}
                  <div class="dropdown">
                    <button  class="btn dropdown-toggle" data-toggle="dropdown">
                      PORTFOLIO
                    </button>
                    <div class="dropdown-menu">
                      <a class="dropdown-item" href="#">WEDDINGS</a>
                      <a class="dropdown-item" href="#">POTRAITS</a>
                      <a class="dropdown-item" href="#">LANDSCAPES AND STREET</a>
                    </div>
                  </div>
                    {/* <!-- <a href="#" class="nav-link"> TESTIMONIALS</a> --> */}
                </li>
                <li class="nav-item">
                    <a href="#" class="nav-link"> FAQA</a>
                </li>
                <li class="nav-item">
                    <a href="contact.html" class="nav-link"> CONTACT</a>
                </li>
                <li class="nav-item">
                    <a href="admin.html" class="nav-link"> ADMIN</a>
                </li>
            </ul>
        </div >
        
    </nav>
    {/* <!-- <div><img src="images/bangles.jpeg" alt="New York" style="padding: 18%;"></div> --> */}
    {/* <!-- logo --> */}
    <div align="center" style={{"background-color": "rgb(0, 0, 0)", "margin-top": "-40PX"}}>
        <img src="logo.jpg" height="200px" width="" />
    </div> 
    {/* <!-- carousel --> */}
    <div id="demo" class="carousel slide" data-ride="carousel">

        {/* <!-- Indicators --> */}
        <ul class="carousel-indicators">
          <li data-target="#demo" data-slide-to="0" class="active"></li>
          <li data-target="#demo" data-slide-to="1"></li>
          <li data-target="#demo" data-slide-to="2"></li>
        </ul>
      
        {/* <!-- The slideshow --> */}
        <div class="carousel-inner">
            <div class="carousel-item active">
               <div class="row" align="center">
                     <div class="col-lg-4">
                        <img src="images/DSC09536-01-01.jpeg" alt="Los Angeles" />
                      </div>
                
                      <div class="col-lg-3">
                          <img src="images/Screenshot_2020-03-07-17-02-15-701_com.miui.videoplayer-01.jpeg" alt="Chicago" />
                      </div>
                      <div class="col-lg-5">
                        <img src="images/LRM_EXPORT_41460201976833_20191212_094733694-01.jpeg" alt="New York" style={{"padding": "18%"}} />
                      </div>
                </div>
        </div>
      
        {/* <!-- Left and right controls --> */}
        <a class="carousel-control-prev" href="#demo" data-slide="prev">
          <span class="carousel-control-prev-icon"></span>
        </a>
        <a class="carousel-control-next" href="#demo" data-slide="next">
          <span class="carousel-control-next-icon"></span>
        </a>
        </div>
        </div>  <br/>
            <div>
                <center><button class="pf">Visit portfolio to see more work</button></center>
            </div>
                   
        <div class="container">
     <center> <h2 class="display-3"> Team behind the lense </h2>     </center>
     <p id="sa">Born and bred in the godavarikhani, I grew up on the beautiful beaches of Nature’s Valley, Wilderness and Vic Bay where I developed a pretty easy-going outlook to life and people. Life was good, friends were awesome, and the misty coastline of the Garden Route always kept me smiling.
  
       At the age of 20, I moved to Cape Town which landed me slap bang in the middle of the fashion and film industry as a model where my interest in photography started. After a few years I decided to take a break and tackle what I learnt to love most about the industry, the creative challenge of being behind the lens.</p>
        </div>
  <div class="container-fluid footer">
      <div class="row">
         <div class="col-lg-4">
          <center>  <h4>About FkP</h4></center> 
           <p> Webfactory is a boutique graphic design, web design and development studio in Cape Town, South Africa. We primarily focus on website design, custom PHP development, content management systems, e-commerce systems, maintenance, social media and email marketing. We also offer our clients graphic design services for corporate identities/logos, printed stationery and advertising services.</p>
         </div>
         <div class="col-lg-2">
           <h4> services</h4>
           <p>  weddings<br /> video songs<br /> model shoots<br /> short fims<br /> special events </p>
             
         </div>
         <div class="col-lg-3">
           <h4>conatc us </h4>
           +91-9393669998<br />
           samanthsam191@gmail.com
         </div>
         <div class="col-lg-3"> 
           <h6> find us on</h6>

         </div>

      </div>
  </div>
            </div>
            
        );
    }
}
 
export default Counter;