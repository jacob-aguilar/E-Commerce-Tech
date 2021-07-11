import React, {useState,useEffect} from 'react'
import { db } from '../../firebase/firebase-config';


// const docRef = db.collection("computers").doc("wooGPr7my7wxINtoFimR");

// docRef.get().then((doc) => {
//     if (doc.exists) {
//         console.log("Document data:", doc.data());
//     } else {
//         // doc.data() will be undefined in this case
//         console.log("No such document!");
//     }
// }).catch((error) => {
//     console.log("Error getting document:", error);
// });


export const PhoneScreen = () => {
    const [blogs,setBlogs]=useState([])
    useEffect(() => {
        fetchBlogs();
      }, [])

      const fetchBlogs=async()=>{
        const response=db.collection('computers');
        const data= await response.get();
        data.docs.forEach(item=>{

          console.log(data.docs);
         setBlogs([...blogs,item.data()])
        })
    }

    
    return (
      <div className="App">
      {
        blogs && blogs.map(blog=>{
          return(
            // <div className="blog-container">
            //   <h4>{blog.name}</h4>
            //   <p>{blog.description1}</p>
            // </div>

              
            <div className="container my-4">

            <div id="multi-item-example" className="carousel slide carousel-multi-item" data-ride="carousel">
          
          
              <div className="controls-top">
                <a className="btn-floating" href="#multi-item-example" data-slide="prev"><i class="fa fa-chevron-left"></i></a>
                <a className="btn-floating" href="#multi-item-example" data-slide="next"><i class="fa fa-chevron-right"></i></a>
              </div>
          
          
              {/* <!--Indicators--> */}
              <ol className="carousel-indicators">
                <li data-target="#multi-item-example" data-slide-to="0" class="active"></li>
                <li data-target="#multi-item-example" data-slide-to="1"></li>
                <li data-target="#multi-item-example" data-slide-to="2"></li>
              </ol>
          
          
          
              <div className="carousel-inner" role="listbox">
          
                {/* <!--/.First slide--> */}
                <div className="carousel-item active">
          
                  <div className="row">
                    <div className="col-md-4">
                      <div className="card mb-2">
                        <img className="card-img-top" src={blog.url}
                             alt="Card image cap"/>
                        <div className="card-body">
                          <h4 className="card-title">{blog.name}</h4>
                          <p className="card-text">{blog.description1}</p>
                          <a className="btn btn-primary">Button</a>
                        </div>
                      </div>
                    </div>
          
                    <div className="col-md-4 clearfix d-none d-md-block">
                      <div className="card mb-2">
                        <img className="card-img-top" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(18).jpg"
                             alt="Card image cap"/>
                        <div className="card-body">
                          <h4 className="card-title">Card title</h4>
                          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the
                            card's content.</p>
                          <a className="btn btn-primary">Button</a>
                        </div>
                      </div>
                    </div>
          
                    <div className="col-md-4 clearfix d-none d-md-block">
                      <div className="card mb-2">
                        <img className="card-img-top" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(35).jpg"
                             alt="Card image cap"/>
                        <div className="card-body">
                          <h4 className="card-title">Card title</h4>
                          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the
                            card's content.</p>
                          <a className="btn btn-primary">Button</a>
                        </div>
                      </div>
                    </div>
                  </div>
          
                </div>
                {/* <!--/.First slide--> */}
          
                {/* <!--Second slide--> */}
                <div className="carousel-item">
          
                  <div className="row">
                    <div className="col-md-4">
                      <div className="card mb-2">
                        <img className="card-img-top" src="https://mdbootstrap.com/img/Photos/Horizontal/City/4-col/img%20(60).jpg"
                             alt="Card image cap"/>
                        <div className="card-body">
                          <h4 className="card-title">Card title</h4>
                          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the
                            card's content.</p>
                          <a className="btn btn-primary">Button</a>
                        </div>
                      </div>
                    </div>
          
                    <div className="col-md-4 clearfix d-none d-md-block">
                      <div className="card mb-2">
                        <img className="card-img-top" src="https://mdbootstrap.com/img/Photos/Horizontal/City/4-col/img%20(47).jpg"
                             alt="Card image cap"/>
                        <div className="card-body">
                          <h4 className="card-title">Card title</h4>
                          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the
                            card's content.</p>
                          <a className="btn btn-primary">Button</a>
                        </div>
                      </div>
                    </div>
          
                    <div className="col-md-4 clearfix d-none d-md-block">
                      <div className="card mb-2">
                        <img className="card-img-top" src="https://mdbootstrap.com/img/Photos/Horizontal/City/4-col/img%20(48).jpg"
                             alt="Card image cap"/>
                        <div className="card-body">
                          <h4 className="card-title">Card title</h4>
                          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the
                            card's content.</p>
                          <a className="btn btn-primary">Button</a>
                        </div>
                      </div>
                    </div>
                  </div>
          
                </div>
                {/* <!--/.Second slide--> */}
          
                {/* <!--Third slide--> */}
                <div className="carousel-item">
          
                  <div className="row">
                    <div className="col-md-4">
                      <div className="card mb-2">
                        <img className="card-img-top" src="https://mdbootstrap.com/img/Photos/Horizontal/Food/4-col/img%20(53).jpg"
                             alt="Card image cap"/>
                        <div className="card-body">
                          <h4 className="card-title">Card title</h4>
                          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the
                            card's content.</p>
                          <a className="btn btn-primary">Button</a>
                        </div>
                      </div>
                    </div>
          
                    <div className="col-md-4 clearfix d-none d-md-block">
                      <div className="card mb-2">
                        <img className="card-img-top" src="https://mdbootstrap.com/img/Photos/Horizontal/Food/4-col/img%20(45).jpg"
                             alt="Card image cap"/>
                        <div className="card-body">
                          <h4 className="card-title">Card title</h4>
                          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the
                            card's content.</p>
                          <a className="btn btn-primary">Button</a>
                        </div>
                      </div>
                    </div>
          
                    <div className="col-md-4 clearfix d-none d-md-block">
                      <div className="card mb-2">
                        <img className="card-img-top" src="https://mdbootstrap.com/img/Photos/Horizontal/Food/4-col/img%20(51).jpg"
                             alt="Card image cap"/>
                        <div className="card-body">
                          <h4 className="card-title">Card title</h4>
                          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the
                            card's content.</p>
                          <a className="btn btn-primary">Button</a>
                        </div>
                      </div>
                    </div>
                  </div>
          
                </div>
                     {/* <!--/.Third slide--> */}
          
              </div>
              {/* <!--/.Slides--> */}
          
            </div>
            {/* <!--/.Carousel Wrapper--> */}
          
          
          </div>
    

          )
        })
      }
    </div>
    )
}
