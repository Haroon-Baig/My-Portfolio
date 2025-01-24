import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Shapes } from './Shapes';

export function Scene() {
  return (
    <Canvas camera={{ position: [0, 0, 5] }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <Shapes />
      <OrbitControls enableZoom={false} />
    </Canvas>
  );
}