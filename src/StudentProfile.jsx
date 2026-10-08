import React, { useEffect } from "react";

function StudentProfile({ name, department, year, count, onComplete, onReset }) {
  useEffect(() => {
    const previousTitle = document.title;

    document.title = `Practice Sessions: ${count}`;

    return () => {
      document.title = previousTitle;
    };
  }, [count]);

  return (
    <div className="student-profile">
      <p>Name: {name}</p>
      <p>Department: {department}</p>
      <p>Year: {year}</p>
      <p>Practice Sessions: {count}</p>

      <button onClick={onComplete}>Complete Practice</button>
      <button onClick={onReset}>Reset</button>
    </div>
  );
}

export default StudentProfile;