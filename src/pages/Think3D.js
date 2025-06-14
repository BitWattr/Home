import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import * as THREE from 'three';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';

function Think3D() {
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
    // Set initial size based on canvas container to prevent CLS
    const parent = canvas.parentElement;
    if (parent) {
      renderer.setSize(parent.clientWidth, parent.clientHeight);
    } else {
      renderer.setSize(canvas.clientWidth, canvas.clientHeight);
    }
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
      const parent = canvas.parentElement;
      if (!parent || parent.clientWidth === 0 || parent.clientHeight === 0) return; // Prevent division by zero

      camera.aspect = parent.clientWidth / parent.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(parent.clientWidth, parent.clientHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
    };
  };

  return (
    <div className="project-detail-page p-8 bg-gray-50 min-h-screen">
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-8">
        <Link to="/projects" className="text-blue-600 hover:text-blue-800 mb-6 inline-block font-medium">
          &larr; Back to Projects
        </Link>
        <h1 className="text-4xl font-bold text-gray-800 mb-6">Think 3D</h1>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          We are actively developing a groundbreaking 3D low poly to high poly point cloud AI model. This innovative project
          aims to revolutionize 3D content creation by transforming simple, efficient low-polygon structures into highly
          detailed, high-quality 3D high-polygon models. This process involves sophisticated algorithms that interpret
          the initial low-detail geometry and intelligently infer additional data points and surface details to generate
          a much richer and visually appealing output.
        </p>

        <h2 className="text-3xl font-semibold text-gray-800 mb-4">The Challenge & Our Approach:</h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          The challenge lies in accurately interpolating missing geometric information and textures to ensure the
          upscaled model is both aesthetically pleasing and structurally sound. Our AI model leverages advanced
          machine learning techniques, including generative adversarial networks (GANs) and deep learning
          architectures, to learn patterns from vast datasets of 3D models. This allows it to "imagine" and
          reconstruct the high-fidelity details that were absent in the low-poly input.
        </p>

        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Demonstration:</h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          Below, you can see a live demonstration of two 3D objects rendered using Three.js. These are examples
          of simple objects, similar to the low-poly inputs our AI model would process. Imagine these being
          transformed into much more detailed versions!
        </p>
        <div className="canvas-container grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          <div className="relative w-full aspect-video bg-gray-200 rounded-lg overflow-hidden">
            <canvas ref={canvas1Ref} className="w-full h-full block"></canvas>
            <p className="absolute bottom-2 left-1/2 -translate-x-1/2 text-sm text-gray-600 bg-white bg-opacity-75 px-2 py-1 rounded">Object 1</p>
          </div>
          <div className="relative w-full aspect-video bg-gray-200 rounded-lg overflow-hidden">
            <canvas ref={canvas2Ref} className="w-full h-full block"></canvas>
            <p className="absolute bottom-2 left-1/2 -translate-x-1/2 text-sm text-gray-600 bg-white bg-opacity-75 px-2 py-1 rounded">Object 2</p>
          </div>
        </div>

        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Potential Applications:</h2>
        <ul className="list-disc list-inside text-lg text-gray-700 mb-6 space-y-2">
          <li><span className="font-medium">Game Development:</span> Rapidly creating high-quality assets from simple prototypes.</li>
          <li><span className="font-medium">Virtual Reality/Augmented Reality:</span> Enhancing immersive experiences with detailed 3D environments and objects.</li>
          <li><span className="font-medium">3D Printing:</span> Generating smooth, high-resolution models suitable for printing.</li>
          <li><span className="font-medium">CGI & Animation:</span> Accelerating the production of realistic visual effects.</li>
          <li><span className="font-medium">Architectural Visualization:</span> Transforming conceptual designs into photorealistic renders.</li>
        </ul>

        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          Stay tuned for updates on this exciting project as we continue to push the boundaries of 3D model generation!
        </p>
      </div>
    </div>
  );
}

export default Think3D;
