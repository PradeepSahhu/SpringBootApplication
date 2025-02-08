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
    console.log("Job posted:", job);
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
