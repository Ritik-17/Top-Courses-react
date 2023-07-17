import React from 'react';
import Card from './Card';

const Cards = (courses) => {
    let allcourses = [];

    // getcourses fuction returns a list of all courses received from apicall
    const getCourses = () => {
        Object.values(courses).forEach((courseCategory) => {
            courseCategory.forEach((course)=>{
                allcourses.push(course);
            })            
        })
        return allcourses;
    } 
    getCourses();
    
  return (
    <div>
        {allcourses.map((course) => {
            return <Card/>
        })}
    </div>
  )
}

export default Cards;
