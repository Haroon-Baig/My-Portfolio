import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Mesh } from 'three';

function FloatingShapes() {
  const shapes = useRef<Mesh[]>([]);
  
  useFrame((state) => {
    shapes.current.forEach((shape, i) => {
      const time = state.clock.getElapsedTime();
      const offset = i * Math.PI * 0.5;
      
      shape.position.y = Math.sin(time + offset) * 0.5;
      shape.rotation.x = time * 0.3 + offset;
      shape.rotation.y = time * 0.2 + offset;
    });
  });

  return (
    <group>
      {Array.from({ length: 15 }).map((_, i) => {
        const randomShape = Math.floor(Math.random() * 3);
        const position = [
          (Math.random() - 0.5) * 10,
          (Math.random() - 0.5) * 10,
          (Math.random() - 0.5) * 5
        ];
        const rotation = [
          Math.random() * Math.PI,
          Math.random() * Math.PI,
          Math.random() * Math.PI
        ];
        const scale = 0.2 + Math.random() * 0.3;

        return (
          <mesh
            key={i}
            ref={(el) => el && (shapes.current[i] = el)}
            position={position as [number, number, number]}
            rotation={rotation as [number, number, number]}
            scale={scale}
          >
            {randomShape === 0 ? (
              <boxGeometry args={[1, 1, 1]} />
            ) : randomShape === 1 ? (
              <sphereGeometry args={[0.5, 16, 16]} />
            ) : (
              <octahedronGeometry args={[0.7]} />
            )}
            <meshStandardMaterial
              color={`hsl(${Math.random() * 360}, 70%, 70%)`}
              opacity={0.3}
              transparent
            />
          </mesh>
        );
      })}
    </group>
  );
}

export function BackgroundShapes() {
  return (
    <Canvas camera={{ position: [0, 0, 10] }}>
      <ambientLight intensity={0.3} />
      <pointLight position={[10, 10, 10]} />
      <FloatingShapes />
    </Canvas>
  );
}