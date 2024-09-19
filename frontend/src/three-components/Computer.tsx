import { Html } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import * as THREE from "three";
import { BoxBlendGeometry } from "./BoxBlendGeometry";

const Computer: React.FC = () => {
  const ryoukanKeyboardTexture = useLoader(
    THREE.TextureLoader,
    "/ryoukan_keyboard_texture.jpeg",
  );
  const floralMatTexture = useLoader(
    THREE.TextureLoader,
    "/floral_mat_texture.jpeg",
  );
  return (
    <mesh receiveShadow castShadow>
      <mesh receiveShadow castShadow position={[0, 0, 0]}>
        <BoxBlendGeometry width={8} height={6} depth={1} radius={0.5} />
        <meshStandardMaterial
          roughness={0}
          metalness={0.5}
          color={"mediumpurple"}
        />
        <Html
          scale={[0.425, 0.425, 0.001]}
          transform
          position={[0, 0, 0.505]}
          occlude="blending"
        >
          <div id="screen">
            <div className="header-bar">
              <div className="main-icon" />
              <h1 className="header-text">Hannah's Hobby Room</h1>
            </div>
            <div className="body">
              <h2>Welcome to Hannah's Hobby Room!</h2>
              <button
                className="enter-button"
                onClick={() =>
                  (window.location.href = "https://hannahshobbyroom.com")
                }
              >
                Click to Enter
              </button>
            </div>
          </div>
        </Html>
      </mesh>
      <mesh receiveShadow castShadow position={[0, -3, -0.24]}>
        <boxGeometry args={[1.5, 3, 0.5]} />
        <meshStandardMaterial
          roughness={0}
          metalness={0.5}
          color={"mediumpurple"}
        />
      </mesh>
      <mesh receiveShadow castShadow position={[0, -4.5, 0.25]}>
        <BoxBlendGeometry width={1.5} height={0.25} depth={1.5} radius={0.25} />
        <meshStandardMaterial
          roughness={0}
          metalness={0.5}
          color={"mediumpurple"}
        />
      </mesh>

      {/* Keyboard */}
      <mesh receiveShadow castShadow position={[0, -4.5, 3]}>
        <boxGeometry args={[7.5, 0.25, 3]} />
        <meshStandardMaterial map={ryoukanKeyboardTexture} />
      </mesh>

      {/* Mat */}
      <mesh receiveShadow castShadow position={[0, -4.5, 3]}>
        <boxGeometry args={[12, 0.01, 6]} />
        <meshStandardMaterial map={floralMatTexture} />
      </mesh>
    </mesh>
  );
};

export default Computer;
