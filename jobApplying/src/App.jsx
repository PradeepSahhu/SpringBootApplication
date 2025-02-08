import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./App.css";
import JobList from "./JobList.jsx";
import PostJob from "./PostJob.jsx";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Job Portal</h1>
          <nav className="navbar">
            <Link to="/post-job">Post Job</Link>
            <Link to="/jobs">View Jobs</Link>
          </nav>
        </header>
        <Routes>
          <Route path="/jobs" element={<JobList />} />
          <Route path="/post-job" element={<PostJob />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
