import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import RightNav from '../RightNav/RightNav';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FaStar, FaStarHalf } from 'react-icons/fa';
import './Course.css';

const Course = () => {
    const allDetails = useLoaderData()
    const {title, image_url, details, price, mentor, rating} = allDetails
    return (
        <div>
            <Container>
                <Row>
                    <Col lg='10'>
                    <h2 className='text-center my-5'>About Our {title} Course</h2>

    <Card className='single mb-5'>
      <Card.Img variant="top" className='single-im' src={image_url}/>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
            {details}
        </Card.Text>
        <Card.Text>
            <p>Mentor: {mentor}</p>
            <p>Special Offer: ${price}</p>
            <div className='d-flex justify-content-between'>
                <div className='rate'>
                    <FaStar className='ci'></FaStar><FaStar className='ci'></FaStar><FaStar className='ci'></FaStar><FaStar className='ci'></FaStar><FaStarHalf className='ci'></FaStarHalf> {rating.number}
                </div>
                <div className='rate-text'>
                    {rating.badge}
                </div>
            </div>
        </Card.Text>
        <Button className='view'>Get Premium</Button>
      </Card.Body>
    </Card>
                    </Col>

                    <Col lg='2'>
                        <RightNav></RightNav>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Course;