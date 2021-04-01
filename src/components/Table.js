import React from "react";
import Employee from "./Employee";
const Table = ({
  employees,
  setEmployees,
  filteredEmployees,
  data,
  setData,
}) => {
  return (
    <div className="employee-container">
      <ul className="employee-list">
        {data.map((employee) => (
          <Employee
            setEmployees={setEmployees}
            setData={setData}
            data={data}
            employees={employees}
            employee={employee}
            text={employee.text}
            key={employee.cell}
          />
        ))}
      </ul>
    </div>
  );
};
export default Table;
