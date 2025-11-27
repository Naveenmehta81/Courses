import React, { useState } from 'react';
import Card  from './Card.jsx';
import './cards.css';

 const Cards = (props) => {
    let courses = props.courses;
    let category = props.category;

    const[likecourses , setlikecourses] = useState([]); // yha kyu islye ki yha sb course hai 



    function getCourses(){
      if(category === "All"){
          let allcourses =[];
        // getCouses hai ye sara data ek array me la kr de rha hai 
        Object.values(courses).forEach(array => {
             array.forEach(coursedata =>{
                allcourses.push(coursedata);
             });
        });
        return allcourses;
    }
    else{
      return courses[category];
    }
      }
      
       
  return (
    <div className="cards-container">
        {
        getCourses().map((course) =>{
           return <Card key={course.id} course={course} 
           likecourses={likecourses}
           setlikecourses={setlikecourses}/>
        })
    }
    </div>
  )
}


export default Cards;