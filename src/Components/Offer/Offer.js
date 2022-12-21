import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import {FaChalkboardTeacher, FaBook, FaMoneyCheckAlt} from 'react-icons/fa'
import {FcReading} from 'react-icons/fc'
import './Offer.css'

const Offer = () => {
    return (
        <div className='bg-dark'>
            <Container>
                <h2 className='text-center'>What We Offer</h2>

                <Row>
                    <Col lg='3' md='1' sm='1'>
                        <div className='box-1 text-center my-5'>
                        <FaChalkboardTeacher className='box-ic mb-3'></FaChalkboardTeacher>
                        <h5 className='box-heading mb-3'>Certified Teachers</h5>
                        <p>We have certified instructors. There are many courses from top instructors who teach you programming by building real-world applications. </p>
                        </div>
                    </Col>

                    <Col lg='3' md='1' sm='1'>
                        <div className='box-2 text-center my-5'>
                        <FcReading className='box-ic mb-3'></FcReading>
                        <h5 className='box-heading mb-3'>Special Education</h5>
                        <p>Code Learner is one of the best portals for online courses when it comes to learning. We are the largest online course provider in the Marketplace </p>
                        </div>
                    </Col>

                    <Col lg='3' md='1' sm='1'>
                        <div className='box-1 text-center my-5'>
                        <FaBook className='box-ic mb-3'></FaBook>
                        <h5 className='box-heading mb-3'>Quality Courses</h5>
                        <p>2 million students, 5,000 instructors, and 100+ courses. You can choose from our  courses by category, instructor popularity, user ratings. </p>
                        </div>
                    </Col>

                    <Col lg='3' md='1' sm='1'>
                        <div className='box-2 text-center my-5'>
                        <FaMoneyCheckAlt className='box-ic-alt mb-3'></FaMoneyCheckAlt>
                        <h5 className='box-heading mb-3'>Value For Money</h5>
                        <p>You need to individually subscribe to the required courses. However, if you have access to Code Learner business, you will have access to 160+ courses.  </p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Offer;