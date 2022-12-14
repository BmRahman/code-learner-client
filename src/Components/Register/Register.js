import React, { useContext, useState } from 'react';
import { Container } from 'react-bootstrap';
import './Register.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { AuthContext } from '../../Contexts/AuthProvider';
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
    const [passwordError, setPasswordError] = useState('')

    const navigate = useNavigate()
    const {createUser, updateUser} = useContext(AuthContext)

    const handleRegister = event => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.url.value;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;
        console.log(email, password, confirm)

        if(password === confirm) {
            createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                form.reset()
                navigate('/')
                handleUpdateUser(name, photoURL)
            })
            .catch(error => {
                console.error(error)
            })
        }
        else{
            setPasswordError('your password did not matched')
        }
    }

    const handleUpdateUser = (name, photoURL) => {
      const profile = {
        displayName: name,
        photoURL: photoURL
      }
      updateUser(profile)
      .then(() => {})
      .catch(error => {
        console.error(error)
      })
    }

    return (
        <div className='bg-dark reg-main'>
            <Container>
            <h2 className='text-center py-5'>Please Sign Up here</h2>


    <Form className='reg-form' onSubmit={handleRegister}>

    <Form.Group className="mb-3">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" name='name' placeholder="Your Name" />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Photo URL</Form.Label>
        <Form.Control type="text" name='url' placeholder="Your Photo URL" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" name='email' placeholder="Enter email" required/>
        <Form.Text className="never">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name='password' placeholder="Password" required/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Confirm Password</Form.Label>
        <Form.Control type="password" name='confirm' placeholder="Password" required/>
      </Form.Group>

      
      <Button type="submit" className='btn-register'>
        Sign Up
      </Button>
      <p className='text-danger my-3 text-uppercase'>{passwordError}</p>
      <p>Already Have An Account? <Link to='/login'>Login Here</Link></p>
    </Form>
            </Container>
        </div>
    );
};

export default Register;