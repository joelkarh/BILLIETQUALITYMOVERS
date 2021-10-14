import React from 'react';
import MainAbout from './mainAbout'
import MainProject from './mainProject';
// import {Img} from 'react-image'


const Main = () => {
    
    return (
        <>
        <div className="container">
            <section className="row">
                <div className="title-One my-4 py-3 text-center">
                    <h1>Over Ons</h1>
                </div>
                <MainAbout/>
            </section>
            <section className=".row bg-danger   ">
                <div class="col-12 callToA">
                    <h2 className="py-2  ">Wenst U Een Vrijblijvende Offerte</h2>
                    <button className="btn btn-sm my-2 btn-outline-dark"> Aanvraag Offerte</button>
                </div>
                
                
            </section>
            <section className="row">
            <div className="title-One my-4 py-3 text-center">
                    <h1> Onze projecten</h1>
                </div>
                <MainProject/>
            </section>
            </div>
        </>
    )
}

export default Main

