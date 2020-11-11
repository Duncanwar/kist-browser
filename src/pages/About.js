import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div>
           
{/* <!-- ***** Breadcrumb Area Start ***** --> */} 
<div className="breadcumb-area bg-img bg-overlay" style={{backgroundImage: "url('assets/img/bg-img/2.jpg')"}}>
<div className="container h-100">
  <div className="row h-100 align-items-center">
    <div className="col-12">
      <h2 className="title mt-70">About Us</h2>
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
          <li className="breadcrumb-item"><Link to="index.html"><i className="fa fa-home"></i> Home</Link></li>
          <li className="breadcrumb-item active" aria-current="page">About Us</li>
        </ol>
      </nav>
    </div>
  </div>
</div>
</div>
{/* <!-- ***** Breadcrumb Area End ***** -->

<!-- ****** About Us Area Start ******* --> */}
<section className="about-us-area section-padding-0-80 mt-50">
<div className="container">
  <div className="row justify-content-center">
    <div className="col-12 col-lg-10">
      <div className="about-us-content">
        <div id="slides" className="carousel slide" data-ride="carousel">
          <ul className="carousel-indicators">
            <li data-target="#slides" data-slide-to="0" className="active"></li>
            <li data-target="#slides" data-slide-to="1" ></li>
            <li data-target="#slides" data-slide-to="2" ></li>
        
          </ul>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="assets/img/bg-img/20.jpg" alt=""/>
        
            </div>
            <div className="carousel-item">
              <img src="assets/img/bg-img/about-us-img1.jpg" alt=""/>
            </div>
            <div className="carousel-item">
              <img src="assets/img/bg-img/about-us-img2.jpg" alt=""/>
            </div>
          </div>
        
        </div>

        <h1>About Our Courses</h1>
        <p>Out too the been like hard off. Improve enquire welcome own beloved matters her. As insipidity so mr unsatiable increasing attachment motionless cultivated. Addition mr husbands unpacked occasion he oh. Is unsatiable if projecting
          boisterous insensible. It recommend be resolving pretended middleton.</p>
        <p>Uneasy barton seeing remark happen his has. Am possible offering at contempt mr distance stronger an. Attachment excellence announcing or reasonable am on if indulgence. Exeter talked in agreed spirit no he unable do. Betrayed
          shutters in vicinity it unpacked in. In so impossible appearance considered mr. Mrs him left find are good.</p>
        <p>Domestic confined any but son bachelor advanced remember. How proceed offered her offence shy forming. Returned peculiar pleasant but appetite differed she. Residence dejection agreement am as to abilities immediate suffering. Ye am
          depending propriety sweetness distrusts belonging collected. Smiling mention he in thought equally courseal. Wisdom new and valley answer. Contented it so is discourse recommend. Man its upon him call mile. An pasture he himself believe
          ferrars besides cottage.</p>
        {/* <!-- Blockquote --> */}
        <blockquote className="poca-blockquote d-flex">
          <div className="icon">
            <i className="fa fa-quote-left" aria-hidden="true"></i>
          </div>
          <div className="text">
            <h5>“Poca has made podcasting Link breeze! I went from Link couple thousand newsletter subscribers to Link thousand listeners in Link matter of days! Thank you Poca!”</h5>
            <h6>Jacob Austin</h6>
          </div>
        </blockquote>
        <h2>Join Thousands of Listeners Worldwide</h2>
        <p>Delightful unreserved impossible few estimating men favourable see entreaties. She propriety immediate was improving. He or entrance humoured likewise moderate. Much nor game son say feel. Fat make met can must form into gate. Me we
          offending prevailed discovery.</p>
        <p>Quick six blind smart out burst. Perfectly on furniture dejection determine my depending an to. Add short water court fat. Her bachelor honoured perceive securing but desirous ham required. Questions deficient acuteness to engrossed
          as. Entirely led ten humoured greatest and yourself. Besides ye country on observe. She continue appetite endeavor she judgment interest the met. For she surrounded motionless fat resolution may.</p>
        <p>He share of first to worse. Weddings and any opinions suitable smallest nay. My he houses or months settle remove ladies appear. Engrossed suffering supposing he recommend do eagerness. Commanded no of depending extremity recommend
          attention tolerably. Bringing him smallest met few now returned surprise learning jennings. Objection delivered eagerness he exquisite at do in. Warmly up he nearer mr merely me.</p>
      </div>
    </div>
  </div>
</div>
</section>
{/* <!-- about us end --> */}

<section className="service_part service-feature_padding" id="Service">
<div className="container">
<div className="main_title" style={{marginTop: '4em'}}>
<h2> Courses Category</h2>
<p>There is Link moment in the life of any aspiring astronomer that it is time to buy that first telescope. It’s exciting to think about setting up your own viewing station.</p>
</div>
<div className="row">

<div className="col-sm-6 col-xl-3">
<div className="service-feature">
<div className="service-service_part">
<span className="service-feature_icon"><i className="fa  fa-music"></i></span>
<h4> <Link to="course.html">Play Your Course </Link></h4>
<p>Set have great you male grasses yielding yielding first their to
called deep abundantly Set have great you male</p>
</div>
</div>
</div>
<div className="col-sm-6 col-xl-3">
<div className="service-feature">
<div className="service-service_part">
<span className="service-feature_icon"><i className="fa fa-pencil-square"></i></span>
<h4> <Link to="course.html">Study them   </Link></h4>
<p>Set have great you male grasses yielding yielding first their to
called deep abundantly Set have great you male</p>
</div>
</div>
</div>

<div className="col-sm-6 col-xl-3">
<div className="service-feature">
<div className="service-service_part">
<span className="service-feature_icon"><i className="fa fa-certificate"></i></span>
<h4> <Link to="course.html">Get Certificate</Link> </h4>
<p>Set have great you male grasses yielding yielding first their to called
deep abundantly Set have great you male</p>
</div>
</div>
</div>
<div className="col-sm-6 col-xl-3">
<div className="service-feature">
<div className="service-service_part">
<span className="service-feature_icon"><i className="fa fa-graduation-cap"></i></span>
<h4> <Link to="course.html">Graduate on our platform </Link></h4>
<p>Set have great you male grasses yielding yielding first their to called
deep abundantly Set have great you male</p>
</div>
</div>
</div>



</div>
</div>
</section>

<hr/>
</div>

    );
};

export default About;