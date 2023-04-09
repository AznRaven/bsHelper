import "./index.css";
import { useState } from "react";
// import EmployeePage from "./pages/EmployeePage";
// import { data } from "./data";
import { Route, Routes } from "react-router-dom"; 
import Home from "./pages/Home";

export default function App() {
  

  return (
    <div>
      {/* <HomePage employees={employees} addEmployee={addEmployee} /> */}
      
      <Routes> 
        <Route 
          path="/"
          element={<Home/>}
        />
        {/* <Route
          path="/EmployeePage/:emp"
          element={<EmployeePage employees={employees} />}
        /> */}
        {/* <Route path='/price/:symbol' element={<Price/>} /> */}
        {/* <Route path='*' element={<Navagate to='/' />} /> */}
      </Routes>
    </div>
  );
}