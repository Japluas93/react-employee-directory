import axios from "axios";
import React, { useState, useEffect } from "react";
import "./App.css";
const api = "https://randomuser.me/api/?results=50";
function App() {
  // const [employees, setEmployees] = useState([]);
  // useEffect(() => {
  //   fetch(api)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data.results);
  //       setEmployees(data.results);
  //     });
  // }, []);
  // const sortAge = () => {
  //   let sorted = employees.sort((a, b) => a.dob.age - b.dob.age);
  //   setEmployees(sorted);
  // };
  // return (
  //   <div className="App">
  //     <button onClick={sortAge}>Sort by age</button>
  //     {employees.map((employee) => (
  //       <h1>{employee.name.first}</h1>
  //       // <table>
  //       //   <tr>
  //       //     <th>{employee.name.first}</th>
  //       //     <th>{employee.name.last}</th>
  //       //   </tr>
  //       // </table>
  //     ))}
  //   </div>
  // );
}

export default App;
