import React, { useEffect, useRef } from 'react';
import ProjectCard from '../components/ProjectCard';
import * as THREE from 'three';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';

function Projects() {
  const canvas1Ref = useRef(null);
  const canvas2Ref = useRef(null);

  useEffect(() => {
    // Initialize 3D objects
    init3DObject(canvas1Ref.current, '/1.obj');
    init3DObject(canvas2Ref.current, '/2.obj');
  }, []); // Run once on component mount

  const init3DObject = (canvas, objPath) => {
    if (!canvas) return;

    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
    renderer.setSize(canvas.clientWidth, canvas.clientHeight);
    renderer.setClearColor(0xf4f4f4); // Match background color

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, canvas.clientWidth / canvas.clientHeight, 0.1, 1000);
    camera.position.z = 3;

    // Add ambient light
    const ambientLight = new THREE.AmbientLight(0x404040); // soft white light
    scene.add(ambientLight);

    // Add directional light
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
    directionalLight.position.set(0, 1, 1).normalize();
    scene.add(directionalLight);

    const loader = new OBJLoader();
    loader.load(objPath, function (object) {
      // Scale down the object if it's too big
      object.scale.set(0.01, 0.01, 0.01); // Adjust scale as needed
      scene.add(object);
    }, undefined, function (error) {
      console.error('An error occurred loading the OBJ file:', error);
    });

    const animate = () => {
      requestAnimationFrame(animate);
      // Rotate the scene, not the camera
      scene.rotation.x += 0.005;
      scene.rotation.y += 0.005;
      renderer.render(scene, camera);
    };

    animate();

    // Handle window resize
    const handleResize = () => {
      if (canvas.clientWidth === 0 || canvas.clientHeight === 0) return; // Prevent division by zero
      camera.aspect = canvas.clientWidth / canvas.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(canvas.clientWidth, canvas.clientHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
    };
  };

  return (
    <>
      <ProjectCard title="NoAI LG - No AI Language Generalizer" githubLink="https://github.com/BitWattr/NoAI-LG">
        <p>NoAI LG is an innovative project aimed at generating meaningful sentences without relying on neural networks. Instead of deep learning, it uses pattern-based techniques.</p>
        <h3>Features:</h3>
        <ul>
          <li>🔄 Custom tokenizer that identifies common phrases.</li>
          <li>📊 A similarity matrix to replace words with context-aware alternatives.</li>
          <li>💡 Future applications: Question Answering, Language Generation, Summarization.</li>
        </ul>
      </ProjectCard>
      <ProjectCard title="Think 3D">
        <p>We are working on a 3D low poly to high poly point cloud AI model. This innovative project aims to transform simple low poly structures into detailed high-quality 3D high poly models.</p>
        <div className="canvas-container">
          <canvas ref={canvas1Ref}></canvas>
          <canvas ref={canvas2Ref}></canvas>
        </div>
      </ProjectCard>
    </>
  );
}

export default Projects;