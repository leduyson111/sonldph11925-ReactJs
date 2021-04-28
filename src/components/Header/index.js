import React from 'react';
import {
    BrowserRouter as Router,
    Link
} from "react-router-dom";

const Header = () => {
    return (

        <>

            <header className="header-section d-none d-xl-block">
                <div className="header-wrapper">
                    <div className="header-bottom header-bottom-color--green section-fluid sticky-header sticky-color--white">
                        <div className="container">
                            <div className="row">
                                <div className="col-12 d-flex align-items-center justify-content-between">
                                    <div className="header-logo">
                                        <div className="logo">
                                            <Link to="/"><img src="./frontend/assets/images/logo/logo_black.png" alt /></Link>
                                        </div>
                                    </div>
                                    <div className="main-menu menu-color--black menu-hover-color--green">
                                        <nav>
                                            <ul>
                                                <li className="has-dropdown">
                                                    <Link className="active main-menu-link" to="/">Home </Link>
                                                    {/* Sub Menu */}
                                                </li>
                                                <li className="has-dropdown has-megaitem">
                                                    <Link to="/products">Shop </Link>
                                                    {/* Mega Menu */}
                                                </li>
                                                <li className="has-dropdown">
                                                    <Link to="/blog">Blog </Link>
                                                    {/* Sub Menu */}
                                                </li>
                                                <li className="has-dropdown">
                                                    <a href="#">Pages <i className="fa fa-angle-down" /></a>
                                                    {/* Sub Menu */}
                                                    <ul className="sub-menu">
                                                        <li><Link to="/manager">Manager</Link></li>
                                                        <li><a href="/category">Category</a></li>
                                                        <li><a href="404.html">404 Page</a></li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <Link to="/about">About Us</Link>
                                                </li>
                                                <li>
                                                    <Link to="/contact">Contact Us</Link>
                                                </li>
                                            </ul>
                                        </nav>
                                    </div>
                                    <ul className="header-action-link action-color--black action-hover-color--green">
                                        <li>
                                            <a href="#offcanvas-wishlish" className="offcanvas-toggle">
                                                <i className="icon-heart" />
                                                <span className="item-count">3</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#offcanvas-add-cart" className="offcanvas-toggle">
                                                <i className="icon-bag" />
                                                <span className="item-count">3</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#search">
                                                <i className="icon-magnifier" />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            
        </>


    )
}

export default Header
