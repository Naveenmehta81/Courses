
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
    <>
      <div>
        <Navbar />
      </div>
      <div>
        <Filter filterData={filterData} />     {/* i get filter data from data and then pass through props  */}
      </div>
      <div>
        {loading ? (<Spinner />) : (<Cards  courses={courses}/>) } 
      </div>

    </>
  );
}

export default App;

