import { useFrame, useLoader } from "@react-three/fiber";
import { useRef, useState } from "react";
import * as THREE from "three";
import { lerp } from "three/src/math/MathUtils";

const GrowLights: React.FC = () => {
  const potsRef = useRef<THREE.Mesh>(null);
  const [hovering, setHovering] = useState(false);

  const shelfTexture = useLoader(
    THREE.TextureLoader,
    "/metal_grate_texture.jpg",
  );
  const soilBagTexture = useLoader(
    THREE.TextureLoader,
    "/soil_bag_texture.jpg",
  );
  const terracottaTexture = useLoader(
    THREE.TextureLoader,
    "/terracotta_texture.png",
  );

  useFrame(() => {
    if (potsRef.current && hovering) {
      potsRef.current.rotation.y = lerp(
        potsRef.current.rotation.y,
        Math.PI * 2,
        0.1,
      );
    }
  });

  return (
    <mesh castShadow receiveShadow>
      {/* Light Stand */}
      <mesh castShadow receiveShadow position={[6, -3, 25]}>
        <cylinderGeometry args={[0.25, 0.25, 25, 32]} />
        <meshStandardMaterial color={"#94918d"} roughness={0} />
      </mesh>
      <mesh castShadow receiveShadow position={[15, -3, 25]}>
        <cylinderGeometry args={[0.25, 0.25, 25, 32]} />
        <meshStandardMaterial color={"#94918d"} roughness={0} />
      </mesh>
      <mesh castShadow receiveShadow position={[6, -3, 45]}>
        <cylinderGeometry args={[0.25, 0.25, 25, 32]} />
        <meshStandardMaterial color={"#94918d"} roughness={0} />
      </mesh>
      <mesh castShadow receiveShadow position={[15, -3, 45]}>
        <cylinderGeometry args={[0.25, 0.25, 25, 32]} />
        <meshStandardMaterial color={"#94918d"} roughness={0} />
      </mesh>

      {/* Shelves */}
      <mesh castShadow receiveShadow position={[10, -13, 35]}>
        <boxGeometry args={[10, 0.25, 20]} />
        <meshStandardMaterial map={shelfTexture} />
      </mesh>
      <mesh castShadow receiveShadow position={[10, -2, 35]}>
        <boxGeometry args={[10, 0.25, 20]} />
        <meshStandardMaterial map={shelfTexture} />
      </mesh>
      <mesh castShadow receiveShadow position={[10, 9, 35]}>
        <boxGeometry args={[10, 0.25, 20]} />
        <meshStandardMaterial map={shelfTexture} />
      </mesh>

      {/* Lights */}
      <mesh castShadow receiveShadow position={[10, -3, 35]}>
        <boxGeometry args={[5, 2, 20]} />
        <meshStandardMaterial
          color="#81b58f"
          emissive={"antiquewhite"}
          emissiveIntensity={2}
        />
      </mesh>
      <mesh castShadow receiveShadow position={[10, 8, 35]}>
        <boxGeometry args={[5, 2, 20]} />
        <meshStandardMaterial
          color="#81b58f"
          emissive={"antiquewhite"}
          emissiveIntensity={2}
        />
      </mesh>

      {/* Planters */}
      <Planter position={[10, -12, 35]} />
      <Planter position={[10, -1, 35]} />

      {/* Soil Bag */}
      <mesh
        castShadow
        receiveShadow
        position={[11.5, 12, 35]}
        rotation={[0, 0, -Math.PI / 4]}
      >
        <boxGeometry args={[2, 7, 4]} />
        <meshStandardMaterial map={soilBagTexture} />
      </mesh>

      {/* Pots */}
      <mesh
        position={[10, 9.5, 40]}
        onClick={() => (window.location.href = "/gardening")}
        ref={potsRef}
        onPointerEnter={() => setHovering(true)}
        onPointerLeave={() => {
          setHovering(false);
          if (potsRef.current) potsRef.current.rotation.y = 0;
        }}
      >
        <mesh castShadow receiveShadow position={[-1, 0, 0]}>
          <cylinderGeometry args={[2.1, 2.1, 1]} />
          <meshStandardMaterial map={terracottaTexture} />
        </mesh>
        <mesh castShadow receiveShadow position={[-1, 1, 0]}>
          <cylinderGeometry args={[1.5, 2, 4]} />
          <meshStandardMaterial map={terracottaTexture} />
        </mesh>

        <mesh castShadow receiveShadow position={[2.5, 0, 2]}>
          <cylinderGeometry args={[1.75, 1.75, 1]} />
          <meshStandardMaterial map={terracottaTexture} />
        </mesh>
        <mesh castShadow receiveShadow position={[2.5, 1.5, 2]}>
          <cylinderGeometry args={[1, 1.5, 2]} />
          <meshStandardMaterial map={terracottaTexture} />
        </mesh>

        <mesh castShadow receiveShadow position={[-2, 0, 3]}>
          <cylinderGeometry args={[1.1, 1.1, 0.5]} />
          <meshStandardMaterial map={terracottaTexture} />
        </mesh>
        <mesh castShadow receiveShadow position={[-2, 0.5, 3]}>
          <cylinderGeometry args={[0.75, 1, 2]} />
          <meshStandardMaterial map={terracottaTexture} />
        </mesh>
      </mesh>
    </mesh>
  );
};

export default GrowLights;

const Planter = ({
  position,
}: {
  position: [x: number, y: number, z: number];
}) => {
  const soilTexture = useLoader(
    THREE.TextureLoader,
    "/top-view-plant-soil-texture.jpg",
  );
  soilTexture.repeat.set(3, 8);
  soilTexture.wrapS = THREE.RepeatWrapping;
  soilTexture.wrapT = THREE.RepeatWrapping;
  return (
    <mesh castShadow receiveShadow position={position}>
      <boxGeometry args={[7, 1.5, 18]} />
      <meshStandardMaterial map={soilTexture} />
    </mesh>
  );
};
