import React from 'react'

const Navbar = () => {
  

    return (

        <>
           <div className="header">
            <nav className="navbar navbar-expand-lg navbar-light  bg-white" style={{ height: "52px" }}>
                <div className="container-fluid" style={{ backgroundColor: "#ffffff", borderBottom: "1px solid #eaeaea" }}>
                        <img className="main-logo mx-4 navbar-brand" src="https://user-images.githubusercontent.com/65165139/132937951-9e08e004-4943-4410-a80d-66b4e812b1f7.png" alt="Logo" style={{width:"42px", height:"49px"}}/>
                    <a className="navbar-brand" href="/"> <b>MyCrypto</b></a>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-a active hover-underline-animation" aria-current="page" href="/"> <b>CryptoCurrencies</b> </a>
                            </li>
                            <li className="nav-item">
                                <a className="active hover-underline-animation" href="/Portfolio"> <b>Portfolio</b> </a>
                            </li>
                            <li className="nav-item">
                                
                                <a className="active hover-underline-animation" href="/Watchlist" > <b>Watchlist</b> </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-a hover-underline-animation" href="/Aboutme"> <b>About Me</b> </a>
                            </li>
                        </ul>
                        <div className="navbar-text d-flex justify-content-between">
                           
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <i className="fas fa-bell mx-3 my-1" style={{ paddingTop: "8px", "borderRadius": "8px" }}></i>
                                </li>
                            </ul>
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a href='/UserDetails'><i className={(!localStorage.getItem('token')) ? "d-none" : "fa fa-user-circle-o"} style={{ fontSize: "24px", marginTop: "10px", marginRight: "10px", cursor: "pointer" }}></i></a> 
                                </li>
                            </ul>

                            <a href="/Login" style={{marginRight:"10px"}}><button type="button" className="btn-login btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" >Login</button></a>
                            <a href="/SignUp"><button type="button" className="btn-login  btn btn-primary" >Sign Up</button> </a>
                            <button type="button" className="btn-login  btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" >Log out</button>

                        </div>
                    </div>

                    
                </div>
            </nav>
        </div>
    
        </>
    )
}

export default Navbar