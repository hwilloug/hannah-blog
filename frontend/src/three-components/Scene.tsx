import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Bloom, EffectComposer } from "@react-three/postprocessing";
import Bookshelf from "../three-components/Bookshelf";
import Desk from "../three-components/Desk";
import GrowLights from "../three-components/GrowLights";
import HobbyBox from "../three-components/HobbyBox";
import Room from "../three-components/Room";
import Chair from "./Chair";

const Scene: React.FC = () => {
  return (
    <Canvas
      id="welcome-canvas"
      camera={{
        position: [-40, 60, 50],
        fov: 75,
        aspect: window.innerWidth / window.innerHeight,
      }}
      shadows
      flat
    >
      <ambientLight />
      <directionalLight
        intensity={Math.PI / 1.25}
        position={[0, 20, 0]}
        castShadow
      />
      <EffectComposer>
        <Bloom mipmapBlur luminanceThreshold={1} intensity={2} />
      </EffectComposer>
      <mesh position={[1, 0, -15]}>
        <Room />
        <Desk />
        <Chair position={[-7, 3, 16]} rotation={[0, Math.PI / 1.5, 0]} />
        <GrowLights />
        <HobbyBox
          position={[-12, -12, 42.5]}
          rotation={[0, Math.PI / 20, 0]}
          height={5}
          color={"blue"}
        />
        <HobbyBox
          position={[-5.25, -12, 42.5]}
          rotation={[0, -Math.PI / 1.25, 0]}
          height={6}
          color={"orange"}
        />
        <Bookshelf position={[0, 0, 0]} rotation={[0, 0, 0]} />
      </mesh>
      <OrbitControls
        maxPolarAngle={Math.PI / 2}
        minDistance={1}
        maxDistance={100}
      />
    </Canvas>
  );
};

export default Scene;
