import React, { useEffect, useState } from "react";
import Navbar from "./Components/Navbar";
import Filter from "./Components/Filter";
import Cards from "./Components/Cards";
import { filterData, apiUrl } from "./data";
import { toast } from "react-toastify";
import Spinner from "./Components/Spinner";

const App = () => {

  const [courses, setCourse] = useState([]);
  const [Loading, setLoading] = useState(true);

  const fetchData = async() => {
    setLoading(true);
    try{
      const response = await fetch(apiUrl);
      const output = await response.json();
      // saving the output data into variable - "output"
      // output.data = data here is an element in output, if we look at out api call data
      setCourse(output.data);
    }
    catch(error){
      toast.error("Something went wrong");
    }
    setLoading(false);
  }

  useEffect(()=>{
    fetchData();
  },[]);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar/>
      <div className=" bg-bgDark2 ">
        <Filter 
        filterData = {filterData} />
        <div className="w-11/12 flex flex-wrap max-w-[1200px] mx-auto items-center justify-center min-h-[50vh]">
            {Loading ? (<Spinner/>) : (<Cards courses = {courses} />) }
        </div>
      </div>
       
    </div>
  )
};

export default App;
