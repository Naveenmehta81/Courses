import React from 'react'
import { FcLike ,  FcLikePlaceholder} from "react-icons/fc";
import './card.css';
import { toast } from 'react-toastify';




 const Card = (props) => {
   let course = props.course;

   let likecourses = props.likecourses;
   let setlikecourses = props.setlikecourses; 

    function clickhandler(){
      //logic
      if(likecourses.includes(course.id)){
        // phel se like hai 
        setlikecourses((prev) =>  prev.filter((cid) =>(cid !== course.id)));
        toast.warning("you unlike ");
      }
      else{
          // not liked 
          if(likecourses.length == 0 ){
            setlikecourses([course.id]);

          }else{
               setlikecourses((prev) => [...prev , course.id]);
          }
          toast.success("liked success");
      }
    }
  
  return (
    <div className="card">
        <div className="card-image-container">
             <img src={course.image.url}></img>
            <div>
            <button onClick={clickhandler}>
              {
                 likecourses.includes(course.id) ?
                        (<FcLike fontSize= "2.5rem"/>) : (<FcLikePlaceholder fontSize= "2.5rem"/>)
              }
              </button>
            </div>
            </div>
         


         <div className="card-info-container">
          <p>{course.title}</p>
<p>
  {
  course.description
  }



</p>

</div>
        </div>
  )
}

export default Card;
