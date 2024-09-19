import React from 'react';
import MyImg from './Image/mypic.png';
import FlipkartImg from './Image/companiesLogo/Flipkart-Logo.png';
import AmazonImg from './Image/companiesLogo/Amazon logo.png';
import GoogleImg from './Image/companiesLogo/google.png';
import MyntraImg from './Image/companiesLogo/myntra.png';
import meshoImg from './Image/companiesLogo/mesho.png';
import TcsImg from './Image/companiesLogo/tcs.png';
import WiproImg from './Image/companiesLogo/wipro.png';


import projectHospitalImg from './Image/projectImg/hospital.png';
import projectCalcImg from './Image/projectImg/calculator.png';
import projectBookImg from './Image/projectImg/book.png';
import projectTicketImg from './Image/projectImg/online-ticket.jpg';


import JavaImg from './Image/TechImg/core-java.png';
import JdbcImg from './Image/TechImg/servlet.png';
import MyqslImg from './Image/TechImg/mysql.png';
import SpringImg from './Image/TechImg/spring-boot.png';
import ReactImg from './Image/TechImg/react.png';
import CssImg from './Image/TechImg/css3.jpg';
import HtmlImg from './Image/TechImg/Html.png';
import ServletImg from './Image/TechImg/servlet.png';
import BootstrapImg from './Image/TechImg/bootstrap-logo.jpg';

export default function HomePage() {
  const companies = [
    {
      id: 1,
      compImg: AmazonImg
    },
    {
      id: 2,
      compImg: GoogleImg
    },
    {
      id: 3,
      compImg: FlipkartImg
    },
    {
      id: 4,
      compImg: MyntraImg
    },
    {
      id: 5,
      compImg: TcsImg
    },
    {
      id: 6,
      compImg: WiproImg
    },
  ]
  return (
    <div>
      {/* Site Description */}
      <div className='container'>
        <div className="row mb-5">
          {/* Website Summary */}
          <div className="col-md-7">
            <div className='card mt-5 border-0'>
              <h1 className='mx-5' style={{ fontFamily: 'Playfair Display, serif', color: 'red' }}>
                Welcome to MHCode
              </h1>
              <p className="mx-5">
                Hello friends. I am Harsh Software Developer  By Profession & YouTube by passion.
                Welcome to my website MH Coder. In this channel & I will provide Programming Language Tutorial.
                Projects and IT Jobs related coding and software
              </p>
              <div className='mx-5 mt-3'>
                <a href='#contact' type="button" className="btn btn-info ms-2">Let's start</a>
              </div>
            </div>
          </div>

          {/* Image Module */}
          <div className="col-md-4 mt-4">
            <div className='card mt-4' style={{
              borderRadius: '56% 44% 37% 63% / 100% 57% 43% 0%',
              background: '#22f8d1',
              width: '350px',
              height: '310px',
              boxShadow: '0 0 20px rgba(0,255,255)',
              border: '2px solid rgb(252, 250, 250)'
            }}>
              <div className='text-center'>
                <img src={MyImg} alt="profile" className="w-100" style={{
                  borderRadius: '56% 44% 37% 63% / 100% 57% 43% 0%',
                  width: '250px',
                  height: '305px'
                }} />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Card Section */}
      <div className="container">
        <h5 className="card-title text-center my-4" style={{ color: '' }}>The world's best companies.</h5>
        <div className="row text-center justify-content-center">
          {/* Repeated Column for Each Company Logo */}
          {companies.map(index => (
            <div className="col-md-2 col-4 mb-4" key={index.id}>
              <div className="card border-0">
                <img src={index.compImg} className="card-img-top w-75 mx-auto" alt="Company logo" />
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* <!-- {/* <!-- project card --> --> */}
      <section class="features-section py-5">
        <div class="container">
          {/* <!-- Section Header --> */}
          <div class="text-center mb-4">
            <h2 class="features-heading-text">All Project Summaries</h2>
            <a href="#" class="secondary-button">See All Projects <i class="fa-solid fa-right-long"></i></a>
          </div>

          {/* <!-- Features Area --> */}
          <div class="row">
            {/* <!-- Single Feature Card --> */}
            <div class="col-md-4 mb-4">
              <div class="features-card card h-100 p-3 text-center">
                <img src={projectHospitalImg} class="card-img-top mb-3" alt="Hospital Management System" />
                <h3>Hospital Management System Web Application</h3>
                <p>This is a card sorting example. It explains the Hospital Management System project.</p>
                <a href="#" class="secondary-button">Learn More <i class="fa-solid fa-right-long"></i></a>
              </div>
            </div>

            {/* <!-- Single Feature Card --> */}
            <div class="col-md-4 mb-4">
              <div class="features-card card h-100 p-3 text-center">
                <img src={projectTicketImg} class="card-img-top mb-3" alt="Train Ticket Booking System" />
                <h3>Online Train Ticket Booking System</h3>
                <p>This is a card sorting example. It explains the Train Ticket Booking System project.</p>
                <a href="#" class="secondary-button">Learn More <i class="fa-solid fa-right-long"></i></a>
              </div>
            </div>

            {/* <!-- Single Feature Card --> */}
            <div class="col-md-4 mb-4">
              <div class="features-card card h-100 p-3 text-center">
                <img src={projectBookImg} class="card-img-top mb-3" alt="Book Management System" />
                <h3>Book Management System Web Application</h3>
                <p>This is a card sorting example. It explains the Book Management System project.</p>
                <a href="#" class="secondary-button">Learn More <i class="fa-solid fa-right-long"></i></a>
              </div>
            </div>

            {/* <!-- Single Feature Card --> */}
            <div class="col-md-4 mb-4">
              <div class="features-card card h-100 p-3 text-center">
                <img src={projectCalcImg} class="card-img-top mb-3" alt="Calculator Web Application" />
                <h3>Calculator Web Application</h3>
                <p>This is a card sorting example. It explains the Calculator project.</p>
                <a href="#" class="secondary-button">Learn More <i class="fa-solid fa-right-long"></i></a>
              </div>
            </div>

            {/* <!-- Single Feature Card --> */}
            <div class="col-md-4 mb-4">
              <div class="features-card card h-100 p-3 text-center">
                <img src={projectHospitalImg} class="card-img-top mb-3" alt="Live News" />
                <h3>Live News Application</h3>
                <p>This is a card sorting example. It explains the Live News project.</p>
                <a href="#" class="secondary-button">Learn More <i class="fa-solid fa-right-long"></i></a>
              </div>
            </div>

            {/* <!-- Single Feature Card --> */}
            <div class="col-md-4 mb-4">
              <div class="features-card card h-100 p-3 text-center">
                <img src={projectHospitalImg} class="card-img-top mb-3" alt="React JS" />
                <h3>React JS Project</h3>
                <p>This is a card sorting example. It explains the React JS project.</p>
                <a href="#" class="secondary-button">Learn More <i class="fa-solid fa-right-long"></i></a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Technology Skills Section --> */}
      <section class="features-section py-5">
        <div class="container">
          {/* <!-- Section Header --> */}
          <div class="text-center mb-4">
            <h2 class="features-heading-text">Technology Skills</h2>
            <a href="#" class="secondary-button">See All Skills <i class="fa-solid fa-right-long"></i></a>
          </div>

          {/* <!-- Skills Grid --> */}
          <div class="row">
            {/* <!-- Single Skill Card --> */}
            <div class="col-md-2 col-4 mb-4">
              <div class="text-center" style={{ border: '1px solid' }}>
                <img src={JavaImg} class="card-img-top w-50" alt="java" />
                <h3>Java</h3>
              </div>
            </div>

            {/* <!-- Single Skill Card --> */}
            <div class="col-md-2 col-4 mb-4">
              <div class="text-center" style={{ border: '1px solid' }}>
                <img src={JdbcImg} class="card-img-top w-50" alt="jdbc" />
                <h3>JDBC</h3>
              </div>
            </div>

            {/* <!-- Single Skill Card --> */}
            <div class="col-md-2 col-4 mb-4">
              <div class="text-center" style={{ border: '1px solid' }}>
                <img src={ServletImg} class="card-img-top w-50" alt="servlet" />
                <h3>Servlet</h3>
              </div>
            </div>

            {/* <!-- Single Skill Card --> */}
            <div class="col-md-2 col-4 mb-4">
              <div class="text-center" style={{ border: '1px solid' }}>
                <img src={SpringImg} class="card-img-top w-50" alt="spring boot" />
                <h3>Spring Boot</h3>
              </div>
            </div>

            {/* <!-- Single Skill Card --> */}
            <div class="col-md-2 col-4 mb-4">
              <div class="text-center" style={{ border: '1px solid' }}>
                <img src={MyqslImg} class="card-img-top w-50" alt="mysql" />
                <h3>MySql</h3>
              </div>
            </div>

            {/* <!-- Single Skill Card --> */}
            <div class="col-md-2 col-4 mb-4">
              <div class="text-center" style={{ border: '1px solid' }}>
                <img src={HtmlImg} class="card-img-top w-50" alt="html" />
                <h3>HTML</h3>
              </div>
            </div>

            {/* <!-- Single Skill Card --> */}
            <div class="col-md-2 col-4 mb-4">
              <div class="text-center" style={{ border: '1px solid' }}>
                <img src={CssImg} class="card-img-top w-50" alt="css" />
                <h3>CSS</h3>
              </div>
            </div>

            {/* <!-- Single Skill Card --> */}
            <div class="col-md-2 col-4 mb-4">
              <div class="text-center" style={{ border: '1px solid' }}>
                <img src={JavaImg} class="card-img-top w-50" alt="bootstrap" />
                <h3>Bootstrap</h3>
              </div>
            </div>

            <div class="col-md-2 col-4 mb-4">
              <div class="text-center" style={{ border: '1px solid' }}>
                <img src={ReactImg} class="card-img-top w-50" alt="React" />
                <h3>React</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Example Section --> */}
      <section class="example-section py-5">
        <div class="container">
          {/* <!-- Section Header --> */}
          <div class="example-header d-flex justify-content-between align-items-center mb-4">
            <h2 class="example-heading-text">One Platform, Endless Possibilities</h2>
            <a href="#" class="secondary-button">See More Examples <i class="fa-solid fa-right-long"></i></a>
          </div>

          {/* <!-- Example Cards Grid --> */}
          <div class="row">
            {/* <!-- Example Card 1 --> */}
            <div class="col-md-3 mb-4">
              <a href={MyImg} class="example-card card h-100 text-center p-4">
                <h3 class="card-text">Can use example text 1 for description.</h3>
              </a>
            </div>

            {/* <!-- Example Card 2 with Background Image --> */}
            <div class="col-md-3 mb-4">
              <a href="#" class="example-card card h-100 text-center p-4" style={{ background: 'linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.8))', url: { MyImg }, background: 'cover', color: 'white' }}>
                <h3 class="card-text">Can use example text 2 with background image.</h3>
              </a>
            </div>

            {/* <!-- Example Card 3 --> */}
            <div class="col-md-3 mb-4">
              <a href="#" class="example-card card h-100 text-center p-4">
                <h3 class="card-text">Can use example text 3 for description.</h3>
              </a>
            </div>

            {/* <!-- Example Card 4 --> */}
            <div class="col-md-3 mb-4">
              <a href="#" class="example-card card h-100 text-center p-4">
                <h3 class="card-text">Can use example text 4 for description.</h3>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
