import React, { useState } from "react";
import "./PostJob.css";

function PostJob() {
  const [role, setRole] = useState("");
  const [description, setDescription] = useState("");
  const [experience, setExperience] = useState("");
  const [skills, setSkills] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const job = { role, description, experience, skills: skills.split(",") };

    fetch("http://localhost:9000/allPosts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(job),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Job posted:", data);
        // Optionally, you can clear the form fields after successful submission
        setRole("");
        setDescription("");
        setExperience("");
        setSkills("");
      })
      .catch((error) => {
        console.error("Error posting job:", error);
      });
  };

  return (
    <div className="PostJob">
      <h2>Post a Job</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Role:</label>
          <input
            type="text"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Description:</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Experience:</label>
          <input
            type="text"
            value={experience}
            onChange={(e) => setExperience(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Skills (comma separated):</label>
          <input
            type="text"
            value={skills}
            onChange={(e) => setSkills(e.target.value)}
            required
          />
        </div>
        <button type="submit">Post Job</button>
      </form>
    </div>
  );
}

export default PostJob;
