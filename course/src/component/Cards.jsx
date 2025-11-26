import React from 'react';
import Card  from './Card.jsx';

 const Cards = (props) => {
    let courses = props.courses;



    function getCourses(){
        let allcourses =[];
        // getCouses hai ye sara data ek array me la kr de rha hai 
        Object.values(courses).forEach(array => {
             array.forEach(coursedata =>{
                allcourses.push(coursedata);
             });
        });
        return allcourses;
    }
       
  return (
    <div>
        {
        getCourses().map((course) =>{
           return <Card key={course.id} course={course}/>
        })
    }
    </div>
  )
}


export default Cards;