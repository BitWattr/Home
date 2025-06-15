// In Projects.js
import React, { useEffect, useRef } from 'react';
import ProjectCard from '../components/ProjectCard';
import * as THREE from 'three';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';

function Projects() {
  const canvas1Ref = useRef(null);
  const canvas2Ref = useRef(null);

  useEffect(() => {
    init3DObject(canvas1Ref.current, '/1.obj');
    init3DObject(canvas2Ref.current, '/2.obj');
  }, []);

  const init3DObject = (canvas, objPath) => {
    if (!canvas) return;

    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
    renderer.setSize(canvas.clientWidth, canvas.clientHeight);
    renderer.setClearColor(0xf4f4f4);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, canvas.clientWidth / canvas.clientHeight, 0.1, 1000);
    camera.position.z = 3;

    const ambientLight = new THREE.AmbientLight(0x404040);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
    directionalLight.position.set(0, 1, 1).normalize();
    scene.add(directionalLight);

    const loader = new OBJLoader();
    loader.load(objPath, function (object) {
      object.scale.set(0.01, 0.01, 0.01);
      scene.add(object);
    }, undefined, function (error) {
      console.error('An error occurred loading the OBJ file:', error);
    });

    const animate = () => {
      requestAnimationFrame(animate);
      scene.rotation.x += 0.005;
      scene.rotation.y += 0.005;
      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      if (canvas.clientWidth === 0 || canvas.clientHeight === 0) return;
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
    <section id="projects-section" className="projects-section py-8 px-4 sm:px-6 lg:px-8 bg-gray-100 min-h-screen"> {/* Add an ID here */}
      <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">Our Projects</h1>
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <ProjectCard
            title="Chat Mimicry AI"
            projectLink="/projects/chat-mimicry-ai"
          >
            <p className="text-gray-700 leading-relaxed">
              This project explores an AI model designed to mimic conversation styles based on user-provided text. It focuses on capturing nuances in tone, vocabulary, and sentence structure to generate contextually relevant and stylistically similar responses.
            </p>
        </ProjectCard>

        <ProjectCard
          title="NoAI LG - No AI Language Generalizer"
          githubLink="https://github.com/BitWattr/NoAI-LG"
          projectLink="/projects/noai-lg"
        >
          <p className="text-gray-700 leading-relaxed">
            NoAI LG is an innovative project aimed at generating meaningful sentences without relying on neural networks. Instead of deep learning, it uses pattern-based techniques.
          </p>
        </ProjectCard>

        <ProjectCard
          title="Think 3D"
          projectLink="/projects/think-3d"
        >
          <p className="text-gray-700 leading-relaxed">
            We are working on a 3D low poly to high poly point cloud AI model. This innovative project aims to transform simple low poly structures into detailed high-quality 3D high poly models.
          </p>
        </ProjectCard>
      </div>
    </section>
  );
}

export default Projects;