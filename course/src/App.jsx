
import './App.css'
import {apiUrl , filterData } from "./data.jsx";
import Navbar from './component/Navbar.jsx';
import Filter from './component/Filter.jsx';
import Cards from './component/Cards.jsx';


function App() {
 

  return (
    <>
     <Navbar/>
    <Filter  filterData={filterData}/>   // i get filter data from data and then pass through props 
    <Cards/> 
   
    </>
  )
}

export default App;
