import React from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FaStar, FaStarHalf } from 'react-icons/fa';
import './Course.css';

const Course = ({course}) => {
    const {title, mentor, image_url, rating, price} = course;
    return (
        <div>
    <Container>
        <Card>
      <Card.Img variant="top" src={image_url}/>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
            {mentor}
            <div className='d-flex justify-content-between'>
                <div className='rate'>
                    <FaStar className='ic'></FaStar><FaStar className='ic'></FaStar><FaStar className='ic'></FaStar><FaStar className='ic'></FaStar><FaStarHalf className='ic'></FaStarHalf> {rating.number}
                </div>
                <div className='rate-text'>
                    {rating.badge}
                </div>
            </div>
        </Card.Text>
        <Button variant="primary">View Details</Button>
      </Card.Body>
    </Card>
            </Container>
        </div>
    );
};

export default Course;