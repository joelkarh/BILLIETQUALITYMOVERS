import React from 'react';
import {_Main} from '../../data/_data'
const Main = () => {
    
    return (
        <>
        <div className="container">
            <section className="row">
                <div className="title-One text-center">
                    <p className="small-text"></p>
                    <h1>Over Ons</h1>
                </div>
                {_Main.map(({id,src, title, body, width})=>(
                    <article key={id} className="col-12 col-md-4 main">
                    <img src={`${src}`} alt={title} width={width}/>
                    <h2>{title}</h2>
                    <p>{body}</p>
                    </article>
                ))}
                
                
            </section>
            </div>
        </>
    )
}

export default Main

