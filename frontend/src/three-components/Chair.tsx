import { useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";
import * as THREE from "three";
import { lerp } from "three/src/math/MathUtils";
import { BoxBlendGeometry } from "./BoxBlendGeometry";

interface ChairProps {
  position: [x: number, y: number, z: number];
  rotation: [x: number, y: number, z: number];
}

const Chair: React.FC<ChairProps> = ({ position, rotation }) => {
  const [clicked, setClicked] = useState(false);

  const ref = useRef<THREE.Mesh>(null);

  useFrame(() => {
    if (ref.current && clicked) {
      ref.current.position.x = lerp(ref.current.position.x, -15, 0.1);
    } else if (ref.current && !clicked) {
      ref.current.position.x = lerp(ref.current.position.x, -7, 0.1);
    }
  });

  const chairColor = "#b89dbd";
  return (
    <mesh position={position} rotation={rotation} ref={ref}>
      {/* Chair */}
      <mesh
        onClick={() => {
          setClicked(!clicked);
        }}
      >
        <mesh>
          <BoxBlendGeometry width={5} height={6} depth={2} radius={1} />
          <meshStandardMaterial color={chairColor} />
        </mesh>
        <mesh position={[0, -7.5, 2]} rotation={[-Math.PI / 8, 0, 0]}>
          <BoxBlendGeometry width={7} height={10} depth={1} radius={1} />
          <meshStandardMaterial color={chairColor} />
        </mesh>
        <mesh position={[0, -12, 7]} rotation={[0, Math.PI / 2, 0]}>
          <BoxBlendGeometry width={8} height={2} depth={7} radius={1} />
          <meshStandardMaterial color={chairColor} />
        </mesh>
      </mesh>

      {/* Legs */}
      <mesh position={[0, 0, -2]}>
        <mesh position={[0, -14, 8]}>
          <boxGeometry args={[1, 3, 1]} />
          <meshStandardMaterial color="black" />
        </mesh>
        <mesh position={[2, -15.5, 8]}>
          <boxGeometry args={[3, 1, 1]} />
          <meshStandardMaterial color="black" />
        </mesh>
        <mesh position={[-2, -15.5, 8]}>
          <boxGeometry args={[3, 1, 1]} />
          <meshStandardMaterial color="black" />
        </mesh>
        <mesh position={[0, -15.5, 6]}>
          <boxGeometry args={[1, 1, 3]} />
          <meshStandardMaterial color="black" />
        </mesh>
        <mesh position={[0, -15.5, 10]}>
          <boxGeometry args={[1, 1, 3]} />
          <meshStandardMaterial color="black" />
        </mesh>
        <mesh position={[-3, -16.5, 8]}>
          <sphereGeometry args={[1]} />
          <meshStandardMaterial color="black" />
        </mesh>
        <mesh position={[3, -16.5, 8]}>
          <sphereGeometry args={[1]} />
          <meshStandardMaterial color="black" />
        </mesh>
        <mesh position={[0, -16.5, 5]}>
          <sphereGeometry args={[1]} />
          <meshStandardMaterial color="black" />
        </mesh>
        <mesh position={[0, -16.5, 11]}>
          <sphereGeometry args={[1]} />
          <meshStandardMaterial color="black" />
        </mesh>
      </mesh>
    </mesh>
  );
};

export default Chair;
