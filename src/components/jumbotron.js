import React from "react";

const Jumbotron = () => {
    return (
        <section className="min-vh-70 o-hidden d-flex flex-column justify-content-center">
            <div className="container">
                <div className="row justify-content-center text-center align-items-center">
                    <div className="col-xl-8 col-lg-9 col-md-10 layer-3 aos-init aos-animate" data-aos="fade-up" data-aos-delay="500">
                        <h1 className="display-3">
                            Launch on time,<br />look on-trend.
                        </h1>
                        <div className="mb-4">
                            <p className="lead px-xl-5">
                                Save countless hours of design and development and ship performant sites with killer looks.
                            </p>
                        </div>
                        <a href="#demos" className="btn btn-lg btn-white mx-1" data-smooth-scroll="">View Demos</a>
                        <a href="https://themes.getbootstrap.com/product/leap-multipurpose-bootstrap-theme/" className="btn btn-lg btn-primary-3 mx-1">Purchase</a>
                    </div>
                </div>
            </div>
        </section>  
    );
};

export default Jumbotron;