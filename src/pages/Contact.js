import React from 'react';
import ProjectCard from '../components/ProjectCard';

function Contact() {
  return (
    <ProjectCard title="Contact Us">
      <p>Please feel free to reach out to us with any inquiries.</p>
      {/* Add your contact form or details here */}
      <p>Email: contact@bitwattr.com</p>
      <p>Phone: +91 98765 43210</p>
    </ProjectCard>
  );
}

export default Contact;