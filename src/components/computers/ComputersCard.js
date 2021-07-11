import React from 'react';
import ReactStars from 'react-rating-stars-component';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { activeNote } from '../../actions/notes';



export const ComputersCard = ({
  id,
  name,
  img,
  longdescription,
  shortdescription,
  calification
}) => {


  const dispatch = useDispatch();
  const handleEntryClick = () => {
    dispatch( 
        activeNote( id, {
            name, img, shortdescription, longdescription, calification
        })
    );
}


  const handlerWatch = () => {
   console.log("click");

}

  const ratingChanged = (newRating) => {
    console.log(newRating);
  };

  
  

  return (
    <div className="col-md-3 col-sm-3 col-xs-12" 
    onClick={ handleEntryClick }
    >
      <div class="container-card container-space-card" id={id}>
                <div class="col-md-3 col-sm-3 col-xs-12">
                  <div class="slider-item">
                    <div class="slider-image">
                      <Link to={`/detail-review/${id}`}>
                      <img src={img}  class="img-responsive" alt="a" />
                      </Link>
                    </div>
                    <div class="slider-main-detail">
                      <div class="slider-detail">
                      <div class="product-detail">
                      <h5> {name} </h5>
                      <h5 class="detail-price">{shortdescription}</h5>
                      </div>
                      </div>
                    <div class="cart-section">
                      <div class="row">
                        <div className="ml-3">
                            <ReactStars
                              count={calification}
                              onChange={ratingChanged}
                              size={19}
                              color={"#ffbf00"}
                              edit={false}
                            />
                        </div>
                          <div class="col-md-6 col-sm-12 col-xs-6">
                          <a href="#" onClick={handlerWatch} class="AddCart btn btn-info"><i class="fa fa-shopping-cart"  aria-hidden="true"></i> Watch now</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
        </div>          
     </div>



  )
}

