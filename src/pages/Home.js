import React from 'react';
import ProjectCard from '../components/ProjectCard';

function Home() {
  return (
    <>
      <ProjectCard title="Home">
        <p>Welcome to BitWattr, an AI startup focused on research in AI models, deep learning, and machine learning.</p>
      </ProjectCard>
      <ProjectCard title="Hi there">
        <p>We made the model</p>
      </ProjectCard>
    </>
  );
}

export default Home;