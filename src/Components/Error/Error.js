import React from 'react';
import { Link } from 'react-router-dom';
import './Error.css';

const Error = () => {
    return (
        <div className='bg-dark err'>
            <div>
            <h2 className='text-center'>404 Error</h2>
            <h4 className='text-center'>This page does not exists</h4>
            <h5 className='text-center'>Report a problem to administration or go backe to <Link to='/home'>Home</Link></h5>
            </div>
        </div>
    );
};

export default Error;