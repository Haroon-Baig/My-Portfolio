import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Mesh } from 'three';
import * as THREE from 'three';

export function Shapes() {
  const group = useRef<THREE.Group>(null);
  const cube = useRef<Mesh>(null);
  const sphere = useRef<Mesh>(null);
  const torus = useRef<Mesh>(null);
  const octahedron = useRef<Mesh>(null);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();

    if (group.current) {
      group.current.rotation.y = time * 0.1;
    }

    if (cube.current) {
      cube.current.rotation.x += 0.01;
      cube.current.rotation.y += 0.01;
      cube.current.position.y = Math.sin(time) * 0.2;
    }

    if (sphere.current) {
      sphere.current.position.x = Math.sin(time * 0.8) * 2;
      sphere.current.position.y = Math.cos(time * 0.8) * 2;
    }

    if (torus.current) {
      torus.current.rotation.x = time * 0.5;
      torus.current.rotation.y = time * 0.2;
    }

    if (octahedron.current) {
      octahedron.current.rotation.x = time * 0.3;
      octahedron.current.rotation.z = time * 0.2;
      octahedron.current.position.y = Math.cos(time) * 0.5;
    }
  });

  return (
    <group ref={group}>
      {/* Cube */}
      <mesh ref={cube} position={[-2, 0, 0]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="#8B5CF6" />
      </mesh>

      {/* Sphere */}
      <mesh ref={sphere} position={[2, 0, 0]}>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshStandardMaterial color="#EC4899" />
      </mesh>

      {/* Torus */}
      <mesh ref={torus} position={[0, 2, 0]}>
        <torusGeometry args={[0.6, 0.2, 16, 32]} />
        <meshStandardMaterial color="#10B981" />
      </mesh>

      {/* Octahedron */}
      <mesh ref={octahedron} position={[0, -2, 0]}>
        <octahedronGeometry args={[0.7]} />
        <meshStandardMaterial color="#F59E0B" />
      </mesh>
    </group>
  );
}