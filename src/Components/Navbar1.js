import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import './Slider.css';
import './Mediaquery.css';
import { useNavigate } from 'react-router-dom';




const Navbar1 = () => {
  // const userName =  JSON.parse(localStorage.getItem('user'));
  const navigate = useNavigate();
   
  const loginHandle  = (e) =>{
    e.preventDefault();
    const loggeduser = JSON.parse(localStorage.getItem('user'));
    if(loggeduser ===  loggeduser ){
      alert("you need to login for access courses")
      
          localStorage.setItem('loggedin', true)
          navigate('/register');
          
    }else{
          // alert("wrong email and password");
          navigate('/courses');
    }
}

  return (
      
      <>
   <p className='text-center para'>Welcome - Tech Skills 🎊🎉 </p>

          <Navbar expand="lg" className="bg-body-tertiary navbar">
   {/* <p className='text-center'>Welcome - Tech Skills 🎊🎉 </p> */}

            <Container>
              <Navbar.Brand as = {Link}  to="/"><img src="./image/it.jpeg" alt="" width='80px' /> Tech Skills</Navbar.Brand>

              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav" className='collapse'>
                <Nav className="ms-auto">
                  <Nav.Link as = {Link} to="/" >Home</Nav.Link>
                  <Nav.Link as = {Link} to="/about">About</Nav.Link>
                  <Nav.Link as = {Link} to="/courses" onClick={loginHandle}>Courses</Nav.Link>
                  <Nav.Link as = {Link} to="/contact">Contact</Nav.Link>

                  <Nav.Link as = {Link} to="/register" id='login'>Login</Nav.Link>

                  
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
          </>
        );
      }
      
  

export default Navbar1;