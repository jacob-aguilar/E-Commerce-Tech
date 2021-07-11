import React from 'react'
// const entries = [1,2,3,4,5 ];
import { db } from '../../firebase/firebase-config';


// const computersContainer = document.getElementById("products-container");



export const ProductsList = () => {

    const handleFirebase = () => {
        
    }


    const getProducts = () => db.collection('computers').get();
    
    window.addEventListener('DOMContentLoaded', async (e) => {
    const querySnapshot = await getProducts();
    querySnapshot.forEach(doc => {
        console.log(doc.data());
        
        // computersContainer.innerHTML += `<div>
        // ${doc.data().description1}
        // </div>`

    });


    })



    return (
        
        <div>
            <div className="row col-sm-6 col-md-4 col-lg-3 mt-3">
                <h6 className="col-sm-6 col-md-4 mt-1 col-lg-4">Category: </h6>
                    <div className="dropdown">
                    <button className="btn btn-outline-primary dropdown-toggle mt-8" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Select
                    </button>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <a className="dropdown-item" href="#">Computers</a>
                        <a className="dropdown-item" href="#">Phones</a>
                    </div>
                    </div>


            </div>

            {/* List */}
             {/* <ul className="list-group">
                <li className="list-group-item">
                    <div id="products-container" className="col-sm-6 col-md-4 col-lg-3 mt-4">
                        <div className="card">
                            <img className="card-img-top" src="https://picsum.photos/200/150/?random"/>
                            <div className="card-block">
                                <h4 className="card-title mt-3">Tawshif Ahsan Khan</h4>
                                <div className="meta">
                                    <a>Ni modo</a>
                                </div>
                                <div className="card-text">
                                    Tawshif is a web designer living in Bangladesh.
                                </div>
                            </div>
                            <div className="card-footer">
                                <small>Last updated 3 mins ago</small>
                                <button className="btn btn-outline-primary float-right btn-sm">watch</button>
                            </div>
                        </div>
                    </div>
                
                    
                </li>
 
            </ul> */}


            
        </div>
    )
}
