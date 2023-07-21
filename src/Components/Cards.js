import React, { useState } from 'react';
import Card from './Card';

const Cards = (props) => {
    let allcourses = [];
    let courses = props.courses;
    const [likedCourses, setLikedCourses] = useState([]);

    // getcourses fuction returns a list of all courses received from apicall
    const getCourses = () => {
        Object.values(courses).forEach(courseCategory => {
            courseCategory.forEach(course => {
                allcourses.push(course);
            })            
        })
        return allcourses;
    }
    
  return (
    <div className='flex flex-wrap justify-center gap-4 mb-4'>
        {getCourses().map(course => (
             <Card key={course.id} course={course}
             likedCourses={likedCourses}
             setLikedCourses={setLikedCourses} />
        ))}
    </div>
  )
}

export default Cards;
