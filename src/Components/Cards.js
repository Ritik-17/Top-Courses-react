import React, { useState } from 'react';
import Card from './Card';

const Cards = (props) => {
    let courses = props.courses;
    const [likedCourses, setLikedCourses] = useState([]);
    const Category = props.Category;
    let allcourses = [];

    
    // getcourses fuction returns a list of all courses received from apicall
    const getCourses = () => {
        if(Category === "All"){
            Object.values(courses).forEach(courseCategory => {
                courseCategory.forEach(course => {
                    allcourses.push(course);
                })            
            })
            return allcourses;
        }
        else{
            // to return data/array category wise
            return courses[Category];
        }    
    }
    
  return (
    <div className='flex flex-wrap justify-center gap-4 mb-4'>
        {getCourses().map( (course) => (
             <Card key={course.id} course={course}
             likedCourses={likedCourses}
             setLikedCourses={setLikedCourses} />
        ))}
    </div>
  )
}

export default Cards;
