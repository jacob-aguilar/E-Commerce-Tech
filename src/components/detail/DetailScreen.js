import React from 'react';
import ReactStars from 'react-rating-stars-component';
import { Link } from 'react-router-dom';



export const DetailScreen = () => {
    return (
        <div class="container">
          <div class="row">
            <div class="col-lg-6 col-sm-12 col-12">      
              <div class="carousel-item active">
                <img src="https://firebasestorage.googleapis.com/v0/b/appland-e-commerce.appspot.com/o/s-l500%20(1).jpg?alt=media&token=485034ac-8eda-4e6c-a174-08015eb59897"/>
              </div>
            </div>
            <div class="col-lg-6 col-sm-12 col-12">
               <p class="barangbaru text-center"></p>
          
             <div >
                <div>
                   <p 
                    className="margin-top">
                    <h2>T-Product name</h2>
                    <ReactStars
                     size={20}
                     color={"#ffbf00"}
                     edit={false}
                     />
                    </p>                         
                 </div>
             </div>
          
              <p>Product description</p>  
              <p><b>Category:</b> Tecnology</p>
              <p><b>Create:</b> Friday 02</p>
              <p><b>Tag:</b> computadora</p>
              <p><button type="button" class="btn btn-primary">Return</button></p>
            </div>
          </div>
        </div>
    )
}
