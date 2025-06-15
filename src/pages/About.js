// In About.js
import React from 'react';
import ProjectCard from '../components/ProjectCard';

function About() {
  return (
    <section id="about-section"> {/* Add an ID here */}
      <ProjectCard title="About us">
        <p>An AI startup focused on developing efficient AI models.</p>
        <p>Kerala, India</p>
      </ProjectCard>
    </section>
  );
}

export default About;