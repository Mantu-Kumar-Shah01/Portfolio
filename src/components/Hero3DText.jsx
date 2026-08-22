import React, { useEffect, useRef } from "react";
import * as THREE from "three";

const Hero3DText = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const mountNode = mountRef.current;
    if (!mountNode) return;

    const width = mountNode.clientWidth || window.innerWidth;
    const height = mountNode.clientHeight || window.innerHeight;

    // 1. Scene, Camera, Renderer (Adjusted Camera Z for Perfect Height Proportion)
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(48, width / height, 0.1, 1000);
    camera.position.z = 7.85;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mountNode.appendChild(renderer.domElement);

    // 2. Interactive 3D Wireframe Orbit Ring (PROPORTIONAL CANVASES FIT)
    const ringGroup = new THREE.Group();
    scene.add(ringGroup);

    const ringGeo = new THREE.TorusGeometry(3.4, 0.07, 16, 100);
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0xff302b,
      wireframe: true,
      transparent: true,
      opacity: 0.25,
    });
    const torus = new THREE.Mesh(ringGeo, ringMat);
    ringGroup.add(torus);

    // 3. Mouse Parallax
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (e) => {
      targetX = (e.clientX / window.innerWidth - 0.5) * 0.35;
      targetY = (e.clientY / window.innerHeight - 0.5) * 0.35;
    };

    window.addEventListener("mousemove", handleMouseMove);

    // 4. Animation Loop
    let animId;
    let clock = new THREE.Clock();

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const elapsed = clock.getElapsedTime();

      torus.rotation.x = elapsed * 0.14;
      torus.rotation.y = elapsed * 0.2;

      ringGroup.rotation.y += (targetX - ringGroup.rotation.y) * 0.05;
      ringGroup.rotation.x += (targetY - ringGroup.rotation.x) * 0.05;

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      if (!mountNode) return;
      const w = mountNode.clientWidth || window.innerWidth;
      const h = mountNode.clientHeight || window.innerHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animId);
      if (mountNode && renderer.domElement) {
        mountNode.removeChild(renderer.domElement);
      }
      ringGeo.dispose();
      ringMat.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
      <div ref={mountRef} className="w-full h-full opacity-90" />
    </div>
  );
};

export default Hero3DText;
