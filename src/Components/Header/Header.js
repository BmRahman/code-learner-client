import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import RightNav from '../RightNav/RightNav';
import './Header.css';
import { AuthContext } from './../../Contexts/AuthProvider';
import { Image } from 'react-bootstrap';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

const Header = () => {

    const {user, userLogout} = useContext(AuthContext)

    const handleLogout = () => {
      userLogout()
      .then(() => {})
      .catch(error => {
      console.error(error)
    })
    }

    return (
        <div>
    <Navbar collapseOnSelect expand="lg" className='header'>
      <Container>
        <Navbar.Brand> <Link to='/home' className='text-decoration-none'>Code Learner</Link> </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link> <Link to='/home' className='text-decoration-none'>Home</Link> </Nav.Link>
            <Nav.Link> <Link to='/courses' className='text-decoration-none'>All Courses</Link> </Nav.Link>
            <Nav.Link> <Link to='/blog' className='text-decoration-none'>Blog</Link> </Nav.Link>
            {
              user?.email || user?.displayName ? <Nav.Link onClick={handleLogout}> <Link className='text-decoration-none'>Log Out</Link> </Nav.Link> :
              <>
              <Nav.Link> <Link to='/login' className='text-decoration-none'>Login</Link> </Nav.Link>
              <Nav.Link> <Link to='/register' className='text-decoration-none'>Sign Up</Link> </Nav.Link>
              </>
            }
          </Nav>
          <Nav>
            <Nav.Link>
            {
              user?.displayName
            }
            </Nav.Link>
            <Nav.Link>
              
                <Tippy content={user?.displayName}>
                  {
                    user?.photoURL && <Image roundedCircle src={user.photoURL} style={{width:'40px'}} />
                  }
                </Tippy>
              
            </Nav.Link>
          </Nav>
          <div className='d-none'>
            <RightNav></RightNav>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </div>
    );
};

export default Header;