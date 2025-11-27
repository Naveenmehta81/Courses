
import './App.css'
import {apiUrl , filterData } from "./data.jsx";
import Navbar from './component/Navbar.jsx';
import Filter from './component/Filter.jsx';
import Cards from './component/Cards.jsx';
import {toast} from  'react-toastify';
import { useEffect ,useState } from 'react';
import Spinner from './component/Spinner.jsx';


function App() {

  const [courses, setCourses] = useState(null);
  const [loading, setLoading] = useState(true);
  const [category , setcategory] = useState(filterData[0].title);

  async function fetchdata() {
    setLoading(true);
    try {
      let Response = await fetch(apiUrl);
      let output = await Response.json();

      setCourses(output.data);
    } catch (error) {
      toast.error("someting wrong happen");
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchdata();
  }, []);






  return (
    < >
    <div className="App">
      <div>
        <Navbar />
      </div>
      <div className="main-content-wrapper">
        <div className="filter-container-wrapper">
        <Filter filterData={filterData}
        category={category}
        setcategory = {setcategory} />     {/* i get filter data from data and then pass through props  */}
      </div>
      <div className="cards-loading-wrapper">
        {loading ? (<Spinner />) : (<Cards  courses={courses} category={category}/>) } 
      </div>
    </div>
      </div>
      
    </>
  );
}

export default App;

