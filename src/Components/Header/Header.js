import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import RightNav from '../RightNav/RightNav';

const Header = () => {
    return (
        <div>
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand> <Link to='/home' className='text-decoration-none'>Code Learner</Link> </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link> <Link to='/home' className='text-decoration-none'>Home</Link> </Nav.Link>
            <Nav.Link> <Link to='/courses' className='text-decoration-none'>All Courses</Link> </Nav.Link>
            <Nav.Link> <Link to='/blog' className='text-decoration-none'>Blog</Link> </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">More deets</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Dank memes
            </Nav.Link>
          </Nav>
          <div className='d-lg-none'>
            <RightNav></RightNav>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </div>
    );
};

export default Header;