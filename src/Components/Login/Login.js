import React, { useContext, useState } from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate, Link } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';
import {FcGoogle} from 'react-icons/fc'
import {FaGithub} from 'react-icons/fa'
import './Login.css';

const Login = () => {
    const {loginUser, googleLogin} = useContext(AuthContext)
    const [error, setError] = useState('')

    const navigate = useNavigate()


    const handleGoogle = () => {
        googleLogin()
        .then(result => {
            const user = result.user
            console.log(user)
        })
        .catch(error => {
            console.error(error)
        })
    }

    const handleLogin = event => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)

        loginUser(email, password)
        .then(result => {
            const user = result.user;
            console.log(user)
            form.reset()
            setError('')
            navigate('/')

        })
        .catch(error => {
            console.error(error)
            setError(error.message)
        })
    }

    return (
        <div className='bg-dark reg-main'>
            <Container>
            <h2 className='text-center py-5'>Login here</h2>


    <Form className='reg-form' onSubmit={handleLogin}>
    
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" name='email' placeholder="Enter email" required/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name='password' placeholder="Password" required/>
      </Form.Group>

      <Button type="submit" className='btn-register'>
        Log In
      </Button>
      <p className='my-3'>Or Login / Sign Up with</p>
      <div>
        <button className='bg-dark btn-google' onClick={handleGoogle}><FcGoogle className='bg-dark font-g'></FcGoogle></button>
        <button className='bg-dark btn-git'><FaGithub className='bg-dark ms-2 font-g'></FaGithub></button>
      </div>
      <p className='text-danger my-3 text-uppercase'>{error}</p>
      <p>New to Code Learner? <Link to='/register'>Sign Up here now</Link></p>
    </Form>
            </Container>
        </div>
    );
};

export default Login;