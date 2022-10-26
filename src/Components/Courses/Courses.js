import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import RightNav from './../RightNav/RightNav';

const Courses = () => {
    return (
        <div>
            <Container>
                <Row>
                    <Col lg='10' sm='12'>
                        <h2>all course</h2>
                    </Col>
                    <Col lg='2' className='d-none d-lg-block'>
                        <RightNav></RightNav>
                    </Col>
                </Row>
            </Container>
        </div>
        );
};

export default Courses;