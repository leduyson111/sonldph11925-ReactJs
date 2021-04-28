import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Banner = (props) => {

    window.scrollTo(0, 1400);

        return (
        <>
        <div className="hero-slider-section">
            <div className="hero-slider-active swiper-container">
                <div className="swiper-wrapper">
                    <div className="hero-single-slider-item swiper-slide">
                      
                        <div className="hero-slider-bg">
                            <img src="./frontend/assets/images/hero-slider/home-1/hero-slider-1.jpg" alt />
                        </div>
                    
                        <div className="hero-slider-wrapper">
                            <div className="container">
                                <div className="row">
                                    <div className="col-auto">
                                        <div className="hero-slider-content">
                                            <h4 className="subtitle">Made of Fresh Ingredients</h4>
                                            <h1 className="title">A natural &amp; <br /> organic Skincare </h1>
                                            <a href="product-details-default.html" className="btn btn-lg btn-outline-green">shop now </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="hero-single-slider-item swiper-slide">

                        <div className="hero-slider-bg">
                            <img src="./frontend/assets/images/hero-slider/home-2/hero-slider-2.jpg" alt />
                           
                        </div>

                        <div className="hero-slider-wrapper">
                            <div className="container">
                                <div className="row">
                                    <div className="col-auto">
                                        <div className="hero-slider-content">
                                            <h4 className="subtitle">Premium Facial Skincare</h4>
                                            <h1 className="title">Fresh Face <br /> Natural Skincare</h1>
                                            <a href="product-details-default.html" className="btn btn-lg btn-outline-green">shop now </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    
                </div>
                <div className="swiper-pagination active-color-green" />
                <div className="swiper-button-prev d-none d-lg-block" />
                <div className="swiper-button-next d-none d-lg-block" />
            </div>
        </div>

      <div className="banner-section section-top-gap-100">
            <div className="banner-wrapper clearfix">
                {

                    props.data.map((category) =>{
                        return (
                            <div className="banner-single-item banner-style-4 banner-animation banner-color--green float-left" data-aos="fade-up" data-aos-delay={0}>
                            <div className="image">
                                <img className="img-fluid" src={category.image} alt />
                            </div>
                            <Link to= {`categories/${category.id}`} className="content">
                                <div className="inner">
                                    <h4 className="title">{category.name}</h4>
                                </div>
                                <span className="round-btn"><i className="ion-ios-arrow-thin-right" /></span>
                            </Link>
                            </div> 
                        )
                   })

                }
                
        </div>
        </div>


        </>



    )
}

export default Banner
