import React, { useState, useEffect } from "react";
import "./JobList.css";

const defaultJobs = [
  {
    role: "Software Engineer",
    description: "Develop and maintain web applications.",
    experience: "2-4 years",
    skills: ["JavaScript", "React", "Node.js"],
  },
  {
    role: "Data Scientist",
    description: "Analyze and interpret complex data.",
    experience: "3-5 years",
    skills: ["Python", "Machine Learning", "Data Analysis"],
  },
  {
    role: "Frontend Developer",
    description: "Build and optimize user interfaces.",
    experience: "1-3 years",
    skills: ["HTML", "CSS", "JavaScript", "React"],
  },
];

function JobList() {
  const [jobs, setJobs] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    // Fetch all job posts initially
    fetch("http://localhost:9000/posts")
      .then((response) => response.json())
      .then((data) => setJobs(data.length ? data : defaultJobs))
      .catch((error) => {
        console.error("Error fetching jobs:", error);
        setJobs(defaultJobs);
      });
  }, []);

  useEffect(() => {
    if (searchTerm.length > 2) {
      // Fetch jobs based on search term
      fetch(`http://localhost:9000/posts?search=${searchTerm}`)
        .then((response) => response.json())
        .then((data) => setJobs(data.length ? data : defaultJobs))
        .catch((error) => {
          console.error("Error fetching jobs:", error);
          setJobs(defaultJobs);
        });
    } else {
      // Fetch all job posts if search term is less than or equal to 2 characters
      fetch("http://localhost:9000/posts")
        .then((response) => response.json())
        .then((data) => setJobs(data.length ? data : defaultJobs))
        .catch((error) => {
          console.error("Error fetching jobs:", error);
          setJobs(defaultJobs);
        });
    }
  }, [searchTerm]);

  const filteredJobs = jobs.filter((job) => {
    const searchString = `${job.role} ${job.description} ${
      job.experience
    } ${job.skills.join(" ")}`.toLowerCase();
    return searchString.includes(searchTerm.toLowerCase());
  });

  return (
    <div>
      <h2>Job Postings</h2>
      <input
        type="text"
        placeholder="Search by any field"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-input"
      />
      <div className="JobList">
        {filteredJobs.map((job, index) => (
          <div key={index} className="job-card">
            <h3>{job.role}</h3>
            <p>{job.description}</p>
            <p>
              <strong>Experience:</strong> {job.experience}
            </p>
            <p>
              <strong>Skills:</strong> {job.skills.join(", ")}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default JobList;
