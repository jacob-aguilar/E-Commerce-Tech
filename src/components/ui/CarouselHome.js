import React from 'react'


export const CarouselHome = ({history}) => {

    console.log(history);

    const handleComputers = () => {
      history.push('/computers');
    }

    const handlePhones = () => {
    history.push('/phones');
    }

    return (
        <div>
            <div>
                <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                    <ol class="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    </ol>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img class="d-block w-100" src="/images/computers.png" height="550px" alt="First slide"/>
                        <div class="carousel-caption" onClick={handleComputers}>
                            <h2>Click to going computers</h2>
                            <p>Find the best options for you</p>
                        </div>
                    </div>
                    <div class="carousel-item">
                         <img class="d-block w-100" src="/images/appland.png" height="550px" alt="Second slide"/>
                         <div class="carousel-caption">
                            <h2>We have your best option</h2>
                            <p>Thanks for you preference</p>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img class="d-block w-100" src="/images/phones.png"  height="550px" alt="Third slide"/>
                        <div class="carousel-caption" onClick={handlePhones}>
                        <h2>Click to going phones</h2>
                            <p>Find the best options for you</p>
                        </div>
                    </div>
                </div>
                <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
            </div>
            </div>
        </div>
    )
}
