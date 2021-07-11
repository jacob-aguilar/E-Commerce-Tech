import React , { useState, useEffect } from 'react'
import { ProductsList } from '../detail/ProductsList'
// import { ProductsCard } from '../detail/ProductsCard'
import {useSelector} from 'react-redux'

// import "bootstrap/dist/css/bootstrap.css";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import "../../../public/styles/style.css";
import Slider from "react-slick";
 

export const FooterBootstrap = () => {


    return (
      
      <footer id="footer">
      <div className="container">
    <div className="row text-center text-xs-center text-sm-left text-md-left">

          <div className="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-5">
    <ul className="list-unstyled list-inline social text-center">
      <li className="list-inline-item"><a href="https://www.facebook.com/applandhn/"><i className="fa fa-facebook"></i></a></li>
      <li className="list-inline-item"><a href="http://www.yourappland.com/es/"><i className="fa fa-twitter"></i></a></li>
      <li className="list-inline-item"><a href="https://www.instagram.com/appland.inc/?hl=es"><i className="fa fa-instagram"></i></a></li>
      <li className="list-inline-item"><a href="http://www.yourappland.com/es/"><i className="fa fa-google-plus"></i></a></li>
      <li className="list-inline-item"><a href="http://www.yourappland.com/es/" target="_blank"><i className="fa fa-envelope"></i></a></li>
    </ul>

              <hr/>
  </div>

      <div className="col-xs-12 col-sm-4 col-md-4">
                  <h5>Quick links</h5>
                  <ul className="list-unstyled quick-links">
                      <li><a href="http://www.yourappland.com/es/"><i className="fa fa-angle-double-right"></i>Home</a></li>
                      <li><a href="http://www.yourappland.com/es/"><i className="fa fa-angle-double-right"></i>About</a></li>
                      <li><a href="http://www.yourappland.com/es/"><i className="fa fa-angle-double-right"></i>FAQ</a></li>
                      <li><a href="http://www.yourappland.com/es/"><i className="fa fa-angle-double-right"></i>Get Started</a></li>
                      <li><a href="http://www.yourappland.com/es/"><i className="fa fa-angle-double-right"></i>Videos</a></li>
                  </ul>
      </div>


          <div className="col-xs-12 col-sm-4 col-md-4">
    <h5>Quick links</h5>
    <ul className="list-unstyled quick-links">
      <li><a href="http://www.yourappland.com/es/"><i className="fa fa-angle-double-right"></i>Home</a></li>
      <li><a href="http://www.yourappland.com/es/"><i className="fa fa-angle-double-right"></i>About</a></li>
      <li><a href="http://www.yourappland.com/es/"><i className="fa fa-angle-double-right"></i>FAQ</a></li>
      <li><a href="http://www.yourappland.com/es/"><i className="fa fa-angle-double-right"></i>Get Started</a></li>
      <li><a href="http://www.yourappland.com/es/"><i className="fa fa-angle-double-right"></i>Videos</a></li>
    </ul>
  </div>

          <div className="col-xs-12 col-sm-4 col-md-4">
    <h5>Quick links</h5>
    <ul className="list-unstyled quick-links">
      <li><a href="http://www.yourappland.com/es/"><i className="fa fa-angle-double-right"></i>Home</a></li>
      <li><a href="http://www.yourappland.com/es/"><i className="fa fa-angle-double-right"></i>About</a></li>
      <li><a href="http://www.yourappland.com/es/"><i className="fa fa-angle-double-right"></i>FAQ</a></li>
      <li><a href="http://www.yourappland.com/es/"><i className="fa fa-angle-double-right"></i>Get Started</a></li>
      <li><a href="http://www.yourappland.com/es/" title="Design and developed by"><i className="fa fa-angle-double-right"></i>Imprint</a></li>
                  
    </ul>

              
  </div>
          
              <div className=" col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-2 text-center text-white" >
              <hr/>
              <p className="h6">© All right Reversed.<a className="text-green ml-2" href="http://www.yourappland.com/es/" target="_blank">Appland</a></p>
              </div>
    
     
      
      </div>

          

      </div>

      </footer>
    )
}
