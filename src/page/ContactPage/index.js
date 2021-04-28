import React from 'react'

const ContactPage = () => {
    return (
        <>
            <div className="breadcrumb-section breadcrumb-bg-color--golden">
                <div className="breadcrumb-wrapper">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <h3 className="breadcrumb-title">Contact Us</h3>
                                <div className="breadcrumb-nav breadcrumb-nav-color--black breadcrumb-nav-hover-color--golden">
                                    <nav aria-label="breadcrumb">
                                        <ul>
                                            <li><a href="index.html">Home</a></li>
                                            <li className="active" aria-current="page">Contact Us</li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> {/* ...:::: End Breadcrumb Section:::... */}
            {/* ...::::Start Map Section:::... */}
            <div className="map-section" data-aos="fade-up" data-aos-delay={0}>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="mapouter">
                                <div className="gmap_canvas">
                                    <iframe id="gmap_canvas" src="https://maps.google.com/maps?q=121%20King%20St%2C%20Melbourne%20VIC%203000%2C%20Australia&t=&z=13&ie=UTF8&iwloc=&output=embed" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> {/* ...::::End  Map Section:::... */}
            {/* ...::::Start Contact Section:::... */}
            <div className="contact-section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            {/* Start Contact Details */}
                            <div className="contact-details-wrapper section-top-gap-100" data-aos="fade-up" data-aos-delay={0}>
                                <div className="contact-details">
                                    {/* Start Contact Details Single Item */}
                                    <div className="contact-details-single-item">
                                        <div className="contact-details-icon">
                                            <i className="fa fa-phone" />
                                        </div>
                                        <div className="contact-details-content contact-phone">
                                            <a href="tel:+012345678102">+012 345 678 102</a>
                                            <a href="tel:+012345678102">+012 345 678 102</a>
                                        </div>
                                    </div> {/* End Contact Details Single Item */}
                                    {/* Start Contact Details Single Item */}
                                    <div className="contact-details-single-item">
                                        <div className="contact-details-icon">
                                            <i className="fa fa-globe" />
                                        </div>
                                        <div className="contact-details-content contact-phone">
                                            <a href="mailto:urname@email.com">urname@email.com</a>
                                            <a href="http://www.yourwebsite.com/">www.yourwebsite.com</a>
                                        </div>
                                    </div> {/* End Contact Details Single Item */}
                                    {/* Start Contact Details Single Item */}
                                    <div className="contact-details-single-item">
                                        <div className="contact-details-icon">
                                            <i className="fa fa-map-marker" />
                                        </div>
                                        <div className="contact-details-content contact-phone">
                                            <span>Address goes here,</span>
                                            <span>street, Crossroad 123.</span>
                                        </div>
                                    </div> {/* End Contact Details Single Item */}
                                </div>
                                {/* Start Contact Social Link */}
                                <div className="contact-social">
                                    <h4>Follow Us</h4>
                                    <ul>
                                        <li><a href="#"><i className="fa fa-facebook" /></a></li>
                                        <li><a href="#"><i className="fa fa-twitter" /></a></li>
                                        <li><a href="#"><i className="fa fa-youtube" /></a></li>
                                        <li><a href="#"><i className="fa fa-google-plus" /></a></li>
                                        <li><a href="#"><i className="fa fa-instagram" /></a></li>
                                    </ul>
                                </div> {/* End Contact Social Link */}
                            </div> {/* End Contact Details */}
                        </div>
                        <div className="col-lg-8">
                            <div className="contact-form section-top-gap-100" data-aos="fade-up" data-aos-delay={200}>
                                <h3>Get In Touch</h3>
                                <form id="contact-form" action="https://htmlmail.hasthemes.com/nazmul/mail.php" method="post">
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="default-form-box mb-20">
                                                <label htmlFor="contact-name">Name</label>
                                                <input name="name" type="text" id="contact-name" />
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="default-form-box mb-20">
                                                <label htmlFor="contact-email">Email</label>
                                                <input name="email" type="email" id="contact-email" />
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="default-form-box mb-20">
                                                <label htmlFor="contact-subject">Subject</label>
                                                <input name="subject" type="text" id="contact-subject" />
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="default-form-box mb-20">
                                                <label htmlFor="contact-message">Your Message</label>
                                                <textarea name="message" id="contact-message" cols={30} rows={10} defaultValue={""} />
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <button className="btn btn-lg btn-black-default-hover" type="submit">SEND</button>
                                        </div>
                                        <p className="form-messege" />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default ContactPage
