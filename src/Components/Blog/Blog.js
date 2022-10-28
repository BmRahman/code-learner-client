import React from 'react';
import './Blog.css';
import Accordion from 'react-bootstrap/Accordion';
import { Container } from 'react-bootstrap';

const Blog = () => {
    return (
        <div className='blog bg-dark'>
            <Container>
            <h3 className='py-4 text-center'>Welcome to our blog section</h3>


    <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header>What is CORS?</Accordion.Header>
        <Accordion.Body>
        CORS stands for Cross-Origin Resource Sharing. It allows us to relax the security applied to an API. This is done by bypassing the Access-Control-Allow-Origin headers, which specify which origins can access the API. In other words, CORS is a browser security feature that restricts cross-origin HTTP requests with other servers and specifies which domains access your resources.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Why are you using firebase? What other options do you have to implement authentication?</Accordion.Header>
        <Accordion.Body>
         We are using firebase for user authentication system. we can control and monitor users in our website by firebase. we can also secure our website by firbase.

         we also have some other alternatives to firebse. here are some of them 
         1.Auth0
         2.Okta
         3.Passport
         4.Keylock
         5.Amazon Cognito
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="2">
        <Accordion.Header>How does the private route work?</Accordion.Header>
        <Accordion.Body>
        The private route component is similar to the public route, the only change is that redirect URL and authenticate condition. If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated (Logged in).
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="3">
        <Accordion.Header>What is Node? How does Node work?</Accordion.Header>
        <Accordion.Body>
        Node. js is an open-source, cross-platform JavaScript runtime environment and library for running web applications outside the client's browser. Node allows developers to write JavaScript code that runs directly in a computer process itself instead of in a browser. Node can, therefore, be used to write server-side applications with access to the operating system, file system, and everything else required to build fully-functional applications.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
            </Container>
        </div>
    );
};

export default Blog;