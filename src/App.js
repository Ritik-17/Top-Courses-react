import React, { useEffect, useState } from "react";
import Navbar from "./Components/Navbar";
import Filter from "./Components/Filter";
import Cards from "./Components/Cards";
import { filterData, apiUrl } from "./data";
import { toast } from "react-toastify";



const App = () => {

  const [courses, setCourse] = useState(null);
  useEffect(()=>{
    const fetchData = async() => {
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
    }
    fetchData();
  },[] )
  
  return (
    <div>
      <Navbar/>
      <Filter 
      filterData = {filterData} />
      <Cards courses = {courses} />
    </div>
  )
};

export default App;
