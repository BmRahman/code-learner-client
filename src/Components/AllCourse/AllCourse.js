import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import RightNav from './../RightNav/RightNav';
import { useLoaderData } from 'react-router-dom';
import AllCard from '../AllCard/AllCard';
import './AllCourse.css';

const AllCourse = () => {
    const everyCourse = useLoaderData()
    return (
        <div className='all bg-dark'>
            <Container>
                <Row>
                    <Col lg='10'>
                        <h2 className='text-center my-5'>Courses we offer</h2>
                        <div className='all-course'>
                        {
                            everyCourse.map(allCourse => <AllCard allCourse={allCourse} key={allCourse.id}></AllCard>)
                        }
                        </div>
                    </Col>
                    <Col lg='2'>
                        <RightNav></RightNav>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default AllCourse;