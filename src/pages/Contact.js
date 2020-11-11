import React from 'react';

const Contact = () => {
    return (
        <div>

<div className="breadcumb-area bg-img bg-overlay" style={{backgroundImage: "url('assets/img/bg-img/2.jpg')"}}>
    <div className="container h-100">
      <div className="row h-100 align-items-center">
        <div className="col-12">
          <h2 className="title mt-70">Contact</h2>
        </div>
      </div>
    </div>
  </div>
  <div className="breadcumb--con">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><a href="index.html"><i className="fa fa-home"></i> Home</a></li>
              <li className="breadcrumb-item active" aria-current="page">Contact</li>
            </ol>
          </nav>
        </div>
      </div>
    </div>
  </div>
  {/* <!-- ***** Breadcrumb Area End ***** -->

  <!-- ***** Contact Area Start ***** --> */}
  <section className="poca-contact-area mt-50 mb-100">
    <div className="container">

      <div className="row">
        {/* <!-- Contact Information --> */}
        <div className="col-12 col-md-6">
          <div className="contact-information">
            <div className="contact-heading mb-50">
              <h2>Contact Info</h2>
              <h6>We will be happy to assist you with any question</h6>
              <p>Lorem ipsum dolor sit amet, consetetur sadipscing esed diam nonumy eirmod tempor invidunt ut labore et dolore magna. Integer vehicula mauris libero, at molestie eros imperdiet sit amet. Suspendisse mattis ante sit amet ante.</p>
            </div>


            <h5>Address: 40 Baria Sreet 133/2 NewYork City, US</h5>
            <h5>Phone: +01-3-8888-6868</h5>
            <h5>Email: info@colorlib.com </h5>
            <h5>Open Hours: Mon - Fri: 8:00 AM to 6:00 PM</h5>
          </div>
        </div>

        {/* <!-- Contact Form --> */}
        <div className="col-12 col-md-6">
          <div className="contact-form">
            <div className="contact-heading">
              <h2>Get In Touch</h2>
              <h5>Don't hesitate to contact us</h5>
            </div>
            {/* <!-- Form --> */}
            <form action="#" method="post">
              <div className="row">
                <div className="col-12">
                  <input type="text" name="message-name" className="form-control mb-30" placeholder="Your Name"/>
                </div>
                <div className="col-12">
                  <input type="email" name="message-email" className="form-control mb-30" placeholder="Your Email"/>
                </div>
                <div className="col-12">
                  <textarea name="message" className="form-control mb-30" placeholder="Your Message"></textarea>
                </div>
                <div className="col-12">
                  <button type="submit" className="btn poca-btn">Send Message</button>
                </div>
              </div>
            </form>

          </div>
        </div>
      </div>
    </div>
  </section>
  {/* <!-- ***** Contact Area End ***** --> */}


  <hr/>


        </div>
    );
};

export default Contact;