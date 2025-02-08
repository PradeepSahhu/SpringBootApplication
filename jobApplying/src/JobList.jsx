import React, { useState } from "react";
import "./JobList.css";

const jobs = [
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
  {
    role: "Backend Developer",
    description: "Develop server-side logic and APIs.",
    experience: "3-5 years",
    skills: ["Node.js", "Express", "MongoDB"],
  },
];

function JobList() {
  const [searchTerm, setSearchTerm] = useState("");

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
