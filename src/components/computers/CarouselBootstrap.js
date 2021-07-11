import React from 'react'
import '../../index.css';

export const CarouselBootstrap = () => {
    return (
        <div class="container">

            <div class="row">
                <div class="col-md-6 col-sm-6 col-xs-12">
                    <h3>Product Slider</h3>
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

                <div class="col-md-3 col-sm-3 col-xs-12">
                <div class="slider-item">
                <div class="slider-image">
                <img src="https://dummyimage.com/250x200/#cccccc/1f1b1f.png" class="img-responsive" alt="a" />
                </div>
                <div class="slider-main-detail">
                <div class="slider-detail">
                <div class="product-detail">
                <h5>Product name</h5>
                <h5 class="detail-price">Description</h5>
                </div>
                </div>
                <div class="cart-section">
                <div class="row">
                <div class="col-md-6 col-sm-12 col-xs-6 review">
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star-o" aria-hidden="true"></i>
                <i class="fa fa-star-o" aria-hidden="true"></i>
                </div>
                <div class="col-md-6 col-sm-12 col-xs-6">
                <a href="#" class="AddCart btn btn-info"><i class="fa fa-shopping-cart" aria-hidden="true"></i> Watch now</a>
                </div>
                </div>
                </div>
                </div>
                </div>
                </div>

                {/* <div class="col-md-3 col-sm-3 col-xs-12">
                <div class="slider-item">
                <div class="slider-image">
                <img src="https://dummyimage.com/250x200/#cccccc/1f1b1f.png" class="img-responsive" alt="a" />
                </div>
                <div class="slider-main-detail">
                <div class="slider-detail">
                <div class="product-detail">
                <h5>Product Name</h5>
                <h5 class="detail-price">Description</h5>
                </div>
                </div>
                <div class="cart-section">
                <div class="row">
                <div class="col-md-6 col-sm-12 col-xs-6 review">
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star" aria-hidden="false"></i>
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star-o" aria-hidden="true"></i>
                <i class="fa fa-star-o" aria-hidden="true"></i>
                </div>
                <div class="col-md-6 col-sm-12 col-xs-6">
                <a href="#" class="AddCart btn btn-info"><i class="fa fa-shopping-cart" aria-hidden="true"></i> Watch now</a>
                </div>
                </div>
                </div>
                </div>
                </div>
                </div> */}

                {/* <div class="col-md-3 col-sm-3 col-xs-12">
                <div class="slider-item">
                <div class="slider-image">
                <img src="https://dummyimage.com/250x200/#cccccc/1f1b1f.png" class="img-responsive" alt="a" />
                </div>
                <div class="slider-main-detail">
                <div class="slider-detail">
                <div class="product-detail">
                <h5>Product Name</h5>
                <h5 class="detail-price">Description</h5>
                </div>
                </div>
                <div class="cart-section">
                <div class="row">
                <div class="col-md-6 col-sm-12 col-xs-6 review">
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star-o" aria-hidden="true"></i>
                <i class="fa fa-star-o" aria-hidden="true"></i>
                </div>
                <div class="col-md-6 col-sm-12 col-xs-6">
                <a href="#" class="AddCart btn btn-info"><i class="fa fa-shopping-cart" aria-hidden="true"></i> Watch now</a>
                </div>
                </div>
                </div>
                </div>
                </div>
                </div> */}

                {/* <div class="col-md-3 col-sm-3 col-xs-12">
                <div class="slider-item">
                <div class="slider-image">
                <img src="https://dummyimage.com/250x200/#cccccc/1f1b1f.png" class="img-responsive" alt="a" />
                </div>
                <div class="slider-main-detail">
                <div class="slider-detail">
                <div class="product-detail">
                <h5>Product Name</h5>
                <h5 class="detail-price">Description</h5>
                </div>
                </div>
                <div class="cart-section">
                <div class="row">
                <div class="col-md-6 col-sm-12 col-xs-6 review">
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star-o" aria-hidden="true"></i>
                <i class="fa fa-star-o" aria-hidden="true"></i>
                </div>
                <div class="col-md-6 col-sm-12 col-xs-6">
                <a href="#" class="AddCart btn btn-info"><i class="fa fa-shopping-cart" aria-hidden="true"></i> Watch now</a>
                </div>
                </div>
                </div>
                </div>
                </div>
                </div>

                </div>
                </div>

                <div class="item">
                <div class="row">

                <div class="col-md-3 col-sm-3 col-xs-12">
                <div class="slider-item">
                <div class="slider-image">
                <img src="https://dummyimage.com/250x200/#cccccc/1f1b1f.png" class="img-responsive" alt="a" />
                </div>
                <div class="slider-main-detail">
                <div class="slider-detail">
                <div class="product-detail">
                <h5>Product Name</h5>
                <h5 class="detail-price">Description</h5>
                </div>
                </div>
                <div class="cart-section">
                <div class="row">
                <div class="col-md-6 col-sm-12 col-xs-6 review">
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star-o" aria-hidden="true"></i>
                <i class="fa fa-star-o" aria-hidden="true"></i>
                </div>
                <div class="col-md-6 col-sm-12 col-xs-6">
                <a href="#" class="AddCart btn btn-info"><i class="fa fa-shopping-cart" aria-hidden="true"></i> Watch now</a>
                </div>
                </div>
                </div>
                </div>
                </div>
                </div> */}


        {/* <div class="col-md-3 col-sm-3 col-xs-12">
        <div class="slider-item">
        <div class="slider-image">
        <img src="https://dummyimage.com/250x200/#cccccc/1f1b1f.png" class="img-responsive" alt="a" />
        </div>
        <div class="slider-main-detail">
        <div class="slider-detail">
        <div class="product-detail">
        <h5>Product Name</h5>
        <h5 class="detail-price">Description</h5>
        </div>
        </div>
        <div class="cart-section">
        <div class="row">
        <div class="col-md-6 col-sm-12 col-xs-6 review">
        <i class="fa fa-star" aria-hidden="true"></i>
        <i class="fa fa-star" aria-hidden="true"></i>
        <i class="fa fa-star" aria-hidden="true"></i>
        <i class="fa fa-star-o" aria-hidden="true"></i>
        <i class="fa fa-star-o" aria-hidden="true"></i>
        </div>
        <div class="col-md-6 col-sm-12 col-xs-6">
        <a href="#" class="AddCart btn btn-info"><i class="fa fa-shopping-cart" aria-hidden="true"></i> Watch now</a>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
        
        
        <div class="col-md-3 col-sm-3 col-xs-12">
        <div class="slider-item">
        <div class="slider-image">
        <img src="https://dummyimage.com/250x200/#cccccc/1f1b1f.png" class="img-responsive" alt="a" />
        </div>
        <div class="slider-main-detail">
        <div class="slider-detail">
        <div class="product-detail">
        <h5>Product Name</h5>
        <h5 class="detail-price">Description</h5>
        </div>
        </div>
        <div class="cart-section">
        <div class="row">
        <div class="col-md-6 col-sm-12 col-xs-6 review">
        <i class="fa fa-star" aria-hidden="true"></i>
        <i class="fa fa-star" aria-hidden="true"></i>
        <i class="fa fa-star" aria-hidden="true"></i>
        <i class="fa fa-star-o" aria-hidden="true"></i>
        <i class="fa fa-star-o" aria-hidden="true"></i>
        </div>
        <div class="col-md-6 col-sm-12 col-xs-6">
        <a href="#" class="AddCart btn btn-info"><i class="fa fa-shopping-cart" aria-hidden="true"></i> Watch now</a>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div> */}
        



        </div>
        </div>

        </div>
        </div>
        </div>
    )
}
