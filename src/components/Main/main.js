import React from 'react';
import MainAbout from './mainAbout'
import MainProject from './mainProject';
// import {Img} from 'react-image'


const Main = () => {
    
    return (
        <>
        <div className="container-fluid">
            <section className="row">
                <div className="title-One my-4 py-3 text-center">
                    <h1>Over Ons</h1>
                </div>
                <MainAbout/>
            </section>
            <section className="row section__One   ">
                <div class="col-12 callToA d-flex flex-column align-items-center text-center text-md-start ">
                    <h2 className="py-2">Wenst U Een Vrijblijvende Offerte</h2>
                    <button className="btn btn-lg my-2 btn-outline-danger"> Aanvraag Offerte</button>
                </div>
                
                
            </section>
            <section className="row">
            <article className="title-One my-4 py-3 text-center">
                    <h3>Onze Diensten</h3>
            </article>
                <MainProject/>
            </section>
            </div>
        </>
    )
}

export default Main

