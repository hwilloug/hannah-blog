import { useLoader } from "@react-three/fiber";
import * as THREE from "three";

interface HobbyBoxProps {
  rotation: [x: number, y: number, z: number];
  position: [x: number, y: number, z: number];
  height: number;
  color: "blue" | "orange";
}

const HobbyBox: React.FC<HobbyBoxProps> = ({
  rotation,
  position,
  height,
  color,
}) => {
  const blueFabricTexture = useLoader(
    THREE.TextureLoader,
    "/blue_fabric_texture.jpg",
  );
  const orangeFabricTexture = useLoader(
    THREE.TextureLoader,
    "/orange-fabric-texture.jpg",
  );

  const purpleYarnTexture = useLoader(
    THREE.TextureLoader,
    "/purple_yarn_texture.png",
  );
  const greenYarnTexture = useLoader(
    THREE.TextureLoader,
    "/green_yarn_texture.png",
  );
  const blueYarnTexture = useLoader(
    THREE.TextureLoader,
    "/blue_yarn_texture.png",
  );
  const tealYarnTexture = useLoader(
    THREE.TextureLoader,
    "/teal_yarn_texture.png",
  );

  let fabricTexture;
  switch (color) {
    case "blue":
      fabricTexture = blueFabricTexture;
      break;
    case "orange":
      fabricTexture = orangeFabricTexture;
      break;
  }
  return (
    <mesh castShadow receiveShadow position={position} rotation={rotation}>
      {/* Hobby Box */}
      <mesh castShadow receiveShadow position={[0, 0, 0]}>
        <boxGeometry args={[6, height, 6]} />
        <meshStandardMaterial map={fabricTexture} />
      </mesh>
      <mesh castShadow receiveShadow position={[0, 0, 0]}>
        <boxGeometry args={[5.5, height + 0.1, 5.5]} />
        <meshStandardMaterial color={"black"} />
      </mesh>

      {/* Yarn Balls */}
      <mesh castShadow receiveShadow position={[-2, 3, -2]}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial map={purpleYarnTexture} />
      </mesh>
      <mesh castShadow receiveShadow position={[-1.75, 3, 1.75]}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial map={greenYarnTexture} />
      </mesh>
      <mesh castShadow receiveShadow position={[0, 3.25, 0]}>
        <sphereGeometry args={[1.5, 32, 32]} />
        <meshStandardMaterial map={blueYarnTexture} />
      </mesh>
      <mesh castShadow receiveShadow position={[2, 3, 2]}>
        <sphereGeometry args={[0.75, 32, 32]} />
        <meshStandardMaterial map={tealYarnTexture} />
      </mesh>
      <mesh castShadow receiveShadow position={[2, 3, -2]}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial map={purpleYarnTexture} />
      </mesh>
      <mesh castShadow receiveShadow position={[-0.5, 3.5, -1.5]}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial map={greenYarnTexture} />
      </mesh>
      <mesh castShadow receiveShadow position={[-1.75, 3.5, 1]}>
        <sphereGeometry args={[0.75, 32, 32]} />
        <meshStandardMaterial map={tealYarnTexture} />
      </mesh>
      <mesh castShadow receiveShadow position={[1.25, 3.5, 1]}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial map={purpleYarnTexture} />
      </mesh>
      <mesh castShadow receiveShadow position={[1, 3.5, -2]}>
        <sphereGeometry args={[0.75, 32, 32]} />
        <meshStandardMaterial map={tealYarnTexture} />
      </mesh>
      <mesh castShadow receiveShadow position={[1.5, 3.25, 0]}>
        <sphereGeometry args={[0.75, 32, 32]} />
        <meshStandardMaterial map={tealYarnTexture} />
      </mesh>
      <mesh castShadow receiveShadow position={[2, 2.5, 0.5]}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial map={greenYarnTexture} />
      </mesh>
      <mesh castShadow receiveShadow position={[-2, 2.75, -1]}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial map={blueYarnTexture} />
      </mesh>
      <mesh castShadow receiveShadow position={[2, 2.75, -0.5]}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial map={blueYarnTexture} />
      </mesh>
      <mesh castShadow receiveShadow position={[0, 2.5, 2]}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial map={blueYarnTexture} />
      </mesh>
      <mesh castShadow receiveShadow position={[-2, 2.5, 0]}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial map={purpleYarnTexture} />
      </mesh>
      <mesh castShadow receiveShadow position={[1.25, 2.5, 2]}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial map={greenYarnTexture} />
      </mesh>

      {/* Knitting Needles */}
      <mesh
        castShadow
        receiveShadow
        position={[-1, 6, 1]}
        rotation={[Math.PI / 8, 0, Math.PI / 8]}
      >
        <cylinderGeometry args={[0.1, 0.1, 4, 32]} />
        <meshStandardMaterial color={"antiquewhite"} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        position={[1, 6, -1]}
        rotation={[-Math.PI / 8, 0, -Math.PI / 8]}
      >
        <cylinderGeometry args={[0.1, 0.1, 4, 32]} />
        <meshStandardMaterial color={"antiquewhite"} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        position={[-1.75, 7.75, 1.75]}
        rotation={[-Math.PI / 8, 0, Math.PI / 8]}
      >
        <sphereGeometry args={[0.25]} />
        <meshStandardMaterial color={"antiquewhite"} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        position={[1.75, 7.75, -1.75]}
        rotation={[-Math.PI / 8, 0, -Math.PI / 8]}
      >
        <sphereGeometry args={[0.25]} />
        <meshStandardMaterial color={"antiquewhite"} />
      </mesh>
    </mesh>
  );
};

export default HobbyBox;
