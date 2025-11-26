import React from 'react'
import'./Filter.css'

 const Filter = (props) => {
  let filterdata = props.filterData;
  return (
    <div className="filter-container">
        {
        filterdata.map((data) =>(
        <button 
        key = {data.id}>
        {data.title}
        </button>
         
        ))}
        </div>
    

  )
}

export default Filter;