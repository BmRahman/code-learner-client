import React from 'react';
import { Button, Form } from 'react-bootstrap';
import './Contact.css';

const Contact = () => {
    return (
        <div className='bg-dark'>  
            <h2 className='con text-center pb-3'>Contact Us</h2>    


            <div className='message'>
            <Form>
            <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Your Name</Form.Label>
        <Form.Control type="text" placeholder="Enter Name" />
      </Form.Group>
      
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Your Message</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
      <Button variant="primary" type="submit" className='btn-register'>
        Send
      </Button>
    </Form>
            </div>    
        </div>
    );
};

export default Contact;