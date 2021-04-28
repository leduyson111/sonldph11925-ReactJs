import React from 'react'
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import {
    BrowserRouter as Router,
    Link
} from "react-router-dom";

const ProductPage = ({ products, categories }) => {

    const [product, setProduct] = useState([]);

    const [currentPage, setcurrentPage] = useState(1);
    // console.log(currentPage)
    const [todosPerPage, setTodoPage] = useState(6);
    const indexOfLastTodo = currentPage * todosPerPage;
    const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
    const currentTodos = products.slice(indexOfFirstTodo, indexOfLastTodo);

    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(products.length / todosPerPage); i++) {
        pageNumbers.push(i);
    }

    const handleClickPage = (e) => {
        setcurrentPage(Number(e.target.id))
        setProduct(currentTodos);
    }

    useEffect(() => {
        try {
            const getProduct = async () => {
                const response = await fetch("http://localhost:3001/products");
                const product = await response.json();
                setProduct(product);
            }
            getProduct();
        } catch (error) {
            console.log(error);
        }
    }, []);
    // const onHandleChange = name =>(e) => {
    const onHandleChange = (e) => {
        const target = e.target;
        const name = target.value;
        const sortProduct = async () => {
            try {
                const response = await fetch(`http://localhost:3001/products?_sort=price&_order=${name}`, {
                    method: "GET",
                })
                const product = await response.json();
                setProduct(product);
            }
            catch (error) {
                console.log(error)
            }
        }
        sortProduct()
    }

    const onHandleChangeShow = (e) => {
        const target = e.target;
        const name = target.value;
        const listproduct = [];
        for (var i = 0; i < name; i++) {
            listproduct[i] = product[i];
        }
        setProduct(listproduct);
    }

    return (

        <div>
            <div className="breadcrumb-section breadcrumb-bg-color--golden">
                <div className="breadcrumb-wrapper">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <h3 className="breadcrumb-title">Shop - list of products</h3>
                                <div className="breadcrumb-nav breadcrumb-nav-color--black breadcrumb-nav-hover-color--golden">
                                    <nav aria-label="breadcrumb">
                                        <ul>
                                            <li><a href="index.html">Home</a></li>
                                            <li><a href="shop-grid-sidebar-left.html">Shop</a></li>
                                            <li className="active" aria-current="page">Product in the category</li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="shop-section">
                <div className="container">
                    <div className="row flex-column-reverse flex-lg-row-reverse">
                        <div className="col-lg-3">
                            {/* Start Sidebar Area */}
                            <div className="siderbar-section" data-aos="fade-up" data-aos-delay={0}>
                                {/* Start Single Sidebar Widget */}
                                <div className="sidebar-single-widget">
                                    <h6 className="sidebar-title">CATEGORIES</h6>

                                    <div className="sidebar-content">
                                        <ul className="sidebar-menu">
                                            {
                                                categories.map((cate, index) => {
                                                    return (
                                                        <li><Link to={`categories/${cate.id}`}>{cate.name}</Link></li>
                                                    )
                                                })
                                            }
                                        </ul>
                                    </div>
                                </div>

                                <div className="sidebar-single-widget">
                                    <h6 className="sidebar-title">Tag products</h6>
                                    <div className="sidebar-content">
                                        <div className="tag-link">
                                            <a href="#">asian</a>
                                            <a href="#">brown</a>
                                            <a href="#">euro</a>
                                            <a href="#">fashion</a>
                                            <a href="#">hat</a>
                                            <a href="#">t-shirt</a>
                                        </div>
                                    </div>
                                </div>

                                <div className="sidebar-single-widget">
                                    <div className="sidebar-content">
                                        <a href="#" className="sidebar-banner img-hover-zoom">
                                            <img className="img-fluid" src="assets/images/banner/side-banner.jpg" alt="" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-9">
                            {/* Start Shop Product Sorting Section */}
                            <div className="shop-sort-section">
                                <div className="container">
                                    <div className="row">
                                        {/* Start Sort Wrapper Box */}
                                        <div className="sort-box d-flex justify-content-between align-items-md-center align-items-start flex-md-row flex-column" data-aos="fade-up" data-aos-delay={0}>
                                            {/* Start Sort tab Button */}
                                            <div className="sort-tablist d-flex align-items-center">
                                                <div className="sort-select-list d-flex align-items-center">
                                                    <label className="mr-2">Show:</label>
                                                    <form action="#">
                                                        <fieldset>
                                                            <select onChange={onHandleChangeShow} >
                                                                <option value={3}>3</option>
                                                                <option value={6}>6</option>
                                                                <option value={9}>9</option>
                                                                <option value={12}>12</option>
                                                            </select>
                                                        </fieldset>
                                                    </form>
                                                </div>



                                            </div>

                                            <div className="sort-select-list d-flex align-items-center">
                                                <label className="mr-2">Sort By:</label>
                                                <form action="#">
                                                    <fieldset>
                                                        <select onChange={onHandleChange} name="sortprice" id="sortprice">
                                                            <option value="asc">Sort by price: low to high</option>
                                                            <option value="desc">Sort by price: high to low</option>
                                                        </select>
                                                    </fieldset>
                                                </form>
                                            </div>





                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="sort-product-tab-wrapper">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="tab-content tab-animate-zoom">
                                                {/* Start Grid View Product */}
                                                <div className="tab-pane active show sort-layout-single" id="layout-3-grid">
                                                    <div className="row">
                                                        {
                                                            product.map((pro, index) => {
                                                                return (
                                                                    <div className="col-xl-4 col-sm-6 col-12">
                                                                        {/* Start Product Default Single Item */}
                                                                        <div className="product-default-single-item product-color--golden" data-aos="fade-up" data-aos-delay={400}>
                                                                            <div className="image-box">
                                                                                <Link to={`detailproduct/${pro.id}`} className="image-link">
                                                                                    <img src={pro.image} alt="" />
                                                                                </Link>
                                                                                <div className="action-link">
                                                                                    <div className="action-link-left">
                                                                                        <a href="#" data-bs-toggle="modal" data-bs-target="#modalAddcart">Add to Cart</a>
                                                                                    </div>
                                                                                    <div className="action-link-right">
                                                                                        <a href="#" data-bs-toggle="modal" data-bs-target="#modalQuickview"><i className="icon-magnifier" /></a>
                                                                                        <a href="#"><i className="icon-heart" /></a>
                                                                                        <a href="#"><i className="icon-shuffle" /> {pro.name}</a>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="content">
                                                                                <div className="content-left">
                                                                                    <h6 className="title"><a href="product-details-default.html">{pro.name} </a></h6>
                                                                                    <ul className="review-star">
                                                                                        <li className="fill"><i className="ion-android-star" /></li>
                                                                                        <li className="fill"><i className="ion-android-star" /></li>
                                                                                        <li className="fill"><i className="ion-android-star" /></li>
                                                                                        <li className="fill"><i className="ion-android-star" /></li>
                                                                                        <li className="empty"><i className="ion-android-star" /></li>
                                                                                    </ul>
                                                                                </div>
                                                                                <div className="content-right">
                                                                                    <span className="price">${pro.price}</span>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        {/* End Product Default Single Item */}
                                                                    </div>
                                                                )
                                                            })
                                                        }
                                                    </div>
                                                </div> {/* End Grid View Product */}
                                                {/* Start List View Product */}
                                                <div className="tab-pane sort-layout-single" id="layout-list">
                                                    <div className="row">
                                                        <div className="col-12">

                                                            <div className="product-list-single product-color--golden">

                                                                <div className="product-list-content">
                                                                    <h5 className="product-list-link"><a href="product-details-default.html">KAOREET LOBORTIS SAGIT</a></h5>
                                                                    <ul className="review-star">
                                                                        <li className="fill"><i className="ion-android-star" /></li>
                                                                        <li className="fill"><i className="ion-android-star" /></li>
                                                                        <li className="fill"><i className="ion-android-star" /></li>
                                                                        <li className="fill"><i className="ion-android-star" /></li>
                                                                        <li className="empty"><i className="ion-android-star" /></li>
                                                                    </ul>
                                                                    <span className="product-list-price"><del>$30.12</del> $25.12</span>
                                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis ad, iure incidunt. Ab consequatur temporibus non eveniet inventore doloremque necessitatibus sed, ducimus quisquam, ad asperiores</p>
                                                                    <div className="product-action-icon-link-list">
                                                                        <a href="#" data-bs-toggle="modal" data-bs-target="#modalAddcart" className="btn btn-lg btn-black-default-hover">Add to cart</a>
                                                                        <a href="#" data-bs-toggle="modal" data-bs-target="#modalQuickview" className="btn btn-lg btn-black-default-hover"><i className="icon-magnifier" /></a>
                                                                        <a href="wishlist.html" className="btn btn-lg btn-black-default-hover"><i className="icon-heart" /></a>
                                                                        <a href="compare.html" className="btn btn-lg btn-black-default-hover"><i className="icon-shuffle" /></a>
                                                                    </div>
                                                                </div>
                                                            </div> {/* End Product Defautlt Single */}
                                                        </div>
                                                        <div className="col-12">
                                                            {/* Start Product Defautlt Single */}
                                                            <div className="product-list-single product-color--golden">
                                                                <a href="product-details-default.html" className="product-list-img-link">
                                                                    <img className="img-fluid" src="assets/images/product/default/home-1/default-3.jpg" alt="" />
                                                                    <img className="img-fluid" src="assets/images/product/default/home-1/default-4.jpg" alt="" />
                                                                </a>
                                                                <div className="product-list-content">
                                                                    <h5 className="product-list-link"><a href="product-details-default.html">CONDIMENTUM POSUERE</a></h5>
                                                                    <ul className="review-star">
                                                                        <li className="fill"><i className="ion-android-star" /></li>
                                                                        <li className="fill"><i className="ion-android-star" /></li>
                                                                        <li className="fill"><i className="ion-android-star" /></li>
                                                                        <li className="fill"><i className="ion-android-star" /></li>
                                                                        <li className="empty"><i className="ion-android-star" /></li>
                                                                    </ul>
                                                                    <span className="product-list-price">$95.00</span>
                                                                    <div className="product-action-icon-link-list">
                                                                        <a href="#" data-bs-toggle="modal" data-bs-target="#modalAddcart" className="btn btn-lg btn-black-default-hover">Add to cart</a>
                                                                        <a href="#" data-bs-toggle="modal" data-bs-target="#modalQuickview" className="btn btn-lg btn-black-default-hover"><i className="icon-magnifier" /></a>
                                                                        <a href="wishlist.html" className="btn btn-lg btn-black-default-hover"><i className="icon-heart" /></a>
                                                                        <a href="compare.html" className="btn btn-lg btn-black-default-hover"><i className="icon-shuffle" /></a>
                                                                    </div>
                                                                </div>
                                                            </div> {/* End Product Defautlt Single */}
                                                        </div>
                                                        <div className="col-12">
                                                            {/* Start Product Defautlt Single */}
                                                            <div className="product-list-single product-color--golden">
                                                                <a href="product-details-default.html" className="product-list-img-link">
                                                                    <img className="img-fluid" src="assets/images/product/default/home-1/default-5.jpg" alt="" />
                                                                    <img className="img-fluid" src="assets/images/product/default/home-1/default-6.jpg" alt="" />
                                                                </a>
                                                                <div className="product-list-content">
                                                                    <h5 className="product-list-link"><a href="product-details-default.html">ALIQUAM LOBORTIS</a></h5>
                                                                    <ul className="review-star">
                                                                        <li className="fill"><i className="ion-android-star" /></li>
                                                                        <li className="fill"><i className="ion-android-star" /></li>
                                                                        <li className="fill"><i className="ion-android-star" /></li>
                                                                        <li className="fill"><i className="ion-android-star" /></li>
                                                                        <li className="empty"><i className="ion-android-star" /></li>
                                                                    </ul>
                                                                    <span className="product-list-price"> $25.12</span>
                                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis ad, iure incidunt. Ab consequatur temporibus non eveniet inventore doloremque necessitatibus sed, ducimus quisquam, ad asperiores</p>
                                                                    <div className="product-action-icon-link-list">
                                                                        <a href="#" data-bs-toggle="modal" data-bs-target="#modalAddcart" className="btn btn-lg btn-black-default-hover">Add to cart</a>
                                                                        <a href="#" data-bs-toggle="modal" data-bs-target="#modalQuickview" className="btn btn-lg btn-black-default-hover"><i className="icon-magnifier" /></a>
                                                                        <a href="wishlist.html" className="btn btn-lg btn-black-default-hover"><i className="icon-heart" /></a>
                                                                        <a href="compare.html" className="btn btn-lg btn-black-default-hover"><i className="icon-shuffle" /></a>
                                                                    </div>
                                                                </div>
                                                            </div> {/* End Product Defautlt Single */}
                                                        </div>
                                                        <div className="col-12">
                                                            {/* Start Product Defautlt Single */}
                                                            <div className="product-list-single product-color--golden">
                                                                <a href="product-details-default.html" className="product-list-img-link">
                                                                    <img className="img-fluid" src="assets/images/product/default/home-1/default-7.jpg" alt="" />
                                                                    <img className="img-fluid" src="assets/images/product/default/home-1/default-8.jpg" alt="" />
                                                                </a>
                                                                <div className="product-list-content">
                                                                    <h5 className="product-list-link"><a href="product-details-default.html">CONVALLIS QUAM SIT</a></h5>
                                                                    <ul className="review-star">
                                                                        <li className="fill"><i className="ion-android-star" /></li>
                                                                        <li className="fill"><i className="ion-android-star" /></li>
                                                                        <li className="fill"><i className="ion-android-star" /></li>
                                                                        <li className="fill"><i className="ion-android-star" /></li>
                                                                        <li className="empty"><i className="ion-android-star" /></li>
                                                                    </ul>
                                                                    <span className="product-list-price">$75.00 - $85.00</span>
                                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis ad, iure incidunt. Ab consequatur temporibus non eveniet inventore doloremque necessitatibus sed, ducimus quisquam, ad asperiores</p>
                                                                    <div className="product-action-icon-link-list">
                                                                        <a href="#" data-bs-toggle="modal" data-bs-target="#modalAddcart" className="btn btn-lg btn-black-default-hover">Add to cart</a>
                                                                        <a href="#" data-bs-toggle="modal" data-bs-target="#modalQuickview" className="btn btn-lg btn-black-default-hover"><i className="icon-magnifier" /></a>
                                                                        <a href="wishlist.html" className="btn btn-lg btn-black-default-hover"><i className="icon-heart" /></a>
                                                                        <a href="compare.html" className="btn btn-lg btn-black-default-hover"><i className="icon-shuffle" /></a>
                                                                    </div>
                                                                </div>
                                                            </div> {/* End Product Defautlt Single */}
                                                        </div>
                                                        <div className="col-12">
                                                            {/* Start Product Defautlt Single */}
                                                            <div className="product-list-single product-color--golden">
                                                                <a href="product-details-default.html" className="product-list-img-link">
                                                                    <img className="img-fluid" src="assets/images/product/default/home-1/default-9.jpg" alt="" />
                                                                    <img className="img-fluid" src="assets/images/product/default/home-1/default-10.jpg" alt="" />
                                                                </a>
                                                                <div className="product-list-content">
                                                                    <h5 className="product-list-link"><a href="product-details-default.html">DONEC EU LIBERO AC</a></h5>
                                                                    <ul className="review-star">
                                                                        <li className="fill"><i className="ion-android-star" /></li>
                                                                        <li className="fill"><i className="ion-android-star" /></li>
                                                                        <li className="fill"><i className="ion-android-star" /></li>
                                                                        <li className="fill"><i className="ion-android-star" /></li>
                                                                        <li className="empty"><i className="ion-android-star" /></li>
                                                                    </ul>
                                                                    <span className="product-list-price"><del>$25.12</del> $20.00</span>
                                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis ad, iure incidunt. Ab consequatur temporibus non eveniet inventore doloremque necessitatibus sed, ducimus quisquam, ad asperiores</p>
                                                                    <div className="product-action-icon-link-list">
                                                                        <a href="#" data-bs-toggle="modal" data-bs-target="#modalAddcart" className="btn btn-lg btn-black-default-hover">Add to cart</a>
                                                                        <a href="#" data-bs-toggle="modal" data-bs-target="#modalQuickview" className="btn btn-lg btn-black-default-hover"><i className="icon-magnifier" /></a>
                                                                        <a href="wishlist.html" className="btn btn-lg btn-black-default-hover"><i className="icon-heart" /></a>
                                                                        <a href="compare.html" className="btn btn-lg btn-black-default-hover"><i className="icon-shuffle" /></a>
                                                                    </div>
                                                                </div>
                                                            </div> {/* End Product Defautlt Single */}
                                                        </div>
                                                    </div>
                                                </div> {/* End List View Product */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div> {/* End Tab Wrapper */}
                            {/* Start Pagination */}
                            <div className="page-pagination text-center" data-aos="fade-up" data-aos-delay={0}>
                                <ul>
                                    {/* <li><a className="active" href="#">1</a></li> */}
                                    {
                                        pageNumbers.map((number, index) => {
                                            return (
                                                <li><a key={number} id={number} onClick={handleClickPage}>{number}</a></li>
                                            )
                                        })
                                    }
                                    <li><a href="#"><i className="ion-ios-skipforward" /></a></li>
                                </ul>
                            </div> {/* End Pagination */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductPage
