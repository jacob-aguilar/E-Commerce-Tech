import React from 'react';
import ReactStars from 'react-rating-stars-component';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { activeNote } from '../../actions/notes';



export const ComputersCard = ({
  id,
  name,
  img,
  longdescription,
  shortdescription,
  calification,
  category,
  words,
  create,
}) => {

  const { comentarios } = useSelector((state) => state.comentarios);
    console.log(comentarios);

  const dispatch = useDispatch();
  const handleEntryClick = () => {
    dispatch( 
        activeNote( id, {
            name, img, shortdescription, longdescription, calification, category,
            words,
            create
        })
    );
}


  const ratingChanged = (newRating) => {
    console.log(newRating);
  };

  
  

  return (
    <div className="col-md-3 col-sm-3 col-xs-12" 
    onClick={ handleEntryClick }
    >
      <div class="container-card container-space-card" onClick={ handleEntryClick } id={id}>
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
                      <h5 class="detail-price" rows="1">{shortdescription}</h5>
                      </div>
                      </div>
                    <div class="cart-section">
                      <div class="row">
                        <div className="col-md-6 col-sm-12 col-xs-6">
                            <ReactStars
                              count={calification}
                              onChange={ratingChanged}
                              size={19}
                              color={"#ffbf00"}
                              edit={false}
                            />
                        </div>
                          <div class="col-md-6 col-sm-12 col-xs-6">
                          <Link to={`/detail-review/${id}`}>
                          <a href="#" class="AddCart btn btn-info border-i"><i class="fa fa-external-link"  aria-hidden="true"></i> Watch now</a>
                          </Link>
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

