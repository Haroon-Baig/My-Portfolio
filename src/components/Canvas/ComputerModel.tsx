import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import { Mesh } from 'three';

export function ComputerModel() {
  const computer = useRef<Mesh>(null);
  const { nodes, materials } = useGLTF('/models/computer/scene.gltf');

  useFrame((state) => {
    if (computer.current) {
      computer.current.rotation.y = Math.sin(state.clock.elapsedTime) * 0.1;
    }
  });

  return (
    <mesh ref={computer} scale={[0.8, 0.8, 0.8]} position={[0, -1, 0]}>
      <hemisphereLight intensity={0.15} groundColor="black" />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={1} />
      <primitive object={nodes.Scene} />
    </mesh>
  );
}