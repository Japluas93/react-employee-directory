import React from "react";

const Employee = ({
  text,
  employee,
  employees,
  setEmployees,
  data,
  setData,
}) => {
  const deleteHandler = () => {
    setEmployees(employees.filter((el) => el.id !== employee.id));
  };

  return (
    <div>
      <li>{employee.name.first}</li>
      <li>{employee.name.last}</li>
      <li>{employee.cell}</li>
      <button onClick={deleteHandler}></button>
    </div>
  );
};

export default Employee;
