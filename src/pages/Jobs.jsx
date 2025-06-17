import React from 'react';
import './Jobs.css';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const Jobs = () => {
  const fresherJobs = [
    { title: 'React Intern', location: 'Remote', type: 'Internship' },
    { title: 'Junior Frontend Developer', location: 'Hyderabad, India', type: 'Full-Time' },
    { title: 'UI/UX Designer Trainee', location: 'Bangalore, India', type: 'Internship' },
    { title: 'Quality Assurance Tester', location: 'Remote', type: 'Full-Time' },
    { title: 'Junior Backend Developer (Node.js)', location: 'Chennai, India', type: 'Full-Time' },
  ];

  const experiencedJobs = [
    { title: 'Senior React Developer', location: 'Bangalore, India', type: 'Full-Time' },
    { title: 'Tech Lead (Full Stack)', location: 'Remote', type: 'Full-Time' },
    { title: 'Project Manager', location: 'Mumbai, India', type: 'Full-Time' },
    { title: 'DevOps Engineer', location: 'Hyderabad, India', type: 'Full-Time' },
    { title: 'Senior Backend Developer (Node.js)', location: 'Chennai, India', type: 'Full-Time' },
  ];

  return (
    <>
    <Navbar/>
    <div className="jobs-page">
      <h1 className="jobs-title">Career Opportunities</h1>

      <div className="jobs-wrapper">
        <section className="job-section fresher-section">
          <h2>Freshers</h2>
          <div className="job-list">
            {fresherJobs.map((job, index) => (
              <div className="job-card" key={index}>
                <h3>{job.title}</h3>
                <p><strong>Location:</strong> {job.location}</p>
                <p><strong>Type:</strong> {job.type}</p>
                <button className="apply-btn">Apply Now</button>
              </div>
            ))}
          </div>
        </section>

        <section className="job-section experienced-section">
          <h2>Experienced</h2>
          <div className="job-list">
            {experiencedJobs.map((job, index) => (
              <div className="job-card" key={index}>
                <h3>{job.title}</h3>
                <p><strong>Location:</strong> {job.location}</p>
                <p><strong>Type:</strong> {job.type}</p>
                <button className="apply-btn">Apply Now</button>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
    <Footer/>
                </>
  );
};

export default Jobs;
