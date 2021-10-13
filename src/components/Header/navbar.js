import React from "react"
import Logo from '../../assets/LogoDN.png'
import styles from './navbar.module.css'
import {_Navbar} from '../../data/_data'
import {Link} from "react-router-dom";
import {PhoneIcon} from '@heroicons/react/solid'

const Navbar = () => {
    return ( 
    <>
    <nav className="navbar navbar-expand-lg py-4 ">
        <div className="container">
            <Link className= "p-1 " to="/">
                <img className={` bg-black ${styles.logo}`} src={Logo} alt="" objectfit='contain' width={134}/>
            </Link>
            <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup"
                aria-expanded="false"
                aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav navbar__Nav py-3 lg-w-100">
                    {_Navbar.map((navItem =>(
                        <Link key={navItem.id} className="mb my-md-2 my-lg-0" aria-current="page" to={navItem.href}>{navItem.title}</Link>
                    )))}
                    <div className="number my-md-2 my-lg-0 text-white w-25 lg-flex-end ">
                        <a href="tel:+32 (0)470 039969"> <span> <PhoneIcon className="h-18"/> </span>+32 (0)470 039969</a>
                    </div>
                </div>
                
            </div>
        </div>
    </nav> 
    </>
    )
}

export default Navbar