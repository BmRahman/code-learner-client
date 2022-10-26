import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import RightNav from './../RightNav/RightNav';
import { useLoaderData } from 'react-router-dom';
import Course from '../Course/Course';
import './Courses.css'

const Courses = () => {
    const allCourse = useLoaderData();
    return (
        <div>
            <Container>
                <Row>
                    <Col lg='10' sm='12'>
                        <h2 className='text-center mt-5 mb-5'>Our Courses</h2>
                        <div className='course-div'>
                        {
                            allCourse.map(course => <Course course={course} key={course.id}></Course>)
                        }
                        </div>
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