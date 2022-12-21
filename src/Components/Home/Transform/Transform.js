import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import learn from '../../../Assets/learn.png';
import './Transform.css';

const Transform = () => {
    return (
        <div className='bg-dark trans'>
            <Container>
            <Row className='pb-5'>
                <Col lg='6' className='text-center'>
                    <Image src={learn} fluid className='ban-im'></Image>
                </Col>

                <Col lg='6'>
                    <div className='pt-5'>
                    <h2 className='we'>We Transform Learning</h2>
                    <p className='ban-text'>Code Learner is a global EdTech company headquartered in Ireland that has ripped up the slow and outdated rule book when it comes to delivering software development skills. Our LMS, analytics, learning success team and career services provide round-the-clock learning, support, and advice to make career change possible..</p>
                    </div>
                </Col>
            </Row>   
            </Container>
        </div>
    );
};

export default Transform;