import axios from "axios";
import React, { useState, useEffect } from "react";
import "./App.css";
import API from "./utils/API";
function App() {
  // Setting the state
  const [inputText, setInputText] = useState("");
  const [employees, setEmployees] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredEmployees, setFilteredEmployees] = useState([]);
  const [data, setData] = useState([]);
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
  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    API.getEmployees()
      .then((res) => setData(res.data.results))
      .catch((err) => console.log(err));
  };
  const filterHandler = () => {
    switch (status) {
      case "completed":
        setFilteredEmployees(
          employees.filter((employee) => employee.completed === true)
        );
        break;
      case "uncompleted":
        setFilteredEmployees(
          employees.filter((employee) => employee.completed === false)
        );
      default:
        setFilteredEmployees(employees);
        break;
    }
  };
  const saveLocalEmployees = () => {
    localStorage.setItem("employees", JSON.stringify(data));
  };
}

export default App;
