import React from 'react'
import'./Filter.css'

 const Filter = (props) => {
  let filterdata = props.filterData;
  let category = props.category;
  let setcategory = props.setcategory;


  function filterhandler(title){
    setcategory(title);
  }

  return (
    <div className="filter-container">
        {
        filterdata.map((data) =>(
        <button 
        key = {data.id}
        className={`filter-button ${category === data.title ? 'active' : ''}`}
        onClick={() =>filterhandler(data.title)}>  
         
          
        {data.title}
        </button>
         
        ))}
        </div>
    

  )
}

export default Filter;