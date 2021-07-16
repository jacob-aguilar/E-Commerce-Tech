import React, { useEffect, useState } from 'react';
import firebase from 'firebase/app';
import ReactStars from 'react-rating-stars-component';
import { useParams } from 'react-router-dom';
import { db } from '../../firebase/firebase-config'
import { useForm } from '../../hooks/useForm';
import { useDispatch, useSelector } from 'react-redux';
import { login, startComment } from '../../actions/auth';
import Swal from 'sweetalert2';
import {LoadingPage} from '../../components/ui/LoadingPage'



export const Commentary = () => {

    const ratingChanged = (newRating) => {
        console.log(newRating);
    };

    const { id } = useParams();


    const comments = useSelector(state => state.comments);
    const { name } = useSelector(state => state.auth);

    const [formValues, handleInputChange, reset] = useForm(comments);
    const { description, calificacionUsuario } = formValues;


    const [data, setData] = useState([]);
    const getComment = async () => {

        const comentariosSnap = await db.collection(`comments`).where('id','==',`${id}`).get();
        
        const comentarios = [];

        comentariosSnap.forEach(snapHijo => {
            comentarios.push({ ...snapHijo.data(), id: snapHijo.id })
        });
        console.log(comentarios)
        setData(comentarios)

    }


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

    useEffect(() => {
        getComment();
        getDescription();
    }, []);



    const dispatch = useDispatch();


    const [cheking, setCheking] = useState(true);
    const [isLoggedIn, setIsLoggedIn] = useState(false);


    //Change state authentication
    useEffect(() => {
        firebase.auth().onAuthStateChanged(async (user) => {
            if (user?.uid) {
                dispatch(login(user.uid, user.displayName));
                setIsLoggedIn(true);

            } else {
                setIsLoggedIn(false);

            }
            setCheking(false);

        });

    }, [dispatch, setCheking, setIsLoggedIn])


    if (cheking) {
        return (
            <LoadingPage/>
        )
      }

    const contenido = {
        description: '',
        calificacionUsuario: ''
    }


    const handleGuardar = (e) => {
        if (isLoggedIn) {
            if (data.find(contenido => contenido.name === name)) {
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Comentario Guardado',
                    showConfirmButton: false,
                    timer: 1500
                })
                reset(contenido)
            } else {
                e.preventDefault();
                dispatch(startComment(formValues, name, id ))

                    .then((res) => {
                        Swal.fire({
                            position: 'center',
                            icon: 'success',
                            title: 'Gracias por tu comentario',
                            showConfirmButton: false,
                            timer: 1500
                        })
                        reset(contenido)
                        window.location= "/"
                    })
            }
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Algo salió mal',
                showConfirmButton: false,
                timer: 3000,
                text: 'Inicia sesión para agregar un comentario.',
              });   
        } 
    }

   
    if (calificacionUsuario > 5){
     Swal.fire({
            icon: 'info',
            title: 'No se permite calificación mayor a 5',
            showClass: {
              popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
              popup: 'animate__animated animate__fadeOutUp'
            }
          })
    }

    if (description > 100){
        Swal.fire({
               icon: 'info',
               title: 'No se permiten mas de 100 caracteres',
               showClass: {
                 popup: 'animate__animated animate__fadeInDown'
               },
               hideClass: {
                 popup: 'animate__animated animate__fadeOutUp'
               }
             })
       }

    return (
        <div class="product-info-tabs container-space">
		        <ul class="nav nav-tabs" id="myTab" role="tablist">
				  	<li class="nav-item">
				    	<a class="nav-link active" id="description-tab" data-toggle="tab" href="#description" role="tab" aria-controls="description" aria-selected="true">Description</a>
				  	</li>
				  	<li class="nav-item">
				    	<a class="nav-link" id="review-tab" data-toggle="tab" href="#review" role="tab" aria-controls="review" aria-selected="true">Reviews (0)</a>
				  	</li>
				</ul>
                {datas.map((data) => (
                <div class="tab-pane fade show active" id="description" role="tabpanel" aria-labelledby="description-tab">
				  	{data.longdescription}
				</div>
                ))}
				<div class="tab-content" id="myTabContent">
				  	
				  	
                      <div class="tab-pane fade" id="review" role="tabpanel" aria-labelledby="review-tab">
				  		<div class="pd-wrap review-heading">REVIEWS</div>
				  		
				  		<form class="review-form label-your">
		        			<div class="form-group">
			        			<label className="label-your rating-label">Your rating</label>
			        			<div class="reviews-counter rating-label">
									<div class="rate">
                                    <ReactStars>
                                    size={20}
                                    color={"#ffbf00"}
                                    edit={false}
                                    </ReactStars>
									</div>
								</div>
							</div>
		        			<div class="form-group col-12">
			        			<label>Your message</label>
			        			<textarea name="description"
                                    onChange={handleInputChange}
                                    autoComplete="off"
                                    type="text"
                                    className="form-control"
                                    rows="6"
                                    value={description}/>
			        		</div>
			        		<div class="row">
				        		<div class="col-md-6">
				        			<div class="form-group">
					        			<input  name="calificacionUsuario"
                                        autoComplete="off"
                                        onChange={handleInputChange}
                                        type="text"
                                        className="form-control col-3 mr-sm-2 rating-label"                                   
                                        value={calificacionUsuario}
                                        placeholder="1 to 5" />
					        		</div>
					        	</div>
				        		<div class="col-md-6">
				        			
					        	</div>
					        </div>
					        <button class="btn btn-primary rating-label" onClick={ handleGuardar }>Send</button>

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
                                                    count={data.calificacionUsuario}
                                                    onChange={ratingChanged}
                                                    size={20}
                                                    color={"#ffbf00"}
                                                    edit={false}
                                                />
                                            </div>

                                        <div className="col-md-7"> 
                                            {data.description}
                                            </div>

                                        <div className="col-md-3">{data.name}</div>
                                            
                                          
                                        </div>

                                        </ul>
                                    </div>
                                </>
                            ))}
                        </div>


			        	</form>
				  	</div>
                      
				</div>

			</div>
    )
}
