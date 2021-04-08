// import axios from "axios";
import React, { useState, useEffect } from "react";
import "./App.css";
import API from "./utils/API";
import Table from "./components/Table";
import Form from "./components/Form";
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
    getLocalEmployees();
  }, []);

  useEffect(() => {
    filterHandler();
    saveLocalEmployees();
  }, [employees, status]);

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
  const getLocalEmployees = () => {
    if (localStorage.getItem("employees") === null) {
      localStorage.setItem("employees", JSON.stringify([]));
    } else {
      let localEmployee = JSON.parse(localStorage.getItem("employees"));

      setEmployees(localEmployee);
    }
  };
  return (
    <div>
      <header>
        <h1>Employee Directory</h1>
      </header>
      <Form
        inputText={inputText}
        employees={employees}
        setEmployees={setEmployees}
        setInputText={setInputText}
        setStatus={setStatus}
        data={data}
        setData={setData}
      />
      <Table
        setEmployees={setEmployees}
        employees={employees}
        filteredEmployees={filteredEmployees}
        data={data.filter((employee) =>
          `${employee.name.first} ${employee.name.last}`
            .toLowerCase()
            .includes(inputText.toLowerCase())
        )}
        setData={setData}
      />
    </div>
  );
}

export default App;
