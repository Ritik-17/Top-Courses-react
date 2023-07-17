import React from 'react';
import {FcLike} from "react-icons/fc";
const Card = (course) => {
  return (
    <div>
        <div>
            <img src={course.image.url} />
        </div>
        <div>
            <button>
                <FcLike fontSize="1.75rem" />
            </button>
        </div>
        <div>
            <div>{course.title}</div>
            <div>{course.description}</div>
        </div>
    </div>
  )
}

export default Card;