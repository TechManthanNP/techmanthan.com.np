"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { GoClock } from "react-icons/go";
import { IoIosPin } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
import "../../../styles/components/careerPage/jobsPage/_jobOpenings.scss";
const jobList = [
  {
    id: 1,
    title: "Frontend Developer (React.js)",
    type: "Job",
    location: "On Site",
    address: "Bhaktapur, Nepal",
    description:
      "Looking for a React.js developer with strong UI/UX sense and experience in SCSS.",
  },
  {
    id: 2,
    title: "Backend Developer Intern",
    type: "Internship",
    location: "Remote",
    address: "Bhaktapur, Nepal",
    description:
      "Exciting internship opportunity to work with Node.js, Express, and MongoDB.",
  },
  {
    id: 3,
    title: "UI/UX Designer (Figma)",
    type: "Job",
    location: "On Site",
    address: "Bhaktapur, Nepal",
    description:
      "Full-time UI/UX designer with expertise in Figma and modern design systems.",
  },
  {
    id: 4,
    title: "Full Stack Developer (MERN)",
    type: "Job",
    location: "On Site",
    address: "Bhaktapur, Nepal",
    description:
      "Seeking a Full Stack Developer with expertise in MongoDB, Express, React, and Node.js.",
  },
];

export default function JobOpenings() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  const filteredJobs = jobList.filter((job) => {
    const matchesSearch = job.title
      .toLowerCase()
      .includes(search.toLowerCase());
    const matchesFilter = filter === "All" || job.type === filter;
    return matchesSearch && matchesFilter;
  });

  return (
    <section className="job-openings">
      {/* Header */}
      <motion.div
        className="header"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2>
          Current <span className="highlight">Job Openings</span>
        </h2>
        <p>Explore opportunities to grow your career with us</p>
      </motion.div>

      {/* Search + Filter */}
      <div className="filters">
        <div className="search-filter-wrapper">
          <div className="search">
            <IoSearch />
            <input
              type="text"
              placeholder="Search vacancy"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <select value={filter} onChange={(e) => setFilter(e.target.value)}>
            <option value="All">All</option>
            <option value="Job">Job</option>
            <option value="Internship">Intern</option>
          </select>
        </div>
      </div>

      {/* Job Cards */}
      <div className="job-cards">
        {filteredJobs.length > 0 ? (
          filteredJobs.map((job) => (
            <motion.div
              key={job.id}
              className={`job-card ${job.type.toLowerCase()}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h3>{job.title}</h3>
              <p className="location">
                <GoClock /> {job.location}
              </p>
              <p className="address">
                <IoIosPin /> {job.address}
              </p>{" "}
              <button className="apply-btn">Apply Now</button>
            </motion.div>
          ))
        ) : (
          <p className="no-results">No jobs found.</p>
        )}
      </div>
    </section>
  );
}
