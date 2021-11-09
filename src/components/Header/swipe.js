import React from 'react';
import Slider from "react-slick";
import {Img} from 'react-image'
import movingvan from '../../assets/movingvan.jpg'
import personeel from '../../assets/personeel.jpg'
import veeldozen from '../../assets/zeerveeldozen.jpg'
import dozen from '../../assets/dozen.jpg'
// import Logo from '../../../public/assets/Tekengebied_3.svg'

const Swipe = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            }, {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            }, {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div className='position-relative'>
            <h2>  Single Item </h2>
            <img src='/public/assets/Tekengebied_3.svg' width={50} alt=""/>
            <Slider {...settings}>
                <div >
                    <Img src={movingvan} className="img-fluid"  objectfit='contain' alt=""/>
                </div>
                <div>
                    <Img src={personeel} className="img-fluid" alt=""/>
                </div>
                <div>
                    <Img src={veeldozen} className="img-fluid" alt=""/>
                </div>
                <div>
                    <Img src={dozen} className="img-fluid" alt=""/>
                </div>
            </Slider>
            <div className="overflow"></div>
        </div>
    )
}

export default Swipe
