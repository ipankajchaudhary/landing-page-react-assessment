import React from 'react'
import logo from './shop.png'

const Navbar = () => {


    return (

        <>
            <div className="header">
                <nav className="container navbar navbar-expand-lg navbar-light" style={{ height: "82px" }}>
                    <div className="container-fluid">
                        <img className="main-logo mx-4 navbar-brand" src={logo} alt="Logo" style={{ width: "42px", height: "49px" }} />
                        <a className="navbar-brand" href="/"> <b>MyShop</b></a>

                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">

                            <div className="navbar-text d-flex justify-content-between">
                                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                    <li className="nav-item">
                                        <a className="nav-a active hover-underline-animation" aria-current="page" href="/"> <b>Home</b> </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="active hover-underline-animation" href="/Portfolio"> <b>Products</b> </a>
                                    </li>
                                    <li className="nav-item">

                                        <a className="active hover-underline-animation" href="/Watchlist" > <b>Cart   <i className="fas fa-shopping-cart"></i></b> </a>
                                    </li>
                                  
                                </ul>


                            </div>
                        </div>


                    </div>
                </nav>
            </div>

        </>
    )
}

export default Navbar