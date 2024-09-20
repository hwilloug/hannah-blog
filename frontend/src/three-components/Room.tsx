import { useLoader } from "@react-three/fiber";
import { useState } from "react";
import * as THREE from "three";

const Room: React.FC = () => {
  const floorColorMap = useLoader(
    THREE.TextureLoader,
    "/wood_floor_texture.jpg",
  );
  const rugColorMap = useLoader(THREE.TextureLoader, "/pink_rug.png");
  const mooseTexture = useLoader(THREE.TextureLoader, "/moose_texture.jpeg");
  const farmFreshTexture = useLoader(
    THREE.TextureLoader,
    "/farm_fresh_texture.jpeg",
  );
  const cakeTexture = useLoader(THREE.TextureLoader, "/cake_texture.jpeg");
  const cowTexture = useLoader(THREE.TextureLoader, "/cow_texture.jpeg");
  const pigTexture = useLoader(THREE.TextureLoader, "/pig_texture.jpeg");
  const duckTexture = useLoader(THREE.TextureLoader, "/duck_texture.jpeg");
  const duckClockTexture = useLoader(
    THREE.TextureLoader,
    "/duck_clock_texture.jpeg",
  );
  const plantsPhotoTexture = useLoader(
    THREE.TextureLoader,
    "/plants_photo_texture.jpeg",
  );
  const poppyClockTexture = useLoader(
    THREE.TextureLoader,
    "/poppy_clock_texture.jpeg",
  );
  const wateringCanTexture = useLoader(
    THREE.TextureLoader,
    "/watering_can_texture.jpeg",
  );
  const calendarTexture = useLoader(
    THREE.TextureLoader,
    "/calendar_texture.jpeg",
  );

  const fairyLightColors = ["red", "blue", "green", "yellow"];

  const [frameRotation, setFrameRotation] = useState<
    [x: number, y: number, z: number]
  >([0, 0, 0]);

  return (
    <mesh>
      {/* Walls */}
      <mesh
        receiveShadow
        position={[15, 2.5, 22]}
        rotation={[0, Math.PI * 1.5, 0]}
      >
        <planeGeometry args={[50, 35]} />
        <meshStandardMaterial color="#4a2b04" />
      </mesh>
      <mesh receiveShadow position={[-9.5, 2.5, -2]}>
        <planeGeometry args={[50, 35]} />
        <meshStandardMaterial color="#4a2b04" />
      </mesh>
      <mesh
        receiveShadow
        position={[-34, 2.5, 22.5]}
        rotation={[0, Math.PI / 2, 0]}
      >
        <planeGeometry args={[50, 35]} />
        <meshStandardMaterial color="#4a2b04" />
      </mesh>
      <mesh receiveShadow position={[-9.5, 2.5, 47]} rotation={[0, Math.PI, 0]}>
        <planeGeometry args={[50, 35]} />
        <meshStandardMaterial color="#4a2b04" />
      </mesh>

      {/* Floor */}
      <mesh
        receiveShadow
        position={[-9.5, -15, 22.5]}
        rotation={[Math.PI * 1.5, 0, 0]}
      >
        <planeGeometry args={[50, 49]} />
        <meshStandardMaterial map={floorColorMap} />
      </mesh>

      {/* Rug */}
      <mesh
        receiveShadow
        position={[-9.5, -14.99, 22.5]}
        rotation={[Math.PI * 1.5, 0, 0]}
      >
        <planeGeometry args={[35, 35]} />
        <meshStandardMaterial map={rugColorMap} />
      </mesh>

      {/* Door */}
      <mesh
        receiveShadow
        position={[-23, -2.5, 46.9]}
        rotation={[0, Math.PI, 0]}
      >
        <planeGeometry args={[15, 25]} />
        <meshStandardMaterial color="white" />
      </mesh>
      <mesh
        receiveShadow
        position={[-18, -1, 46.5]}
        rotation={[Math.PI * 1.5, 0, 0]}
      >
        <cylinderGeometry args={[0.25, 0.5, 0.5]} />
        <meshStandardMaterial color="black" />
      </mesh>

      {/* Fairy Lights */}
      {/* X1 */}
      {Array.from({ length: 49 }, (_, i) => (
        <FairyLight
          position={[-34 + i, 18, -1.5]}
          color={fairyLightColors[i % 4]}
        />
      ))}
      {/* X2 */}
      {Array.from({ length: 49 }, (_, i) => (
        <FairyLight
          position={[-34 + i, 18, 46.5]}
          color={fairyLightColors[i % 4]}
        />
      ))}
      {/* Z1 */}
      {Array.from({ length: 48 }, (_, i) => (
        <FairyLight
          position={[15, 18, -0.5 + i]}
          color={fairyLightColors[i % 4]}
        />
      ))}
      {/* Z2 */}
      {Array.from({ length: 48 }, (_, i) => (
        <FairyLight
          position={[-34, 18, -0.5 + i]}
          color={fairyLightColors[i % 4]}
        />
      ))}

      {/* Photos */}
      {/* Moose */}
      <mesh position={[-33.75, -4.5, 9.5]}>
        <mesh receiveShadow>
          <boxGeometry args={[0.5, 6, 7]} />
          <meshStandardMaterial color="#804400" />
        </mesh>
        <mesh receiveShadow position={[0.01, 0, 0]}>
          <boxGeometry args={[0.5, 5, 6]} />
          <meshStandardMaterial map={mooseTexture} />
        </mesh>
      </mesh>
      {/* Farm Fresh */}
      <mesh position={[-33.75, 1, 26]}>
        <mesh receiveShadow>
          <boxGeometry args={[0.5, 6.1, 7.1]} />
          <meshStandardMaterial color="#004000" />
        </mesh>
        <mesh receiveShadow position={[0.1, 0, 0]}>
          <boxGeometry args={[0.5, 6, 7]} />
          <meshStandardMaterial map={farmFreshTexture} />
        </mesh>
      </mesh>
      {/* Cake */}
      <mesh position={[-33.75, 10, 22]}>
        <mesh receiveShadow>
          <boxGeometry args={[0.5, 8, 6]} />
          <meshStandardMaterial color="#eb9de5" />
        </mesh>
        <mesh receiveShadow position={[0.1, 0, 0]}>
          <boxGeometry args={[0.5, 7, 5]} />
          <meshStandardMaterial map={cakeTexture} />
        </mesh>
      </mesh>
      {/* Cow */}
      <mesh position={[-33.75, 2.5, 17.5]}>
        <mesh receiveShadow>
          <boxGeometry args={[0.5, 4, 5]} />
          <meshStandardMaterial color="#b30009" />
        </mesh>
        <mesh receiveShadow position={[0.1, 0, 0]}>
          <boxGeometry args={[0.5, 3, 4]} />
          <meshStandardMaterial map={cowTexture} />
        </mesh>
      </mesh>
      {/* Pig */}
      <mesh position={[-33.75, -3, 17.5]}>
        <mesh receiveShadow>
          <boxGeometry args={[0.5, 5, 6]} />
          <meshStandardMaterial color="#804400" />
        </mesh>
        <mesh receiveShadow position={[0.1, 0, 0]}>
          <boxGeometry args={[0.5, 4, 5]} />
          <meshStandardMaterial map={pigTexture} />
        </mesh>
      </mesh>
      {/* Duck */}
      <mesh
        position={[-33.75, -7, 27]}
        rotation={frameRotation}
        onClick={() => (window.location.href = "/antiquing")}
        onPointerEnter={() => setFrameRotation([Math.PI / 24, 0, 0])}
        onPointerLeave={() => setFrameRotation([0, 0, 0])}
      >
        <mesh receiveShadow>
          <boxGeometry args={[0.5, 8, 10]} />
          <meshStandardMaterial color="#804400" />
        </mesh>
        <mesh receiveShadow position={[0.1, 0, 0]}>
          <boxGeometry args={[0.5, 6, 8]} />
          <meshStandardMaterial map={duckTexture} />
        </mesh>
      </mesh>
      {/* Duck Clock */}
      <mesh position={[-33.75, 10.5, 14]}>
        <mesh receiveShadow>
          <boxGeometry args={[0.5, 10, 7]} />
          <meshStandardMaterial color="#804400" />
        </mesh>
        <mesh receiveShadow position={[0.1, 0, 0]}>
          <boxGeometry args={[0.5, 9.5, 6.5]} />
          <meshStandardMaterial map={duckClockTexture} />
        </mesh>
      </mesh>
      {/* Plants Photo */}
      <mesh position={[-33.75, 2, 10]}>
        <mesh receiveShadow>
          <boxGeometry args={[0.5, 5, 7]} />
          <meshStandardMaterial color="#004000" />
        </mesh>
        <mesh receiveShadow position={[0.1, 0, 0]}>
          <boxGeometry args={[0.5, 4, 6]} />
          <meshStandardMaterial map={plantsPhotoTexture} />
        </mesh>
      </mesh>
      {/* Poppy Clock */}
      <mesh position={[-33.75, 12, 30]}>
        <mesh receiveShadow rotation={[0, 0, Math.PI / 2]}>
          <cylinderGeometry args={[3.5, 3.5, 0.5]} />
          <meshStandardMaterial color="antiquewhite" />
        </mesh>
        <mesh
          receiveShadow
          position={[0.1, 0, 0]}
          rotation={[0, 0, Math.PI / 2]}
        >
          <cylinderGeometry args={[3.45, 3.45, 0.5]} />
          <meshStandardMaterial map={poppyClockTexture} />
        </mesh>
      </mesh>
      {/* Watering Can */}
      <mesh position={[-33.75, -9, 17.5]}>
        <mesh receiveShadow>
          <boxGeometry args={[0.5, 5, 7]} />
          <meshStandardMaterial color="#b3b3b3" />
        </mesh>
        <mesh receiveShadow position={[0.1, 0, 0]}>
          <boxGeometry args={[0.5, 4, 6]} />
          <meshStandardMaterial map={wateringCanTexture} />
        </mesh>
      </mesh>
      {/* Calendar */}
      <mesh position={[3, 7, -1.75]}>
        <mesh receiveShadow>
          <boxGeometry args={[5, 7, 0.25]} />
          <meshStandardMaterial color="#b3b3b3" />
        </mesh>
        <mesh receiveShadow position={[0, 0, 0.1]}>
          <boxGeometry args={[4.9, 6.9, 0.25]} />
          <meshStandardMaterial map={calendarTexture} />
        </mesh>
      </mesh>
    </mesh>
  );
};

export default Room;

interface FairyLightProps {
  position: [x: number, y: number, z: number];
  color: string;
}

const FairyLight: React.FC<FairyLightProps> = ({ position, color }) => {
  return (
    <mesh position={position}>
      <mesh>
        <sphereGeometry args={[0.25]} />
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={4}
        />
      </mesh>
    </mesh>
  );
};
