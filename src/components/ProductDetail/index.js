import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

const ProductDetail = ({ data, categories }) => {


    const [checkLoad, setCheckLoad] = useState(false);
    const changeWindow = () => {
        checkLoad ? setCheckLoad(false) : setCheckLoad(true);
    }

    useEffect(() => {
        window.scrollTo(0, 310);
    }, [checkLoad])

    const { id } = useParams();
    const album = data.find(item => item.id == id);
   
    return (
        <>
            <div className="breadcrumb-section breadcrumb-bg-color--golden" >
                <div className="breadcrumb-wrapper">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <h3 className="breadcrumb-title">Product Details - Affiliate</h3>
                                <div className="breadcrumb-nav breadcrumb-nav-color--black breadcrumb-nav-hover-color--golden">
                                    <nav aria-label="breadcrumb">
                                        <ul>
                                            <li><a href="index.html">Home</a></li>
                                            <li><a href="shop-grid-sidebar-left.html">Shop</a></li>
                                            <li className="active" aria-current="page">Product Details Affiliate</li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Start Product Details Section */}
            <div className="product-details-section">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-5 col-lg-6">
                            <div className="product-details-gallery-area" data-aos="fade-up" data-aos-delay={0}>
                                {/* Start Large Image */}
                                <div className="product-large-image product-large-image-horaizontal swiper-container">

                                </div>
                                {/* End Large Image */}

                                <div className="product-image-thumb product-image-thumb-horizontal swiper-container pos-relative mt-5">
                                    <div className="swiper-wrapper">
                                        <div className="product-image-thumb-single swiper-slide">
                                            <img className="img-fluid" src={album.image} alt />
                                        </div>

                                    </div>
                                </div>
                                {/* End Thumbnail Image */}
                            </div>
                        </div>
                        <div className="col-xl-7 col-lg-6">
                            <div className="product-details-content-area product-details--golden" data-aos="fade-up" data-aos-delay={200}>
                                {/* Start  Product Details Text Area*/}
                                <div className="product-details-text">
                                    <h4 className="title">{album.name}</h4>
                                    <h6 className="product-ref ">Reference By: <span>Jhon Doe</span></h6>
                                    <div className="d-flex align-items-center">
                                        <ul className="review-star">
                                            <li className="fill"><i className="ion-android-star" /></li>
                                            <li className="fill"><i className="ion-android-star" /></li>
                                            <li className="fill"><i className="ion-android-star" /></li>
                                            <li className="fill"><i className="ion-android-star" /></li>
                                            <li className="empty"><i className="ion-android-star" /></li>
                                        </ul>
                                        <a href="#" className="customer-review ml-2">(customer review )</a>
                                    </div>
                                    <div className="price">${album.price}</div>
                                    <p>{album.describe}</p>
                                </div> {/* End  Product Details Text Area*/}
                                {/* Start Product Variable Area */}
                                <div className="product-details-variable">
                                    <h4 className="title">Available Options</h4>
                                    {/* Product Variable Single Item */}
                                    <div className="variable-single-item">
                                        <div className="product-stock"> <span className="product-stock-in"><i className="ion-checkmark-circled" /></span> {album.quantity} IN STOCK</div>
                                    </div>


                                    {/* Product Variable Single Item */}
                                    <div className="d-flex align-items-center ">
                                        <div className="variable-single-item ">
                                            <span>Quantity</span>
                                            <div className="product-variable-quantity">
                                                <input min={1} max={100} defaultValue={1} type="number" />
                                            </div>
                                        </div>
                                        <div className="product-add-to-cart-btn">
                                            <a href="#" data-bs-toggle="modal" data-bs-target="#modalAddcart">+ Add To Cart</a>
                                        </div>
                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="product-default-slider-section section-top-gap-100 section-fluid">

                <div className="section-title-wrapper" data-aos="fade-up" data-aos-delay={0}>
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="section-content-gap">
                                    <div className="secton-content">
                                        <h3 className="section-title">RELATED PRODUCTS</h3>
                                        <p>Browse the collection of our related products.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Start Section Content Text Area */}

                <div className="container">
                    <div className="row">
                        {
                            data.filter(related => related.cateId == album.cateId)
                                .map(related => {
                                    return (
                                        <div className="col-3">
                                            <div className="product-slider-default-1row default-slider-nav-arrow">

                                                <div className="swiper-container product-default-slider-4grid-1row">
                                                    <div className="swiper-wrapper">
                                                        <div className="product-default-single-item product-color--golden swiper-slide">
                                                            <div className="image-box">
                                                                <Link to={`${related.id}`} className="image-link" onClick= {changeWindow}>
                                                                    <img src={related.image} alt="" />
                                                                </Link>
                                                                <div className="action-link">
                                                                    <div className="action-link-left">
                                                                        <a href="#" data-bs-toggle="modal" data-bs-target="#modalAddcart">Add to Cart</a>
                                                                    </div>
                                                                    <div className="action-link-right">
                                                                        <a href="#" data-bs-toggle="modal" data-bs-target="#modalQuickview"><i className="icon-magnifier" /></a>
                                                                        <a href="#"><i className="icon-heart" /></a>
                                                                        <a href="#"><i className="icon-shuffle" /></a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="content">
                                                                <div className="content-left">
                                                                    <h6 className="title"><a href="#">{related.name}</a></h6>
                                                                    <ul className="review-star">
                                                                        <li className="fill"><i className="ion-android-star" /></li>
                                                                        <li className="fill"><i className="ion-android-star" /></li>
                                                                        <li className="fill"><i className="ion-android-star" /></li>
                                                                        <li className="fill"><i className="ion-android-star" /></li>
                                                                        <li className="empty"><i className="ion-android-star" /></li>
                                                                    </ul>
                                                                </div>
                                                                <div className="content-right">
                                                                    <span className="price">${related.price}</span>
                                                                </div>
                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })

                        }
                    </div>
                </div>
            </div>






        </>

    )
}

export default ProductDetail
