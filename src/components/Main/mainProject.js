import React from 'react';
import {Img} from 'react-image'
import tapeBox from '../../assets/tapeandbox.jpg'
import mover from '../../assets/mover.jpg'
import Truck from '../../assets/movingBox.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPeopleCarry, faTruckLoading, faTruckMoving } from '@fortawesome/free-solid-svg-icons'
const mainProject = () => {
    return (
        <>
            <article  className="col-12 col-md-4 pe-3 mb-4  main">
                <h4>Inpakservice <span><FontAwesomeIcon icon={faPeopleCarry} /></span></h4> 
                <Img src={tapeBox} objectfit ='contain' className='img-fluid'   alt=""/>
            </article>
            <article  className="col-12 col-md-4 pe-3 mb-4  main">
                <h4>Inpakmateriaal <span><FontAwesomeIcon icon={faTruckLoading} /></span> </h4>
                <Img src={mover} objectfit ='contain' className='img-fluid'   alt=""/>
            </article>
            <article  className="col-12 col-md-4 pe-3 mb-4  main">
                <h4>Meubellift service  <span><FontAwesomeIcon icon={faTruckMoving} /></span> </h4>
                <Img src={Truck} objectfit ='contain' className='img-fluid'   alt=""/>
            </article>
        </>
    )
}

export default mainProject
