import React from 'react'
import './Slider.css';
import './Mediaquery.css';
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';


const Footer = () => {


      
  return (
      
      <footer>
      <div className="container my-5 footer">
            <div className="row pt-5">
                  <div className="col-md-4 col-sm-6">
                  <img src="./image/it.jpeg" alt=""  width="200px" height="200px" className='rounded-circle'
                  />
                  </div>
                  <div className="col-md-8">
                        <div className="row">
                              <div className="col-md-4 col-sm-6">    
                              <h3>Courses here</h3>
                              <li>Frontend Development</li>
                              <li>Backend Development</li>
                              <li>Data Scientist - Coming Soon!!!</li>
                              <li>AI ML Learning - Coming Soon!!!</li>


                              </div>
                              <div className="col-md-4 col-sm-6">
                              <h3>Quick Links</h3>
                              {/* <li  as = {Link} to="/"  >Home</li>
                              <li as = {Link} to="/about">About </li>
                              <li as = {Link} to="/courses">Courses</li>
                              <li as = {Link} to="/contact">Contact</li> */}
                             
                             <Nav className="mt-2 d-block footer-nav ">
                  <Nav.Link as = {Link} to="/" className='active' >Home</Nav.Link>
                  <Nav.Link as = {Link} to="/about">About</Nav.Link>
                  <Nav.Link as = {Link} to="/contact">Contact</Nav.Link>
                  <Nav.Link as = {Link} to="/courses">Courses</Nav.Link>

                  
                </Nav>

                                    
                              </div>
                              <div className="col-md-4 col-sm-6">
                              <h3>Get in touch  </h3>
                              <li>rimjhimgupta786@gmail.com</li>
                              <li>facebook</li>
                              <li>Github</li>
                              <li>Linkedin</li>
                              <li>Instagram</li>

                                    
                              </div>
                        </div>

                  </div>
            </div>
      </div>
      <div className="bottom-footer">
            <div className="left">
            Copyright@ Tech Skills Solution - 2024
            </div>
            <div className="right">
            Designed By Rimjhim Gupta - 2024

            </div>

      </div>
      </footer>
  )
}

export default Footer