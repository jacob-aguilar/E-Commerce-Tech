import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from 'react-redux'
import { db } from "../../firebase/firebase-config";
import { newComentario } from "../../actions/comentarios";
import { useParams } from 'react-router-dom';
import ReactStars from 'react-rating-stars-component';
import moment from 'moment';
import Swal from 'sweetalert2';



export const Commentary = ({history}) => {

  const ratingChanged = (newRating) => {
    console.log(newRating);
  };

  const dispatch = useDispatch();
  const { name } = useSelector(state => state.auth);
  
  console.log(name);

  const { id } = useParams();
  console.log(id);
  

  const calificationRef = useRef(true);
  const ref1 = useRef(true);
  const ref2 = useRef(true);
  const ref3 = useRef(true);
  const ref4 = useRef(true);
  const ref5 = useRef(true);

  const [formState, setFormState] = useState({
    comentarValue: ''
  })
  const { comentarValue } = formState;

  useEffect(() => {
  }, [formState])

  const handleInputChange = ({target}) =>{
    setFormState({
      ...formState,
      [target.name]: target.value
    });
  }
  
  const handleSubmit = async (e) =>{
    const calificacionValue = calificationRef.current.querySelectorAll('.start-filled').length;
    

    e.preventDefault();
    if (!name) {
      Swal.fire({
        icon: 'error',
        title: 'Algo salió mal',
        showConfirmButton: false,
        timer: 3000,
        text: 'Inicia sesión para agregar un comentario.',
      });
       history.push('/auth/login');
      
    }else if (formState.comentarValue.trim().length > 3) {
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Comentario Guardado',
        showConfirmButton: false,
        timer: 1500
    })  
      let newComent = {
        idComment: id,
        name: name,
        date: new Date().getTime(),
        comentario: formState.comentarValue,
        calificacion: calificacionValue
      }
  
      const doc = await db.collection('comments').add ( newComent );
      
      newComent = {
        id: doc.id,
        idComment: id,
        name: name,
        date: new Date().getTime(),
        comentario: formState.comentarValue,
        calificacion: calificacionValue
      }
      getComment();
      dispatch( newComentario(newComent) );
      setFormState({
        comentarValue: ''
      });
    }else{
      Swal.fire({
        icon: 'info',
        timer: 1500,
        showConfirmButton: false,
        title: 'Tienes que añadir más de una palabra',
        showClass: {
          popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutUp'
        }
      })
    }
    if (formState.comentarValue.trim().length === 200) {
      Swal.fire({
        icon: 'info',
        title: 'No se permiten más caracteres',
        showClass: {
          popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutUp'
        }
      })
  }

  }

  const [data, setData] = useState([]);
    const getComment = async () => {

        const comentariosSnap = await db.collection(`comments`).where('idComment','==',`${id}`).get();
        
        const comentarios = [];

        comentariosSnap.forEach(snapHijo => {
            comentarios.push({ ...snapHijo.data(), id: snapHijo.id })
        });
        console.log(comentarios)
        setData(comentarios)

    }


    const commentDate = moment(data.date);
    console.log(commentDate)
  
    const [datas, setDatas] = useState([]);
    const getDescription = async () => {
  
        const descriptionSnap = await db.collection(`computers`).where('id','==',`${id}`).get();
        
        const description = [];
  
        descriptionSnap.forEach(snapHijo => {
            description.push({ ...snapHijo.data(), id: snapHijo.id })
        });
        console.log(description)
        setDatas(description)
  
    }

  const handleStartSelect = (e) =>{
    switch (e.target.id) {
      case "start-1":
        ref1.current.src = "/icons/star-filled.svg";
        ref2.current.src = "/icons/star-empty.svg";
        ref3.current.src = "/icons/star-empty.svg";
        ref4.current.src = "/icons/star-empty.svg";
        ref5.current.src = "/icons/star-empty.svg";
        ref1.current.className = "start-filled"
        ref2.current.className = "start-empty"
        ref3.current.className = "start-empty"
        ref4.current.className = "start-empty"
        ref5.current.className = "start-empty"
        break
      ;
      case "start-2":
        ref1.current.src = "/icons/star-filled.svg";
        ref2.current.src = "/icons/star-filled.svg";
        ref3.current.src = "/icons/star-empty.svg";
        ref4.current.src = "/icons/star-empty.svg";
        ref5.current.src = "/icons/star-empty.svg";
        ref1.current.className = "start-filled"
        ref2.current.className = "start-filled"
        ref3.current.className = "start-empty"
        ref4.current.className = "start-empty"
        ref5.current.className = "start-empty"
        break
      ;
      case "start-3":
        ref1.current.src = "/icons/star-filled.svg";
        ref2.current.src = "/icons/star-filled.svg";
        ref3.current.src ="/icons/star-filled.svg";
        ref4.current.src = "/icons/star-empty.svg";
        ref5.current.src = "/icons/star-empty.svg";
        ref1.current.className = "start-filled"
        ref2.current.className = "start-filled"
        ref3.current.className = "start-filled"
        ref4.current.className = "start-empty"
        ref5.current.className = "start-empty"
        break
      ;
      case "start-4":
        ref1.current.src = "/icons/star-filled.svg";
        ref2.current.src = "/icons/star-filled.svg";
        ref3.current.src = "/icons/star-filled.svg";
        ref4.current.src = "/icons/star-filled.svg";
        ref5.current.src = "/icons/star-empty.svg";
        ref1.current.className = "start-filled"
        ref2.current.className = "start-filled"
        ref3.current.className = "start-filled"
        ref4.current.className = "start-filled"
        ref5.current.className = "start-empty"
        break
      ;
      case "start-5":
        ref1.current.src = "/icons/star-filled.svg";
        ref2.current.src = "/icons/star-filled.svg";
        ref3.current.src = "/icons/star-filled.svg";
        ref4.current.src = "/icons/star-filled.svg";
        ref5.current.src = "/icons/star-filled.svg";
        ref1.current.className = "start-filled"
        ref2.current.className = "start-filled"
        ref3.current.className = "start-filled"
        ref4.current.className = "start-filled"
        ref5.current.className = "start-filled"
        break
      ;
      default:
        break;
    }
  }




    useEffect(() => {
      getComment();
      getDescription();
  }, []);
  

  return (
    <>
      <div class="product-info-tabs container-space">
		        <ul class="nav nav-tabs" id="myTab" role="tablist">
				  	  <li class="nav-item">
				    	  <a class="nav-link active" id="description-tab" data-toggle="tab" href="#description" role="tab" aria-controls="description" aria-selected="true">Description</a>
				  	  </li>
				    	<li class="nav-item">
				    	  <a class="nav-link" id="review-tab" data-toggle="tab" href="#review" role="tab" aria-controls="review" aria-selected="true">Reviews</a>
				  	  </li>
				  </ul>
                
				<div class="tab-content" id="myTabContent">
				  	{datas.map((data) => (
                <div class="tab-pane fade show active" id="description" role="tabpanel" aria-labelledby="description-tab">
				  	{data.longdescription}
            </div>
                ))}
				  	
              <div class="tab-pane fade" id="review" role="tabpanel" aria-labelledby="review-tab">
				  		
                  
                <div class="form-group">
                  <label className="label-your rating-label pd-wrap review-heading">Your rating</label>
                    <div class="reviews-counter rating-label">
                        <div class="rate">
                          <div className="calificacion" ref={calificationRef}>
                              <img ref={ref1} id="start-1" src={"/icons/star-filled.svg"} className="start-filled"  alt="" onClick={handleStartSelect} />
                              <img ref={ref2} id="start-2" src={"/icons/star-filled.svg"} className="start-filled"  alt="" onClick={handleStartSelect} />
                              <img ref={ref3} id="start-3" src={"/icons/star-filled.svg"} className="start-filled"  alt="" onClick={handleStartSelect} />
                              <img ref={ref4} id="start-4" src={"/icons/star-filled.svg"} className="start-filled"  alt="" onClick={handleStartSelect} />
                               <img ref={ref5} id="start-5" src={"/icons/star-filled.svg"} className="start-filled"  alt="" onClick={handleStartSelect} />
                          </div>
					        	    </div>
                    </div>

				        	
					        </div>
              
				  
		        			  <div class="form-group col-12">
			        			    
			        			    <input 
                            className="form-control col-12 mr-sm-2 rating-label" 
                            type="text"
                            autoComplete="off" 
                            id="comentar"
                            maxLength="255"
                            placeholder="Write your comment"
                            minLength="3"
                            name="comentarValue"
                            value={ comentarValue }
                            onChange={ handleInputChange }
                        />
			        		  </div>
			        		
					        <button class="btn btn-primary rating-label" onClick={ handleSubmit }>Send</button>

                            <div className="col-12">

                            <hr/>
                            <h5 className="rating-label " >Comentarios</h5>
                        
                            {data.map((data) => (
                                <>
                                <div className="col-12">
                                    <ul className="list-group-item list-group-item border-comment">
                                        
                                        <div className="card-body-co">

                                        <div 
                                            className="col-md-2">
                                                <ReactStars
                                                    count={data.calificacion}
                                                    onChange={ratingChanged}
                                                    size={20}
                                                    color={"#ffbf00"}
                                                    edit={false}
                                                />
                                            </div>

                                        <div className="col-md-6"> 
                                            {data.comentario}
                                            
                                            </div>
                                        
                                            <div className="col-md-2"> 
                                            { commentDate.format('dddd, MMMM Do YYYY') }
                                            
                                            </div>

                                        <div className="col-md-2">
                                          {data.name}
                                          
                                          </div>
                                            
                                          
                                        </div>

                                        </ul>
                                    </div>
                                </>
                            ))}
                        </div>
		        
				  	</div>
                      
				</div>

			</div>
    </>
  );
};
