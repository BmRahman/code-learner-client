import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Home.css';
import banner from '../../Assets/banner.png';
import Image from 'react-bootstrap/Image'
import Offer from '../Offer/Offer';
import Transform from './Transform/Transform';
import Contact from './Contact/Contact';

const Home = () => {
    return (
        <div className='bg-dark home-main'>
            <Container>
            <h2 className='text-center py-5'><span className='welcome'>Welcome to</span> Code Learner</h2>

             <Row className='pb-5'>
                <Col lg='6' className='text-center'>
                    <Image src={banner} fluid className='ban-im'></Image>
                </Col>

                <Col lg='6'>
                    <p className='ban-text'>Code Learner is one of the best portals for online courses when it comes to learning. We are the largest online course provider with a marketplace of 2 million students, 5,000 instructors, and 100+ courses. You can choose the courses by category, instructor popularity, user ratings & reviews, and author profiles. There are many coding courses from top instructors who teach you programming by building real-world applications. There are many free learner courses available to learn basic programming. There is no single subscription to access all the courses in the catalog. You need to individually subscribe to the required courses. However, if you have access to Code Learner business, you will have access to 160+ courses.</p>
                </Col>
            </Row>   

            </Container>
            <Offer></Offer>
            <Transform></Transform>
            <Contact></Contact>
        </div>
    );
};

export default Home;