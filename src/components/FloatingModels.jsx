import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, MeshTransmissionMaterial, MeshDistortMaterial, Float } from '@react-three/drei';

function GlassShape() {
  const mesh = useRef();
  
  useFrame((state, delta) => {
    if (mesh.current) {
      mesh.current.rotation.x += delta * 0.2;
      mesh.current.rotation.y += delta * 0.3;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1.5} floatIntensity={2}>
      <mesh ref={mesh} scale={2}>
        <octahedronGeometry args={[1, 0]} />
        <MeshTransmissionMaterial 
          backside 
          backsideThickness={1} 
          thickness={0.5} 
          roughness={0.1}
          transmission={1} 
          ior={1.5} 
          chromaticAberration={0.06} 
          anisotropy={0.1}
          color="#6366f1"
        />
      </mesh>
    </Float>
  );
}

function DistortedSphere() {
  const mesh = useRef();
  
  useFrame((state, delta) => {
    if (mesh.current) {
      mesh.current.rotation.x -= delta * 0.1;
      mesh.current.rotation.z -= delta * 0.2;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={2} floatIntensity={3} position={[-4, 2, -2]}>
      <mesh ref={mesh} scale={1.5}>
        <sphereGeometry args={[1, 64, 64]} />
        <MeshDistortMaterial 
          distort={0.4} 
          speed={2} 
          roughness={0.2} 
          metalness={0.8} 
          color="#a855f7" 
        />
      </mesh>
    </Float>
  );
}

function FloatingTorus() {
  const mesh = useRef();
  
  useFrame((state, delta) => {
    if (mesh.current) {
      mesh.current.rotation.x += delta * 0.15;
      mesh.current.rotation.y -= delta * 0.25;
    }
  });

  return (
    <Float speed={2.5} rotationIntensity={1} floatIntensity={1.5} position={[4, -2, -1]}>
      <mesh ref={mesh} scale={1.2}>
        <torusGeometry args={[1, 0.3, 16, 100]} />
        <MeshTransmissionMaterial 
          backside 
          backsideThickness={1} 
          thickness={0.5} 
          roughness={0.1}
          transmission={0.8} 
          ior={1.5} 
          chromaticAberration={0.1} 
          color="#22d3ee"
        />
      </mesh>
    </Float>
  );
}

const FloatingModelsCanvas = () => {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none" style={{ opacity: 0.6 }}>
      <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
        <ambientLight intensity={1} />
        <directionalLight position={[10, 10, 10]} intensity={2} />
        <Environment preset="city" />
        
        <GlassShape />
        <DistortedSphere />
        <FloatingTorus />
      </Canvas>
    </div>
  );
};

export default FloatingModelsCanvas;
