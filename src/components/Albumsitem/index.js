import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { useParams } from 'react-router-dom';

const Albumsitem = (props) => {
  const { id } = useParams();

  return (
    <>
      <div className="col-3">
        <div className="product-slider-default-1row default-slider-nav-arrow">
          <div className="swiper-container product-default-slider-4grid-1row">
            <div className="swiper-wrapper">

              <div className="product-default-single-item product-color--green swiper-slide">
                <div className="image-box">
                  <Link to={`detailproduct/${props.data.id}`} className="image-link">
                    <img src={props.data.image} alt />
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
                    <h6 className="title"><Link to={`detailproduct/${props.data.id}`} >{props.data.name}</Link></h6>
                    <ul className="review-star">
                      <li className="fill"><i className="ion-android-star" /></li>
                      <li className="fill"><i className="ion-android-star" /></li>
                      <li className="fill"><i className="ion-android-star" /></li>
                      <li className="fill"><i className="ion-android-star" /></li>
                      <li className="empty"><i className="ion-android-star" /></li>
                    </ul>
                  </div>
                  <div className="content-right">
                    <span className="price">${props.data.price}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>

  )
}
export default Albumsitem
