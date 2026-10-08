import React, { useState } from "react";
import "./App.css";
import Header from "./Header";
import StudentProfile from "./StudentProfile";
import Footer from "./Footer";

function App() {
  const studentName = "Anu";
  const studentDepartment = "CSE";
  const studentYear = "3rd Year";

  const [count, setCount] = useState(0);
  const [showProfile, setShowProfile] = useState(true);

  const completePractice = () => {
    setCount(count + 1);
  };

  const resetPractice = () => {
    setCount(0);
  };

  return (
    <div>
      <Header />

      <button onClick={() => setShowProfile(!showProfile)}>
        {showProfile ? "Hide Profile" : "Show Profile"}
      </button>

      {showProfile && (
        <StudentProfile
          name={studentName}
          department={studentDepartment}
          year={studentYear}
          count={count}
          onComplete={completePractice}
          onReset={resetPractice}
        />
      )}

      <Footer />
    </div>
  );
}

export default App;