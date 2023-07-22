import React from 'react';
import {FcLike, FcLikePlaceholder} from "react-icons/fc";
import { toast } from 'react-toastify';

const Card = (props) => {
    let course = props.course;
    let likedCourses = props.likedCourses;
    let setLikedCourses = props.setLikedCourses;

    function likeHandler(){
        // logic
        // when the course is already liked
        if(likedCourses.includes(course.id)) {
            console.log("1234");
            setLikedCourses( (prev) => prev.filter( (cid) => ( cid !== course.id)) );
            // this filter function will only pass those elements which are not clicked/ or whose id not matches. 
            // cid refers to id of those courses which were liked and course.id id the course which was clicked(liked before but clicked again to unlike)
            toast.warning("Like Removed");
            console.log("4567");
            
        }
        else{
            // Course is not liked
            // course id = 0 means no course is selected  or liked
            if( course.id === 0 ){
                setLikedCourses([course.id]);
            }
            else {
                setLikedCourses((prev)=>[...prev,course.id]);
            }
            toast.success("Like Successfully");
        }
    }

   return (
    <div className='w-[300px] bg-bgDark rounded-md overflow-hidden bg-opacity-80'>
        <div className='relative '>
            <img src={course.image.url} alt=' not found' />

            <div className='w-[35px] h-[35px] bg-white rounded-full absolute right-2 bottom-[-1] grid place-items-center '>
                <button onClick={likeHandler} >
                    {
                        likedCourses.includes(course.id) ? (<FcLikePlaceholder fontSize="1.75rem" />) : (<FcLike fontSize="1.75rem"/>) 
                    }
                    
                </button>
            </div>
        </div>
        
        <div className='p-4'>
            <div className='text-white font-semibold text-lg leading-6' >{course.title}</div>
            <div className='mt-2 text-white ' >
            {
                course.description.length>100 ? (course.description.substr(0, 100)) + "...": (course.description)
            }</div>
        </div>
    </div>
  )
}

export default Card;