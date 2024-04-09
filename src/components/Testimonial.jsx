import React from 'react'

const Testimonial = () => {
  return (
    <>
        <div className="container-xxl py-5">
        <div className="container">
            <div className="text-center mx-auto wow fadeInUp" data-wow-delay="0.1s" style={{maxWidth: "600px"}}>
                <p className="d-inline-block border rounded text-primary fw-semi-bold py-1 px-3">Testimonial</p>
                <h1 className="display-5 mb-5">What Our Clients Say!</h1>
            </div>
            <div className="owl-carousel testimonial-carousel wow fadeInUp" data-wow-delay="0.3s">
                <div className="testimonial-item">
                    <div className="testimonial-text border rounded p-4 pt-5 mb-5">
                        <div className="btn-square bg-white border rounded-circle">
                            <i className="fa fa-quote-right fa-2x text-primary"></i>
                        </div>
                        Dolores sed duo clita tempor justo dolor et stet lorem kasd labore dolore lorem ipsum. At lorem
                        lorem magna ut et, nonumy et labore et tempor diam tempor erat.
                    </div>
                    <img className="rounded-circle mb-3" src="img/testimonial-1.jpg" alt=""/>
                    <h4>Client Name</h4>
                    <span>Profession</span>
                </div>
                <div className="testimonial-item">
                    <div className="testimonial-text border rounded p-4 pt-5 mb-5">
                        <div className="btn-square bg-white border rounded-circle">
                            <i className="fa fa-quote-right fa-2x text-primary"></i>
                        </div>
                        Dolores sed duo clita tempor justo dolor et stet lorem kasd labore dolore lorem ipsum. At lorem
                        lorem magna ut et, nonumy et labore et tempor diam tempor erat.
                    </div>
                    <img className="rounded-circle mb-3" src="img/testimonial-2.jpg" alt=""/>
                    <h4>Client Name</h4>
                    <span>Profession</span>
                </div>
                <div className="testimonial-item">
                    <div className="testimonial-text border rounded p-4 pt-5 mb-5">
                        <div className="btn-square bg-white border rounded-circle">
                            <i className="fa fa-quote-right fa-2x text-primary"></i>
                        </div>
                        Dolores sed duo clita tempor justo dolor et stet lorem kasd labore dolore lorem ipsum. At lorem
                        lorem magna ut et, nonumy et labore et tempor diam tempor erat.
                    </div>
                    <img className="rounded-circle mb-3" src="img/testimonial-3.jpg" alt=""/>
                    <h4>Client Name</h4>
                    <span>Profession</span>
                </div>
                <div className="testimonial-item">
                    <div className="testimonial-text border rounded p-4 pt-5 mb-5">
                        <div className="btn-square bg-white border rounded-circle">
                            <i className="fa fa-quote-right fa-2x text-primary"></i>
                        </div>
                        Dolores sed duo clita tempor justo dolor et stet lorem kasd labore dolore lorem ipsum. At lorem
                        lorem magna ut et, nonumy et labore et tempor diam tempor erat.
                    </div>
                    <img className="rounded-circle mb-3" src="img/testimonial-4.jpg" alt=""/>
                    <h4>Client Name</h4>
                    <span>Profession</span>
                </div>
            </div>
        </div>
    </div>

    </>
  )
}

export default Testimonial