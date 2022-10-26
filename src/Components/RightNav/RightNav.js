import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './RightNav.css';

const RightNav = () => {
    const [courses, setCourses] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/all-courses')
        .then(res => res.json())
        .then(data => setCourses(data))
    }, [])

    return (
        <div>
            <h5 className='mt-5 mb-4 text-center'>Our All {courses.length} Courses</h5>
            {
                courses.map(course => 
                 <p className='w-100 text-center c-name'>
                
                <Link className='text-decoration-none' to={`/course/${course.id}`} key={course.id}> {course.name} </Link>
                 
                 </p>
                )
            }
        </div>
    );
};

export default RightNav;