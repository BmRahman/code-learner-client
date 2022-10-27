import React from 'react';
import { Container, Image } from 'react-bootstrap';
import Header from '../Header/Header';
import './Checkout.css';
import { Link, useLoaderData } from 'react-router-dom';

const Checkout = () => {
    const checkoutData = useLoaderData()
    const {title, price, mentor, image_url} = checkoutData; 
    return (
        <div className='bg-dark check'>
            <Header></Header>
            
            <Container>
            <h2 className='text-center py-5'>Congratulations! You are now a premium user!</h2>

            <div className='message'>
                <div className='thumb pb-4'>
                    <Image src={image_url} fluid></Image>
                </div>

                <h5>You can now gain access to our premium {title} course just for ${price}.
                    In this course you will be mentored by our highly skilled mentor {mentor}. Hope you will have an awesome journey with us. Thanks for being with us.                
                </h5>

                <p className='text-center py-4'>Go Back To <Link to='/home'>Home</Link> </p>
            </div>
            </Container>
        </div>
    );
};

export default Checkout;