import React from 'react'

const BlogPage = () => {
    return (
        <>
            <div className="breadcrumb-section breadcrumb-bg-color--golden">
                <div className="breadcrumb-wrapper">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <h3 className="breadcrumb-title">Blog Single - Left Sidebar</h3>
                                <div className="breadcrumb-nav breadcrumb-nav-color--black breadcrumb-nav-hover-color--golden">
                                    <nav aria-label="breadcrumb">
                                        <ul>
                                            <li><a href="index.html">Home</a></li>
                                            <li><a href="blog-grid-sidebar-left.html">Blog</a></li>
                                            <li className="active" aria-current="page">Blog Single Left Sidebar</li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> {/* ...:::: End Breadcrumb Section:::... */}
            {/* ...:::: Start Blog Single Section:::... */}
            <div className="blog-section">
                <div className="container">
                    <div className="row flex-column-reverse flex-lg-row">
                        <div className="col-lg-3">
                            {/* Start Sidebar Area */}
                            <div className="siderbar-section" data-aos="fade-up" data-aos-delay={0}>
                                {/* Start Single Sidebar Widget */}
                                <div className="sidebar-single-widget">
                                    <h6 className="sidebar-title">Search</h6>
                                    <div className="default-search-style d-flex">
                                        <input className="default-search-style-input-box" type="search" placeholder="Search..." required />
                                        <button className="default-search-style-input-btn" type="submit"><i className="fa fa-search" /></button>
                                    </div>
                                </div> {/* End Single Sidebar Widget */}
                                {/* Start Single Sidebar Widget */}
                                <div className="sidebar-single-widget">
                                    <h6 className="sidebar-title">CATEGORIES</h6>
                                    <div className="sidebar-content">
                                        <ul className="sidebar-menu">
                                            <li><a href="#">Audio</a></li>
                                            <li><a href="#">Company</a></li>
                                            <li><a href="#">Gallery</a></li>
                                            <li><a href="#">Other</a></li>
                                            <li><a href="#">Travel</a></li>
                                            <li><a href="#"> Uncategorized</a></li>
                                            <li><a href="#"> Video</a></li>
                                            <li><a href="#">Wordpress</a></li>
                                        </ul>
                                    </div>
                                </div> {/* End Single Sidebar Widget */}
                                {/* Start Single Sidebar Widget */}
                                <div className="sidebar-single-widget">
                                    <h6 className="sidebar-title">Tags</h6>
                                    <div className="sidebar-content">
                                        <div className="tag-link">
                                            <a href="#">Technology</a>
                                            <a href="#">Information</a>
                                            <a href="#">Wordpress</a>
                                            <a href="#">Devs</a>
                                            <a href="#">Program</a>
                                        </div>
                                    </div>
                                </div> {/* End Single Sidebar Widget */}
                                {/* Start Single Sidebar Widget */}
                                <div className="sidebar-single-widget">
                                    <h6 className="sidebar-title">Meta</h6>
                                    <div className="sidebar-content">
                                        <ul className="sidebar-menu">
                                            <li><a href="#">Log in</a></li>
                                            <li><a href="#">Entries feed</a></li>
                                            <li><a href="#">Comments feed</a></li>
                                            <li><a href="#">WordPress.org</a></li>
                                        </ul>
                                    </div>
                                </div> {/* End Single Sidebar Widget */}
                                {/* Start Single Sidebar Widget */}
                                <div className="sidebar-single-widget">
                                    <h6 className="sidebar-title">PRODUCT CATEGORIES</h6>
                                    <div className="sidebar-content">
                                        <ul className="sidebar-menu">
                                            <li>
                                                <ul className="sidebar-menu-collapse">
                                                    {/* Start Single Menu Collapse List */}
                                                    <li className="sidebar-menu-collapse-list">
                                                        <div className="accordion">
                                                            <a href="shop-grid-sidebar-left.html" className="accordion-title collapsed" data-bs-toggle="collapse" data-bs-target="#men-fashion" aria-expanded="false">Men <i className="ion-ios-arrow-right" /></a>
                                                            <div id="men-fashion" className="collapse">
                                                                <ul className="accordion-category-list">
                                                                    <li><a href="#">Dresses</a></li>
                                                                    <li><a href="#">Jackets &amp; Coats</a></li>
                                                                    <li><a href="#">Sweaters</a></li>
                                                                    <li><a href="#">Jeans</a></li>
                                                                    <li><a href="#">Blouses &amp; Shirts</a></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </li> {/* End Single Menu Collapse List */}
                                                </ul>
                                            </li>
                                            <li><a href="#">Football</a></li>
                                            <li><a href="#"> Men's</a></li>
                                            <li><a href="#"> Portable Audio</a></li>
                                            <li><a href="#"> Smart Watches</a></li>
                                            <li><a href="#">Tennis</a></li>
                                            <li><a href="#"> Uncategorized</a></li>
                                            <li><a href="#"> Video Games</a></li>
                                            <li><a href="#">Women's</a></li>
                                        </ul>
                                    </div>
                                </div> {/* End Single Sidebar Widget */}
                            </div> {/* End Sidebar Area */}
                        </div>
                        <div className="col-lg-9">
                            {/* Start Blog Single Content Area */}
                            <div className="blog-single-wrapper">
                                <div className="blog-single-img" data-aos="fade-up" data-aos-delay={0}>
                                    <img className="img-fluid" src="./frontend/assets/images/blog/blog-grid-home-1-img-1.jpg" alt />
                                </div>
                                <ul className="post-meta" data-aos="fade-up" data-aos-delay={200}>
                                    <li>POSTED BY : <a href="#" className="author">Admin</a></li>
                                    <li>ON : <a href="#" className="date">APRIL 24, 2018</a></li>
                                </ul>
                                <h4 className="post-title" data-aos="fade-up" data-aos-delay={400}>Blog image post</h4>
                                <div className="para-content" data-aos="fade-up" data-aos-delay={600}>
                                    <p>Aenean et tempor eros, vitae sollicitudin velit. Etiam varius enim nec quam tempor, sed efficitur ex ultrices. Phasellus pretium est vel dui vestibulum condimentum. Aenean nec suscipit nibh. Phasellus nec lacus id arcu facilisis elementum. Curabitur lobortis, elit ut elementum congue, erat ex bibendum odio, nec iaculis lacus sem non lorem. Duis suscipit metus ante, sed convallis quam posuere quis. Ut tincidunt eleifend odio, ac fringilla mi vehicula nec. Nunc vitae lacus eget lectus imperdiet tempus sed in dui. Nam molestie magna at risus consectetur, placerat suscipit justo dignissim. Sed vitae fringilla enim, nec ullamcorper arcu.</p>
                                    <blockquote className="blockquote-content">
                                        Quisque semper nunc vitae erat pellentesque, ac placerat arcu consectetur. In venenatis elit ac ultrices convallis. Duis est nisi, tincidunt ac urna sed, cursus blandit lectus. In ullamcorper sit amet ligula ut eleifend. Proin dictum tempor ligula, ac feugiat metus. Sed finibus tortor eu scelerisque scelerisque.
                                    </blockquote>
                                    <p>Aenean et tempor eros, vitae sollicitudin velit. Etiam varius enim nec quam tempor, sed efficitur ex ultrices. Phasellus pretium est vel dui vestibulum condimentum. Aenean nec suscipit nibh. Phasellus nec lacus id arcu facilisis elementum. Curabitur lobortis, elit ut elementum congue, erat ex bibendum odio, nec iaculis lacus sem non lorem. Duis suscipit metus ante, sed convallis quam posuere quis. Ut tincidunt eleifend odio, ac fringilla mi vehicula nec. Nunc vitae lacus eget lectus imperdiet tempus sed in dui. Nam molestie magna at risus consectetur, placerat suscipit justo dignissim. Sed vitae fringilla enim, nec ullamcorper arcu.</p>
                                    <p>Suspendisse turpis ipsum, tempus in nulla eu, posuere pharetra nibh. In dignissim vitae lorem non mollis. Praesent pretium tellus in tortor viverra condimentum. Nullam dignissim facilisis nisl, accumsan placerat justo ultricies vel. Vivamus finibus mi a neque pretium, ut convallis dui lacinia. Morbi a rutrum velit. Curabitur sagittis quam quis consectetur mattis. Aenean sit amet quam vel turpis interdum sagittis et eget neque. Nunc ante quam, luctus et neque a, interdum iaculis metus. Aliquam vel ante mattis, placerat orci id, vehicula quam. Suspendisse quis eros cursus, viverra urna sed, commodo mauris. Cras diam arcu, fringilla a sem condimentum, viverra facilisis nunc. Curabitur vitae orci id nulla maximus maximus. Nunc pulvinar sollicitudin molestie.</p>
                                </div>
                                <div className="para-tags" data-aos="fade-up" data-aos-delay={0}>
                                    <span>Tags: </span>
                                    <ul>
                                        <li><a href="#">fashion</a></li>
                                        <li><a href="#">t-shirt</a></li>
                                        <li><a href="#">white</a></li>
                                    </ul>
                                </div>
                            </div> {/* End Blog Single Content Area */}
                            <div className="comment-area">
                                <div className="comment-box" data-aos="fade-up" data-aos-delay={0}>
                                    <h4 className="title mb-4">3 Comments</h4>
                                    {/* Start - Review Comment */}
                                    <ul className="comment">
                                        {/* Start - Review Comment list*/}
                                        <li className="comment-list">
                                            <div className="comment-wrapper">
                                                <div className="comment-img">
                                                    <img src="./frontend/assets/images/user/image-1.png" alt />
                                                </div>
                                                <div className="comment-content">
                                                    <div className="comment-content-top">
                                                        <div className="comment-content-left">
                                                            <h6 className="comment-name">Kaedyn Fraser</h6>
                                                        </div>
                                                        <div className="comment-content-right">
                                                            <a href="#"><i className="fa fa-reply" />Reply</a>
                                                        </div>
                                                    </div>
                                                    <div className="para-content">
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora inventore dolorem a unde modi iste odio amet, fugit fuga aliquam, voluptatem maiores animi dolor nulla magnam ea! Dignissimos aspernatur cumque nam quod sint provident modi alias culpa, inventore deserunt accusantium amet earum soluta consequatur quasi eum eius laboriosam, maiores praesentium explicabo enim dolores quaerat! Voluptas ad ullam quia odio sint sunt. Ipsam officia, saepe repellat. </p>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* Start - Review Comment Reply*/}
                                            <ul className="comment-reply">
                                                <li className="comment-reply-list">
                                                    <div className="comment-wrapper">
                                                        <div className="comment-img">
                                                            <img src="./frontend/assets/images/user/image-2.png" alt />
                                                        </div>
                                                        <div className="comment-content">
                                                            <div className="comment-content-top">
                                                                <div className="comment-content-left">
                                                                    <h6 className="comment-name">Oaklee Odom</h6>
                                                                </div>
                                                                <div className="comment-content-right">
                                                                    <a href="#"><i className="fa fa-reply" />Reply</a>
                                                                </div>
                                                            </div>
                                                            <div className="para-content">
                                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora inventore dolorem a unde modi iste odio amet, fugit fuga aliquam, voluptatem maiores animi dolor nulla magnam ea! Dignissimos aspernatur cumque nam quod sint provident modi alias culpa, inventore deserunt accusantium amet earum soluta consequatur quasi eum eius laboriosam, maiores praesentium explicabo enim dolores quaerat! Voluptas ad ullam quia odio sint sunt. Ipsam officia, saepe repellat. </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul> {/* End - Review Comment Reply*/}
                                        </li> {/* End - Review Comment list*/}
                                        {/* Start - Review Comment list*/}
                                        <li className="comment-list">
                                            <div className="comment-wrapper">
                                                <div className="comment-img">
                                                    <img src="./frontend/assets/images/user/image-3.png" alt />
                                                </div>
                                                <div className="comment-content">
                                                    <div className="comment-content-top">
                                                        <div className="comment-content-left">
                                                            <h6 className="comment-name">Jaydin Jones</h6>
                                                        </div>
                                                        <div className="comment-content-right">
                                                            <a href="#"><i className="fa fa-reply" />Reply</a>
                                                        </div>
                                                    </div>
                                                    <div className="para-content">
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora inventore dolorem a unde modi iste odio amet, fugit fuga aliquam, voluptatem maiores animi dolor nulla magnam ea! Dignissimos aspernatur cumque nam quod sint provident modi alias culpa, inventore deserunt accusantium amet earum soluta consequatur quasi eum eius laboriosam, maiores praesentium explicabo enim dolores quaerat! Voluptas ad ullam quia odio sint sunt. Ipsam officia, saepe repellat. </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </li> {/* End - Review Comment list*/}
                                    </ul> {/* End - Review Comment */}
                                </div>
                                {/* Start comment Form */}
                                <div className="comment-form" data-aos="fade-up" data-aos-delay={0}>
                                    <div className="coment-form-text-top mt-30">
                                        <h4 className="title mb-3 mt-3">Leave a Reply</h4>
                                        <p>Your email address will not be published. Required fields are marked *</p>
                                    </div>
                                    <form action="#" method="post">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="default-form-box mb-20">
                                                    <label htmlFor="comment-name">Your name <span>*</span></label>
                                                    <input id="comment-name" type="text" placeholder="Enter your name" required />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="default-form-box mb-20">
                                                    <label htmlFor="comment-email">Your Email <span>*</span></label>
                                                    <input id="comment-email" type="email" placeholder="Enter your email" required />
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="default-form-box mb-20">
                                                    <label htmlFor="comment-review-text">Your review <span>*</span></label>
                                                    <textarea id="comment-review-text" placeholder="Write a review" required defaultValue={""} />
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <button className="btn btn-md btn-golden" type="submit">Post Comment</button>
                                            </div>
                                        </div>
                                    </form>
                                </div> {/* End comment Form */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default BlogPage
