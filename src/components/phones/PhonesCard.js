import React from 'react';
import ReactStars from 'react-rating-stars-component';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { activeNote } from '../../actions/notes';



export const PhonesCard = ({
  id,
  name,
  img,
  longdescription,
  shortdescription,
  category,
  words,
  create,
}) => {

  let { comentarios } = useSelector((state) => state.comentarios);
    console.log(comentarios);

  const dispatch = useDispatch();
  const handleEntryClick = () => {
    dispatch( 
        activeNote( id, {
            name, img, shortdescription, longdescription, category,
            words,
            create
        })
    );
}

    // Return calification
  comentarios = comentarios.filter(computers => computers.idComment === id);
  let calificacion = 0;

  for (let i = 0; i < comentarios.length; i++) {
    calificacion = calificacion + comentarios[i].calificacion
  }
  if (calificacion !== 0){
    calificacion = Math.round(calificacion / comentarios.length);
  }

  let rowsCalification = [];
  for (let i = 0; i < calificacion; i++) {
    rowsCalification.push(
      <img key={i} src={`/icons/star-filled.svg`} alt="" />
    );
  }
  for (let i = calificacion; i < 5; i++) {
    rowsCalification.push(
      <img key={i} src={`/icons/star-empty.svg`} alt="" />
    );
  }

  return (
    <div className="col-md-3 col-sm-3 col-xs-12" 
    onClick={ handleEntryClick }
    >
      <div class="container-card container-space-card" onClick={ handleEntryClick } id={id}>
                <div class="col-md-3 col-sm-3 col-xs-12">
                  <div class="slider-item">
                    <div class="slider-image">
                      <Link to={`/detail-review-phones/${id}`}>
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
                        <div className="col-md-6 col-sm-12 col-xs-6">
                        <div>
                            {rowsCalification}
                            </div> 
                        </div>
                          <div class="col-md-6 col-sm-12 col-xs-6">
                          <Link to={`/detail-review-phones/${id}`}>
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

