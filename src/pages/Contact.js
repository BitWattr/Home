// In Contact.js
import React from 'react';
import ProjectCard from '../components/ProjectCard';

function Contact() {
  return (
    <section id="contact-section"> {/* Add an ID here */}
      <ProjectCard title="Contact Us">
        <p>Please feel free to reach out to us with any inquiries.</p>
        <a
          href="mailto:mp00duyet@proton.me"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            textDecoration: 'none',
            color: '#fff',
            background: '#0072C6',
            padding: '8px 16px',
            borderRadius: '4px',
            fontWeight: 'bold',
            marginBottom: '12px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
            transition: 'background 0.2s',
          }}
          onMouseOver={e => e.currentTarget.style.background = '#005fa3'}
          onMouseOut={e => e.currentTarget.style.background = '#0072C6'}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="20"
            viewBox="0 0 24 24"
            width="20"
            style={{ marginRight: '8px', fill: '#fff' }}
          >
            <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
          </svg>
          Email Us
        </a>
        <a
          href="https://discord.gg/3mhjrDeT"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            textDecoration: 'none',
            color: '#fff',
            background: '#5865F2',
            padding: '8px 16px',
            borderRadius: '4px',
            fontWeight: 'bold',
            marginTop: '12px',
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            style={{ marginRight: '8px', fill: '#fff' }}
          >
            <path d="M20.317 4.369a19.791 19.791 0 0 0-4.885-1.515.07.07 0 0 0-.073.035c-.211.375-.444.864-.608 1.249a18.524 18.524 0 0 0-5.487 0 12.51 12.51 0 0 0-.617-1.249.07.07 0 0 0-.073-.035A19.736 19.736 0 0 0 3.677 4.369a.064.064 0 0 0-.03.027C.533 9.09-.32 13.579.099 18.021a.08.08 0 0 0 .028.056 19.993 19.993 0 0 0 5.993 3.032.07.07 0 0 0 .076-.027c.462-.63.874-1.295 1.226-1.994a.07.07 0 0 0-.038-.098 13.138 13.138 0 0 1-1.885-.9.07.07 0 0 1-.007-.117c.127-.094.254-.192.373-.291a.07.07 0 0 1 .071-.01c3.927 1.793 8.18 1.793 12.061 0a.07.07 0 0 1 .072.009c.12.099.246.198.374.292a.07.07 0 0 1-.006.117 12.298 12.298 0 0 1-1.886.899.07.07 0 0 0-.038.099c.36.698.772 1.362 1.225 1.993a.07.07 0 0 0 .076.028 19.941 19.941 0 0 0 6.002-3.032.07.07 0 0 0 .028-.055c.5-5.177-.838-9.637-3.548-13.625a.061.061 0 0 0-.03-.028zM8.02 15.331c-1.183 0-2.156-1.085-2.156-2.419 0-1.333.955-2.418 2.156-2.418 1.21 0 2.174 1.094 2.156 2.418 0 1.334-.955 2.419-2.156 2.419zm7.974 0c-1.183 0-2.156-1.085-2.156-2.419 0-1.333.955-2.418 2.156-2.418 1.21 0 2.174 1.094 2.156 2.418 0 1.334-.946 2.419-2.156 2.419z"/>
          </svg>
          Join Discord
        </a>
        <p></p>
      </ProjectCard>
    </section>
  );
}

export default Contact;