//Donde se detalla el producto al darle clicks.
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import ReactStars from 'react-rating-stars-component';
import { Commentary } from '../commentary/Commentary';
import { useSelector, useDispatch } from 'react-redux';
import { useForm } from '../../hooks/useForm';
import { activeNote } from '../../actions/notes';
import {DetailScreen} from '../detail/DetailScreen'


export const DetailReviewScreen = () => {
  // const { id } = useParams();
  // console.log(id);
  
  return (
    
      <div>

      {/* <div class="container justify-content-md-center">
      
      <div class="row justify-content-center">
        <div class="col-lg-6 col-sm-12 col-12">      
              <div class="carousel-item active">
                <img src={img} alt="img"/>
          </div>
        </div>

        <div class="col-lg-6 col-sm-12 col-12 detail">
          <p class="barangbaru text-center my-4 mt-7"></p>
          <h2>{titulo}</h2>
          <div className="">
            <h5> <ReactStars
                    count={calificacion}
                    onChange={ratingChanged}
                    size={19}
                    color={"#7B113A"}
                    edit={false}
                  /></h5>
            <a href="#"> rate this article</a>
        </div>
          <p>{autor}</p>
          
          <label class="text-rate">4.8</label>
          <p class="price">Rp. 180.000,0</p>
          <p><b>Size:</b>{descripCorta}</p>
          <p><b>Brand:</b>{descripLarga}</p>
          <p><b>Availability:</b>{categoria}</p>
         
          <li className="card-text">Palabras Claves:{palabrasClaves}</li>
          
            <button type="button" onClick={handleReturn} class="btn btn-outline-primary">Return</button>
          
        </div>
      </div>

    </div> */}

      <DetailScreen/>
      <Commentary/>


      </div>
    
  )

}
