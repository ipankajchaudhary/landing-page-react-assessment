import React from 'react'
import './LandingPagestyle.css'
import img from './nokia-laptop.png'
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";

const Landingpage = () => {

    return (
        <div>
            <div className="upper-container">
                <div className="main-container">
                    <div className="text-container">
                        <div className="react-reveal for-animations animation-0" >
                            <div className="rating-cointainer">
                                <div className="rating">
                                    <i className="fas fa-star">
                                    </i>
                                    <i className="fas fa-star">

                                    </i>
                                    <i className="fas fa-star">
                                    </i>
                                    <i className="fas fa-star">
                                    </i>
                                    <i className="far fa-star">
                                    </i>
                                </div>4.9 of 5 By 1
                            </div>
                        </div>
                        <div className="react-reveal for-animations animation-100" >
                            <h1 fontWeight="bold" className="heading-container">
                                The Revolution of Ultimate Platform to monitor your task
                            </h1>
                        </div>
                        <div className="react-reveal for-animations animation-200" >
                            <p className="desc-text">Lorem ipsum dolor sit amet consectetur adipisicing elit sed eiusmod tempor incididunt labore dolore magna ipsum dolor sit amet consectetur.
                            </p>
                        </div>
                        <div className="react-reveal  for-animations animation-300" >
                            <div className="button-container">
                                <button type="button" className="buy-btn reusecore__button primary">
                                    <span className="btn-text">
                                        Buy Now
                                    </span>
                                </button>
                                <button type="button" className="cart-btn reusecore__button text">
                                    <span className="btn-text">
                                        Add to Cart &nbsp;
                                    </span>
                                    <span className="btn-icon">
                                        <i className="fas fa-shopping-cart"></i>
                                    </span>
                                </button>
                            </div>
                        </div>

                    </div>
                    <div className="img-container">
                        <div className=" react-reveal for-animations animation-100">
                            <AliceCarousel autoPlay autoPlayInterval="3000">
                                <img src={img} className="sliderimg" alt="" />
                                <img src={img} className="sliderimg" alt="" />
                            </AliceCarousel>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Landingpage
