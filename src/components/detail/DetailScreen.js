import React, { useEffect, useState } from 'react';
import ReactStars from 'react-rating-stars-component';
import { Link, history } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from '../../hooks/useForm';
import { db } from '../../firebase/firebase-config'
import moment from 'moment';

export const DetailScreen = ({history}) => {

  console.log(history);

  const handleReturn = () => {
    history.goBack();
}

  const { id } = useParams();
  const comments = useSelector(state => state.comments);
  const { name } = useSelector(state => state.auth);
  // console.log(name);

  const [formValues, handleInputChange] = useForm(comments);
    const { description, calificacionUsuario } = formValues;
  // console.log(formValues);

  const [data, setData] = useState([]);
  const getDetails = async () => {

    const detailSnaap = await db.collection(`computers`).where('id','==',`${id}`).get();
    const detail = [];

    detailSnaap.forEach(snapHijo => {
        detail.push({ ...snapHijo.data(), id: snapHijo.id })
    });
    console.log(detail)
    setData(detail)

}

    const createDate = moment(data.date);
    console.log(createDate)

    useEffect(() => {
      getDetails();
    }, []);
    
    const newTab = () => {
        window.open(data.img);
    }

    return (
      <>
      {data.map((data) => (
      <>
        <div class="container">
          <div class="row">
            <div class="col-lg-6 col-sm-12 col-12">      
              <div class="product">
                <div className="gallery">
              <img src={data.img} onClick={newTab}/>
              </div>
              </div>
            </div>
            <div class="col-lg-6 col-sm-12 col-12">
               <p class="barangbaru text-center"></p>
          
             <div >
                <div>
                   <p 
                    className="margin-top">
                    <h2>{data.name}</h2>
                    <ReactStars
                    count={data.calification}
                     size={20}
                     color={"#ffbf00"}
                     edit={false}
                     />
                    </p>                         
                 </div>
             </div>
          
              <p>{data.shortdescription}</p>  
              <p><b>Category:</b>{data.category}</p>
              <p><b>Last update:</b>{ createDate.calendar('dd')}</p>
              <p><b>Tag:</b>{data.words}</p>
              <p><button type="button" class="btn btn-primary" onClick={handleReturn} >Return</button></p>
            </div>
          </div>
        </div>
        </>
        ))}
      </>
    )
}
