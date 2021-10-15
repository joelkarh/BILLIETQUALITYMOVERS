import React from 'react';
import {Img} from 'react-image'
import {_Main} from '../../data/_data'
const MainAbout = () => {
    return (
        <>
            {_Main.map(({id,src, title, body, width})=>(
                    <article key={id} className="col-12 col-lg-4 pe-3 mb-4  main">
                        <div class="image-box mt-5">
                            <Img src={src} className='' alt={title} objectfit='contain' width={width} height={200}/>
                        </div>
                    <h2 className="my-3">{title}</h2>
                    <p height={192} className="p-2 d-flex justify-content-center align-items-center text-center p-lg-4 babyblue-color" >{body}</p>
                    </article>
                ))}
        </>
    )
}

export default MainAbout
