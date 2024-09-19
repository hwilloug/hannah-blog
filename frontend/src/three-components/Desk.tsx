import { Text } from "@react-three/drei";
import { useFrame, useLoader } from "@react-three/fiber";
import { useRef, useState } from "react";
import * as THREE from "three";
import Computer from "./Computer";

const Desk: React.FC = () => {
  const colorMap = useLoader(
    THREE.TextureLoader,
    "/wood_bookshelf_texture.png",
  );
  const codeMap = useLoader(THREE.TextureLoader, "/code_texture.png");
  const rainbowKeyboardTexture = useLoader(
    THREE.TextureLoader,
    "/rainbow_keyboard_texture.jpeg",
  );
  const pkmnMatTexture = useLoader(
    THREE.TextureLoader,
    "/pkmn_mat_texture.jpeg",
  );
  const motherBoardTexture = useLoader(
    THREE.TextureLoader,
    "/motherboard_texture.jpg",
  );

  // Rotate the computer fan
  const computerFanMesh1 = useRef<THREE.Mesh<
    THREE.BufferGeometry<THREE.NormalBufferAttributes>
  > | null>(null);
  const computerFanMesh2 = useRef<THREE.Mesh<
    THREE.BufferGeometry<THREE.NormalBufferAttributes>
  > | null>(null);
  const computerFanMesh3 = useRef<THREE.Mesh<
    THREE.BufferGeometry<THREE.NormalBufferAttributes>
  > | null>(null);
  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();
    const speed = 3;
    if (computerFanMesh1.current && clicked) {
      computerFanMesh1.current.rotation.z = elapsedTime * speed;
    }
    if (computerFanMesh2.current && clicked) {
      computerFanMesh2.current.rotation.z = elapsedTime * speed;
    }
    if (computerFanMesh3.current && clicked) {
      computerFanMesh3.current.rotation.z = elapsedTime * speed;
    }
  });

  const [clicked, setClicked] = useState(false);

  return (
    <mesh receiveShadow castShadow>
      {/* Desk */}
      <mesh receiveShadow castShadow position={[0.5, -5.1, 2]}>
        <boxGeometry args={[16, 1, 8]} />
        <meshStandardMaterial map={colorMap} />
      </mesh>
      <mesh receiveShadow castShadow position={[10.75, -5.1, 10]}>
        <boxGeometry args={[8, 1, 24]} />
        <meshStandardMaterial map={colorMap} />
      </mesh>
      <mesh receiveShadow castShadow position={[-6.5, -10, 2]}>
        <boxGeometry args={[2, 10, 8]} />
        <meshStandardMaterial map={colorMap} />
      </mesh>
      <mesh receiveShadow castShadow position={[10.75, -10, 21]}>
        <boxGeometry args={[8, 10, 2]} />
        <meshStandardMaterial map={colorMap} />
      </mesh>
      <mesh receiveShadow castShadow position={[3.5, -10, -1.5]}>
        <boxGeometry args={[22, 10, 0.5]} />
        <meshStandardMaterial map={colorMap} />
      </mesh>
      <mesh receiveShadow castShadow position={[14, -10, 10]}>
        <boxGeometry args={[0.5, 10, 23]} />
        <meshStandardMaterial map={colorMap} />
      </mesh>
      <mesh receiveShadow castShadow position={[14, 1, 10]}>
        <boxGeometry args={[0.5, 16, 23]} />
        <meshStandardMaterial map={colorMap} />
      </mesh>
      <mesh receiveShadow castShadow position={[11, 9, 10]}>
        <boxGeometry args={[8, 1, 23]} />
        <meshStandardMaterial map={colorMap} />
      </mesh>
      <mesh receiveShadow castShadow position={[11, 3, 10]}>
        <boxGeometry args={[8, 1, 23]} />
        <meshStandardMaterial map={colorMap} />
      </mesh>
      <mesh receiveShadow castShadow position={[11, 2, -1]}>
        <boxGeometry args={[8, 14, 1]} />
        <meshStandardMaterial map={colorMap} />
      </mesh>
      <mesh receiveShadow castShadow position={[11, 2, 21.5]}>
        <boxGeometry args={[8, 14, 1]} />
        <meshStandardMaterial map={colorMap} />
      </mesh>

      <Computer />

      {/* Windows Computer */}
      <mesh position={[10, -1, 19]}>
        {/* Case */}
        <mesh receiveShadow castShadow position={[0, -3.25, 0]}>
          <boxGeometry args={[6.8, 0.5, 4]} />
          <meshStandardMaterial color={"grey"} metalness={0.9} />
        </mesh>
        <mesh receiveShadow castShadow position={[0, 3, 0]}>
          <boxGeometry args={[6.8, 0.5, 4]} />
          <meshStandardMaterial color={"grey"} metalness={0.9} />
        </mesh>
        <mesh receiveShadow castShadow position={[0, 0, 1.75]}>
          <boxGeometry args={[6.8, 6.5, 0.5]} />
          <meshStandardMaterial color={"grey"} metalness={0.9} />
        </mesh>
        <mesh receiveShadow castShadow position={[3.15, 0, 0]}>
          <boxGeometry args={[0.5, 6.5, 4]} />
          <meshStandardMaterial color={"grey"} metalness={0.9} />
        </mesh>
        <mesh receiveShadow castShadow position={[-3.15, 0, 1]}>
          <boxGeometry args={[0.5, 6.5, 2]} />
          <meshStandardMaterial color={"grey"} metalness={0.9} />
        </mesh>
        <mesh receiveShadow castShadow position={[-3.15, 0, -1.75]}>
          <boxGeometry args={[0.5, 6.5, 0.5]} />
          <meshStandardMaterial color={"grey"} metalness={0.9} />
        </mesh>
        {/* Innards */}
        {/* RAM */}
        <mesh position={[0.25, 0.65, 0]} castShadow>
          <mesh position={[0, 0, 0]}>
            <mesh receiveShadow castShadow position={[0, 0, -0.5]}>
              <boxGeometry args={[0.25, 2, 0.25]} />
              <meshStandardMaterial
                color={"black"}
                emissive={"hotpink"}
                emissiveIntensity={clicked ? 3 : 0}
              />
            </mesh>
            <mesh receiveShadow castShadow position={[0, 0, 0.15]}>
              <boxGeometry args={[0.25, 2, 1]} />
              <meshStandardMaterial color={"black"} />
            </mesh>
          </mesh>
          <mesh position={[-0.3, 0, 0]}>
            <mesh receiveShadow castShadow position={[0, 0, -0.5]}>
              <boxGeometry args={[0.25, 2, 0.25]} />
              <meshStandardMaterial
                color={"black"}
                emissive={"#00ffea"}
                emissiveIntensity={clicked ? 1.5 : 0}
              />
            </mesh>
            <mesh receiveShadow castShadow position={[0, 0, 0.15]}>
              <boxGeometry args={[0.25, 2, 1]} />
              <meshStandardMaterial color={"black"} />
            </mesh>
          </mesh>
          <mesh position={[-0.6, 0, 0]}>
            <mesh receiveShadow castShadow position={[0, 0, -0.5]}>
              <boxGeometry args={[0.25, 2, 0.25]} />
              <meshStandardMaterial
                color={"black"}
                emissive={"#1aff00"}
                emissiveIntensity={clicked ? 1.5 : 0}
              />
            </mesh>
            <mesh receiveShadow castShadow position={[0, 0, 0.15]}>
              <boxGeometry args={[0.25, 2, 1]} />
              <meshStandardMaterial color={"black"} />
            </mesh>
          </mesh>
          <mesh position={[-0.9, 0, 0]}>
            <mesh receiveShadow castShadow position={[0, 0, -0.5]}>
              <boxGeometry args={[0.25, 2, 0.25]} />
              <meshStandardMaterial
                color={"black"}
                emissive={"hotpink"}
                emissiveIntensity={clicked ? 3 : 0}
              />
            </mesh>
            <mesh receiveShadow castShadow position={[0, 0, 0.15]}>
              <boxGeometry args={[0.25, 2, 1]} />
              <meshStandardMaterial color={"black"} />
            </mesh>
          </mesh>
        </mesh>
        {/* Motherboard */}
        <mesh receiveShadow castShadow position={[1, 0, 1]}>
          <boxGeometry args={[3.5, 4, 0.25]} />
          <meshStandardMaterial map={motherBoardTexture} />
        </mesh>
        {/* GPU */}
        <mesh position={[1.25, -0.75, 0]} castShadow>
          <mesh>
            <boxGeometry args={[2.5, 0.5, 2]} />
            <meshStandardMaterial color={"black"} />
          </mesh>
          <mesh
            position={[-0.5, 0, -1.01]}
            castShadow
            rotation={[0, Math.PI, 0]}
          >
            <Text scale={0.2}>GEFORCE RTX</Text>
          </mesh>
        </mesh>
        {/* Fan Box */}
        <mesh position={[-2, 0.25, 0.5]} castShadow>
          <boxGeometry args={[2, 5, 0.25]} />
          <meshStandardMaterial color={"black"} />
        </mesh>
        {/* Fan Color */}
        <mesh position={[-2, 0.25, 0]} castShadow>
          <mesh position={[0, 0, 0]} rotation={[Math.PI / 2, 0, 0]} castShadow>
            <cylinderGeometry args={[0.75, 0.75, 0.15]} />
            <meshStandardMaterial
              color={"white"}
              emissive={"hotpink"}
              emissiveIntensity={clicked ? 2 : 0}
            />
          </mesh>
          <mesh
            position={[0, 1.5, 0]}
            rotation={[Math.PI / 2, 0, 0]}
            castShadow
          >
            <cylinderGeometry args={[0.75, 0.75, 0.15]} />
            <meshStandardMaterial
              color={"white"}
              emissive={"hotpink"}
              emissiveIntensity={clicked ? 2 : 0}
            />
          </mesh>
          <mesh
            position={[0, -1.5, 0]}
            rotation={[Math.PI / 2, 0, 0]}
            castShadow
          >
            <cylinderGeometry args={[0.75, 0.75, 0.15]} />
            <meshStandardMaterial
              color={"white"}
              emissive={"hotpink"}
              emissiveIntensity={clicked ? 2 : 0}
            />
          </mesh>
        </mesh>
        {/* Fan */}
        <mesh position={[-2, 0.25, 0]} castShadow>
          <mesh ref={computerFanMesh1} position={[0, 0, 0]} castShadow>
            <mesh>
              <cylinderGeometry args={[0.5, 0.5, 0.25]} />
              <meshStandardMaterial color={"black"} />
            </mesh>
            <mesh rotation={[0, 0, Math.PI / 2]}>
              <cylinderGeometry args={[0.5, 0.5, 0.25]} />
              <meshStandardMaterial color={"black"} />
            </mesh>
          </mesh>
          <mesh ref={computerFanMesh2} position={[0, 1.5, 0]} castShadow>
            <mesh>
              <cylinderGeometry args={[0.5, 0.5, 0.25]} />
              <meshStandardMaterial color={"black"} />
            </mesh>
            <mesh rotation={[0, 0, Math.PI / 2]}>
              <cylinderGeometry args={[0.5, 0.5, 0.25]} />
              <meshStandardMaterial color={"black"} />
            </mesh>
          </mesh>
          <mesh ref={computerFanMesh3} position={[0, -1.5, 0]} castShadow>
            <mesh>
              <cylinderGeometry args={[0.5, 0.5, 0.25]} />
              <meshStandardMaterial color={"black"} />
            </mesh>
            <mesh rotation={[0, 0, Math.PI / 2]}>
              <cylinderGeometry args={[0.5, 0.5, 0.25]} />
              <meshStandardMaterial color={"black"} />
            </mesh>
          </mesh>
        </mesh>
        {/* Glass */}
        <mesh position={[0, 0, -1.75]} castShadow>
          <boxGeometry args={[6, 6, 0.25]} />
          <meshPhysicalMaterial transparent={true} opacity={0.15} />
        </mesh>
        <mesh position={[-3, 0, -1]} castShadow>
          <boxGeometry args={[0.25, 6, 2]} />
          <meshPhysicalMaterial transparent={true} opacity={0.15} />
        </mesh>
        {/* Power Button */}
        <mesh onClick={() => setClicked(!clicked)}>
          <mesh position={[-3.4, 2.5, 1.6]} castShadow>
            <boxGeometry args={[0.14, 0.26, 0.16]} />
            <meshStandardMaterial color={"white"} />
          </mesh>
          <mesh position={[-3.4, 2.5, 1.6]} castShadow>
            <boxGeometry args={[0.15, 0.25, 0.15]} />
            <meshStandardMaterial color={"black"} />
          </mesh>
        </mesh>
      </mesh>

      {/* Windows Monitor */}
      <mesh receiveShadow castShadow position={[11, -1, 12]}>
        <boxGeometry args={[1, 5, 7]} />
        <meshStandardMaterial color={"black"} />
      </mesh>
      <mesh receiveShadow castShadow position={[11.5, -2, 12]}>
        <boxGeometry args={[0.5, 5, 1]} />
        <meshStandardMaterial color={"black"} />
      </mesh>
      <mesh receiveShadow castShadow position={[11.5, -4.5, 12]}>
        <boxGeometry args={[2, 0.5, 2]} />
        <meshStandardMaterial color={"black"} />
      </mesh>
      <mesh
        onClick={() => {
          if (clicked) window.location.href = "/coding";
        }}
        receiveShadow
        castShadow
        position={clicked ? [10.7, -1, 12] : [10.8, -1, 12]}
      >
        <boxGeometry args={[0.5, 4.5, 6.5]} />
        <meshStandardMaterial map={codeMap} />
      </mesh>

      {/* Windows Keyboard */}
      <mesh receiveShadow castShadow position={[8.5, -4.5, 12]}>
        <boxGeometry args={[2, 0.5, 4]} />
        <meshStandardMaterial map={rainbowKeyboardTexture} />
      </mesh>

      {/* Windows Mat */}
      <mesh receiveShadow castShadow position={[9, -4.5, 12]}>
        <boxGeometry args={[5, 0.01, 8]} />
        <meshStandardMaterial map={pkmnMatTexture} />
      </mesh>

      {/* Lamps */}
      <Lamp color={"#00ffea"} position={[11, 10, 3]} />
      <Lamp color={"#ff73fa"} position={[11, 10, 10]} />
      <Lamp color={"#feffc7"} position={[11, 10, 17]} />
      <Lamp color={"#0ce830"} position={[10, -4.5, 3]} />
    </mesh>
  );
};

export default Desk;

const Lamp = ({
  color,
  position,
}: {
  color: string;
  position: [x: number, y: number, z: number];
}) => {
  const [active, setActive] = useState(true);
  return (
    <mesh position={position} onClick={() => setActive(!active)}>
      <mesh receiveShadow>
        <boxGeometry args={[2, 0.5, 2]} />
        <meshStandardMaterial color={"#c9a463"} />
      </mesh>
      <mesh position={[0, 1, 0]}>
        <cylinderGeometry args={[0.5, 0.5, 2]} />
        <meshStandardMaterial color={color} />
      </mesh>
      <mesh position={[0, 3, 0]}>
        <cylinderGeometry args={[1, 2, 2]} />
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={active ? 2 : 0}
        />
      </mesh>
    </mesh>
  );
};
