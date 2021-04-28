import React from 'react'
import Albumsitem from '../Albumsitem'
const Albums = (props) => { 


  // const list_product = [];
  // for (var i = 0; i < 8; i++) {
  //   list_product[i] = props.data[i];
  // }

  return (
    <div className="product-default-slider-section section-top-gap-100 section-fluid">
     
      <div className="section-title-wrapper" data-aos="fade-up" data-aos-delay={0}>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section-content-gap">
                <div className="secton-content">
                  <h3 className="section-title">the New arrivals</h3>
                  <p>Preorder now to receive exclusive deals &amp; gifts</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="product-wrapper" data-aos="fade-up" data-aos-delay={200}>
        <div className="container">
          <div className="row">
            {
              props.data.map((album, index) => {
                return <Albumsitem key={index} data={album} />
              })
            }
          </div>
        </div>

      </div>
    </div>

  )


}

export default Albums
