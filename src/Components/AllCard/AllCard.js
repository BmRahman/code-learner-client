import React from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FaStar, FaStarHalf } from 'react-icons/fa';
import './AllCard.css'

const AllCard = ({allCourse}) => {
    const {title, mentor, image_url, rating} = allCourse;
    return (
        <div>
    <Container>
    <Card className='ic'>
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
        <Button className='view'>View Details</Button>
      </Card.Body>
    </Card>
            </Container>
        </div>
    );
};

export default AllCard;