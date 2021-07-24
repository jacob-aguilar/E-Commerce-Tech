import React, { useEffect, useState, useSelector, useMemo} from 'react'
import '../../index.css';
import { db } from '../../firebase/firebase-config';
import { Link } from 'react-router-dom';
import ReactStars from 'react-rating-stars-component';


export const CarouselBootstrap = () => {

    const [data1, setData1] = useState([]);
    const [data2, setData2] = useState([]);
    const [data3, setData3] = useState([]);
    const [data4, setData4] = useState([]);
    const [data5, setData5] = useState([]);
    const [data6, setData6] = useState([]);


    const getSlide1 = async () => {

        const computersSnap = await db.collection(`computers`).where('id', '==', 'PX9Ek2E6L9OOSTH3EsWa').get();
        const computers = [];

        computersSnap.forEach(snapHijo => {
            computers.push({ ...snapHijo.data(), id: snapHijo.id})
        });
        console.log(computers)
        setData1(computers)
    }

    const getSlide2 = async () => {

        const computersSnap = await db.collection(`phones`).where('id', '==', 'xGUo6SaVtDS2KjnsSivU').get();
        const computers = [];

        computersSnap.forEach(snapHijo => {
            computers.push({ ...snapHijo.data(), id: snapHijo.id})
        });
        console.log(computers)
        setData2(computers)
    }

    const getSlide3 = async () => {

        const computersSnap = await db.collection(`computers`).where('id', '==', 'JeBEdbqkx3HouJPDn1lR').get();
        const computers = [];

        computersSnap.forEach(snapHijo => {
            computers.push({ ...snapHijo.data(), id: snapHijo.id})
        });
        console.log(computers)
        setData3(computers)
    }


    const getSlide4 = async () => {

        const computersSnap = await db.collection(`phones`).where('id', '==', 'M841W1UWVGUVr8sGlwPy').get();
        const computers = [];

        computersSnap.forEach(snapHijo => {
            computers.push({ ...snapHijo.data(), id: snapHijo.id})
        });
        console.log(computers)
        setData4(computers)
    }

    const getSlide5 = async () => {

        const computersSnap = await db.collection(`phones`).where('id', '==', 'XtVvdV2ku34K2V91jKQo').get();
        const computers = [];

        computersSnap.forEach(snapHijo => {
            computers.push({ ...snapHijo.data(), id: snapHijo.id})
        });
        console.log(computers)
        setData5(computers)
    }


    const getSlide6 = async () => {

        const computersSnap = await db.collection(`phones`).where('id', '==', 'kE2L4NSkFWLbiMHrtA6S').get();
        const computers = [];

        computersSnap.forEach(snapHijo => {
            computers.push({ ...snapHijo.data(), id: snapHijo.id})
        });
        console.log(computers)
        setData6(computers)
    }


    useEffect(() => {
        getSlide1();
        getSlide2();
        getSlide3();
        getSlide4();
        getSlide5();
        getSlide6();
    }, []);

    // const ratingChanged = (newRating) => {
    //     console.log(newRating);
    //   };


    return (
        <div class="container">

            <div class="row">
                <div class="col-md-6 col-sm-6 col-xs-12">
                    <h3>More popular</h3>
                </div>
                    <div class="col-md-6 col-sm-6 col-xs-6 hidden-xs">
                        <div class="controls pull-right">
                            <a class="left fa fa-chevron-left btn btn-info " href="#carousel-example" data-slide="prev"></a><a class="right fa fa-chevron-right btn btn-info" href="#carousel-example" data-slide="next"></a>
                        </div>
                    </div>
            </div>

            <div id="carousel-example" class="carousel slide hidden-xs" data-ride="carousel" data-type="multi">
                <div class="carousel-inner">
                <div class="item active">
                <div class="row">

                {data1.map((data) => (
                <div class="col-md-3 col-sm-3 col-xs-12 ">
                <div class="slider-item">
                <div class="slider-image">
                <img src={data.img} class="img-responsive" alt="a" />
                </div>
                <div class="slider-main-detail">
                <div class="slider-detail">
                <div class="product-detail">
                <h5>{data.name}</h5>
                <h5 class="detail-price">{data.shortdescription}</h5>
                </div>
                </div>
                <div class="cart-section">
                      <div class="row">
                        <div className="col-md-6 col-sm-12 col-xs-6">
                            {/* <ReactStars
                              count={data.calification}
                              onChange={ratingChanged}
                              size={19}
                              color={"#ffbf00"}
                              edit={false}
                            /> */}
                        </div>
                          <div class="col-md-6 col-sm-12 col-xs-6">
                          <Link to={"/detail-review/PX9Ek2E6L9OOSTH3EsWa"}>
                          <a href="#" class="AddCart btn btn-info border-i"><i class="fa fa-external-link"  aria-hidden="true"></i> Watch now</a>
                          </Link>
                          </div>
                        </div>
                      </div>
                </div>
                </div>
                </div>
                ))}

                

                {data2.map((data) => (
                <div class="col-md-3 col-sm-3 col-xs-12 ">
                <div class="slider-item">
                <div class="slider-image">
                <img src={data.img} class="img-responsive" alt="a" />
                </div>
                <div class="slider-main-detail">
                <div class="slider-detail">
                <div class="product-detail">
                <h5>{data.name}</h5>
                <h5 class="detail-price">{data.shortdescription}</h5>
                </div>
                </div>
                <div class="cart-section">
                      <div class="row">
                        <div className="col-md-6 col-sm-12 col-xs-6">
                            {/* <ReactStars
                              count={data.calification}
                              onChange={ratingChanged}
                              size={19}
                              color={"#ffbf00"}
                              edit={false}
                            /> */}
                        </div>
                          <div class="col-md-6 col-sm-12 col-xs-6">
                          <Link to={"/detail-review-phones/xGUo6SaVtDS2KjnsSivU"}>
                          <a href="#" class="AddCart btn btn-info border-i"><i class="fa fa-external-link"  aria-hidden="true"></i> Watch now</a>
                          </Link>
                          </div>
                        </div>
                      </div>
                </div>
                </div>
                </div>
                ))}

                {data3.map((data) => (
                <div class="col-md-3 col-sm-3 col-xs-12 ">
                <div class="slider-item">
                <div class="slider-image">
                <img src={data.img} class="img-responsive" alt="a" />
                </div>
                <div class="slider-main-detail">
                <div class="slider-detail">
                <div class="product-detail">
                <h5>{data.name}</h5>
                <h5 class="detail-price">{data.shortdescription}</h5>
                </div>
                </div>
                <div class="cart-section">
                      <div class="row">
                        <div className="col-md-6 col-sm-12 col-xs-6">
                            {/* <ReactStars
                              count={data.calification}
                              onChange={ratingChanged}
                              size={19}
                              color={"#ffbf00"}
                              edit={false}
                            /> */}
                        </div>
                          <div class="col-md-6 col-sm-12 col-xs-6">
                          <Link to={"/detail-review/JeBEdbqkx3HouJPDn1lR"}>
                          <a href="#" class="AddCart btn btn-info border-i"><i class="fa fa-external-link"  aria-hidden="true"></i> Watch now</a>
                          </Link>
                          </div>
                        </div>
                      </div>
                </div>
                </div>
                </div>
                ))}

                {data4.map((data) => (
                <div class="col-md-3 col-sm-3 col-xs-12 ">
                <div class="slider-item">
                <div class="slider-image">
                <img src={data.img} class="img-responsive" alt="a" />
                </div>
                <div class="slider-main-detail">
                <div class="slider-detail">
                <div class="product-detail">
                <h5>{data.name}</h5>
                <h5 class="detail-price">{data.shortdescription}</h5>
                </div>
                </div>
                <div class="cart-section">
                      <div class="row">
                        <div className="col-md-6 col-sm-12 col-xs-6">
                            {/* <ReactStars
                              count={data.calification}
                              onChange={ratingChanged}
                              size={19}
                              color={"#ffbf00"}
                              edit={false}
                            /> */}
                        </div>
                          <div class="col-md-6 col-sm-12 col-xs-6">
                          <Link to={"/detail-review-phones/M841W1UWVGUVr8sGlwPy"}>
                          <a href="#" class="AddCart btn btn-info border-i"><i class="fa fa-external-link"  aria-hidden="true"></i> Watch now</a>
                          </Link>
                          </div>
                        </div>
                      </div>
                </div>
                </div>
                </div>
                ))}

                </div>
                </div>

                <div class="item">
                <div class="row">

                {data5.map((data) => (
                <div class="col-md-3 col-sm-3 col-xs-12 ">
                <div class="slider-item">
                <div class="slider-image">
                <img src={data.img} class="img-responsive" alt="a" />
                </div>
                <div class="slider-main-detail">
                <div class="slider-detail">
                <div class="product-detail">
                <h5>{data.name}</h5>
                <h5 class="detail-price">{data.shortdescription}</h5>
                </div>
                </div>
                <div class="cart-section">
                      <div class="row">
                        <div className="col-md-6 col-sm-12 col-xs-6">
                            {/* <ReactStars
                              count={data.calification}
                              onChange={ratingChanged}
                              size={19}
                              color={"#ffbf00"}
                              edit={false}
                            /> */}
                        </div>
                          <div class="col-md-6 col-sm-12 col-xs-6">
                          <Link to={"/detail-review-phones/XtVvdV2ku34K2V91jKQo"}>
                          <a href="#" class="AddCart btn btn-info border-i"><i class="fa fa-external-link"  aria-hidden="true"></i> Watch now</a>
                          </Link>
                          </div>
                        </div>
                      </div>
                </div>
                </div>
                </div>
                ))}


                {data6.map((data) => (
                <div class="col-md-3 col-sm-3 col-xs-12 ">
                <div class="slider-item">
                <div class="slider-image">
                <img src={data.img} class="img-responsive" alt="a" />
                </div>
                <div class="slider-main-detail">
                <div class="slider-detail">
                <div class="product-detail">
                <h5>{data.name}</h5>
                <h5 class="detail-price">{data.shortdescription}</h5>
                </div>
                </div>
                <div class="cart-section">
                      <div class="row">
                        <div className="col-md-6 col-sm-12 col-xs-6">
                            {/* <ReactStars
                              count={data.calification}
                              onChange={ratingChanged}
                              size={19}
                              color={"#ffbf00"}
                              edit={false}
                            /> */}
                        </div>
                          <div class="col-md-6 col-sm-12 col-xs-6">
                          <Link to={"/detail-review-phones/kE2L4NSkFWLbiMHrtA6S"}>
                          <a href="#" class="AddCart btn btn-info border-i"><i class="fa fa-external-link"  aria-hidden="true"></i> Watch now</a>
                          </Link>
                          </div>
                        </div>
                      </div>
                </div>
                </div>
                </div>
                ))}

        </div>
        </div>

        </div>
        </div>
        </div>
    )
}
