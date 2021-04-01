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
    <tr>
      <td>
        <img src={employee.picture.medium} alt="employee" />
      </td>
      <td>{employee.name.first}</td>
      <td>{employee.name.last}</td>
      <td>{employee.cell}</td>
      <td>
        <button onClick={deleteHandler}></button>
      </td>
    </tr>
  );
};

export default Employee;
