
import React from "react"
import Truck from '../../assets/truck.jpeg'
import {Link} from "react-router-dom"


const CarouselItem = () => {
    return ( <> 
    <div className="carousel-inner">
        <div className="carousel-item active">
            <img src={Truck} objectfit='contain' className="d-block w-100" alt="..."/>
                <div className="carousel-caption d-none d-md-block overflow--text">
                <Link to="/" className="btn btn-primary babyblue mb-2">A slide label</Link>
                    <p>Some representative placeholder content for the first slide.</p>
                </div>
            </div>
            <div className="carousel-item">
                <img src={Truck} objectfit='contain' className="d-block w-100" alt="..."/>
                    <div className="carousel-caption d-none d-md-block overflow--text">
                        <Link to="/" className="btn btn-primary babyblue mb-2">B slide label</Link>
                        <p>Some representative placeholder content for the second slide.</p>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src={Truck} objectfit='contain' className="d-block w-100 img-fluid" alt="..."/>
                        <div className="carousel-caption d-none d-md-block overflow--text">
                        <Link to="/" className="btn btn-primary babyblue mb-2">C slide label</Link>
                            <p>Some representative placeholder content for the third slide.</p>
                        </div>
                    </div>
                </div>
            </>
    )
}

export default CarouselItem;
        
