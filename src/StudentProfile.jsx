import React from "react";

function StudentProfile({ name, department, year }) {
  return (
    <div className="student-profile">
      <p>Name: {name}</p>
      <p>Department: {department}</p>
      <p>Year: {year}</p>
    </div>
  );
}

export default StudentProfile;