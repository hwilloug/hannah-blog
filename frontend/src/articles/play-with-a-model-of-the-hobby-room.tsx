import SyntaxHighlighter from "react-syntax-highlighter/dist/esm/default-highlight";
import {
  ArticleContentContainer,
  Code,
  InlineCode,
  Section,
  SectionHeader,
  SubsectionHeader,
} from "../components/StyledComponents";

const HobbyRoomModelBeta: React.FC = () => {
  const computerCode = `import { Html } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import * as THREE from "three";
import { BoxBlendGeometry } from "./BoxBlendGeometry";

interface ComputerProps {
  position: [x: number, y: number, z: number];
  rotation: [x: number, y: number, z: number];
}

const Computer: React.FC<ComputerProps> = ({position, rotation}) => {
  const ryoukanKeyboardTexture = useLoader(
    THREE.TextureLoader,
    "/ryoukan_keyboard_texture.jpeg",
  );
  const floralMatTexture = useLoader(
    THREE.TextureLoader,
    "/floral_mat_texture.jpeg",
  );
  return (
    <mesh receiveShadow castShadow position={position} rotation={rotation}>
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

export default Computer;`;

  const cssCode = `#container,
#webgl {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
}

#welcome-canvas,
#welcome-div {
  background-image: url("../public/sky_bg.jpeg");
  background-size: cover;
}

#screen {
  background-color: rgb(138, 158, 126);
  height: 500px;
  width: 700px;
  backface-visibility: hidden;
  border-radius: 10px;
}

#screen .header-bar {
  background-color: rgb(41, 90, 12);
  color: #fff;
  padding: 16px;
  font-size: 1.5em;
  text-align: center;
  position: relative;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

#screen .main-icon {
  position: absolute;
  top: 12px;
  left: 8px;
  width: 24px;
  height: 24px;
  background-image: url("../public/poppy.png");
  background-size: contain;
}

#screen .header-text {
  margin: 0;
  margin-left: 28px;
  padding: 0;
  font-size: 0.75em;
  font-weight: 400;
  text-align: left;
  font-family: "Gluten", cursive;
  text-shadow:
    -1px -1px 0 #000,
    1px -1px 0 #000,
    -1px 1px 0 #000,
    1px 1px 0 #000;
}

#screen .body {
  padding: 16px;
  font-size: 1em;
  font-family: "Gluten", cursive;
  text-align: center;
  color: rgb(145, 107, 162);
  text-shadow:
    -1px -1px 0 #000,
    1px -1px 0 #000,
    -1px 1px 0 #000,
    1px 1px 0 #000;
  font-size: 2rem;
}

#screen .body .enter-button {
  background-color: rgb(137, 56, 171);
  color: #fff;
  padding: 16px;
  font-size: 1.5em;
  text-align: center;
  border-radius: 10px;
  border: none;
}

#screen .body .enter-button:hover {
  background-color: rgb(145, 107, 162);
  color: #fff;
  cursor: pointer;
}`;

  const sceneCode = `import { OrbitControls } from "@react-three/drei";
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
        <Computer position={[0, 0, 0]} rotation={[0, 0, 0]} />
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

export default Scene;`;

  const welcomeCode = `import { Typography } from "@mui/material";
import { lazy, Suspense } from "react";
import Loading from "../components/Loading";

const WelcomeScene = lazy(() => import("../three-components/Scene"));

const WelcomePage: React.FC = () => {
  return (
    <>
      <div
        id="welcome-div"
        style={{ height: window.innerHeight, width: window.innerWidth }}
      >
        <Suspense fallback={<Loading />}>
          <WelcomeScene />
        </Suspense>
        {/* Welcome overlay */}
        <div style={{ position: "absolute", top: 20, left: 0, width: "100%" }}>
          <div>
            <Typography
              variant="h1"
              fontFamily={"Gluten"}
              fontSize={36}
              textAlign={"center"}
            >
              Welcome to Hannah's Hobby Room!
            </Typography>
          </div>
          <div>
            <Typography
              variant="h2"
              fontWeight={"bold"}
              fontFamily={"Ubuntu"}
              fontSize={18}
              textAlign={"center"}
            >
              Take your time and look around, but <a href="/">click here</a> if
              you just want to get to the site.
            </Typography>
          </div>
        </div>
        {/* Controls instructions overlay */}
        <div
          style={{
            backgroundColor: "#4b614e99",
            position: "absolute",
            bottom: 0,
            left: 0,
            borderRadius: "8px",
            padding: "5px",
            border: "1px solid #304733",
          }}
        >
          <Typography textAlign={"center"}>
            <i>
              <b>Controls</b>
            </i>
          </Typography>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 2fr",
              alignItems: "center",
            }}
          >
            <Typography>
              <b>Move</b>:
            </Typography>
            <Typography>shift + click + drag</Typography>
            <Typography>
              <b>Rotate</b>:
            </Typography>
            <Typography>click + drag</Typography>
            <Typography>
              <b>Zoom</b>:
            </Typography>
            <Typography>scroll</Typography>
          </div>
        </div>
      </div>
    </>
  );
};

export default WelcomePage;`;

  return (
    <ArticleContentContainer>
      <Section>
        <p>
          I was watching some videos on portfolio/personal websites, and came
          across a few that were interactable 3D models rendered right in the
          web browser. I knew I had to figure out how to do it as well. I found
          that they used <b>threejs</b> and <b>react-three-fiber</b>, and I was
          able to get a basic scene up and running pretty quickly.
        </p>
        <p>
          I was interested in building a computer that was interactable, then I
          suddenly had the idea to model my hobby room and use it on the blog
          somehow. It's going to be the welcome page, but it is currently a work
          in progress.
        </p>
        <p>
          <b>
            Play with the beta model now on{" "}
            <a href="/welcome" target="_blank">
              this page
            </a>
          </b>
          .
        </p>
      </Section>
      <Section>
        <SectionHeader>How to Play</SectionHeader>
        <ol>
          <li>Click and drag to rotate the view</li>
          <li>Scroll to zoom in and out</li>
          <li>Shift, click, and drag to pan the view</li>
          <li>Click on the objects to interact with them</li>
          <li>
            Click "Click to Enter" on the computer screen to go to
            hannahshobbyroom.com
          </li>
          <li>
            Click around and find any easter eggs! Hint: there's links to each
            section of my blog. See if you can find them all!
          </li>
        </ol>
      </Section>
      <Section>
        <SectionHeader>Behind the Scenes</SectionHeader>
        <SubsectionHeader>Packages</SubsectionHeader>
        <p>I used the following npm packages to build the model:</p>
        <ul>
          <li>
            <a href="https://www.npmjs.com/package/three" target="_blank">
              <b>three</b>
            </a>
            : 3D modeling in Javascript
          </li>
          <li>
            <a
              href="https://www.npmjs.com/package/@react-three/fiber"
              target="_blank"
            >
              <b>@react-three/fiber</b>
            </a>
            : Threejs within React
          </li>
          <li>
            <a
              href="https://www.npmjs.com/package/@react-three/drei"
              target="_blank"
            >
              <b>@react-three/drei</b>
            </a>
            : Helpers for react-three-fiber
          </li>
          <li>
            <a
              href="https://www.npmjs.com/package/@react-three/postprocessing"
              target="_blank"
            >
              <b>@react-three/postprocessing</b>
            </a>
            : Effects
          </li>
        </ul>

        <SubsectionHeader>Implementation</SubsectionHeader>
        <p>
          <b>File structure</b>
        </p>
        <Code>
          src <br />
          | -- three-components <br />
          | -- | -- Scene.tsx <br />
          | -- | -- Room.tsx <br />
          | -- | -- Desk.tsx <br />
          | -- | -- Chair.tsx <br />
          | -- | -- GrowLights.tsx <br />
          | -- | -- Bookshelf.tsx <br />
          | -- | -- HobbyBox.tsx <br />
          | -- | -- Computer.tsx <br />
          | -- pages <br />
          | -- | -- Welcome.tsx <br />
        </Code>
        <p>
          <b>Computer.tsx</b>
        </p>
        <p>
          Elements on the model are created using the{" "}
          <InlineCode>{"<mesh>"}</InlineCode> tag. This takes various props,
          such as shadow options, position, and rotation of the object. Within
          the outer mesh, there are meshes for the rudimentary elements that
          make up the object as a whole. Each of these child meshes takes a has
          a position and rotation relative to the outer mesh's center. Each
          child mesh has a geometry and material within it that make up the
          object.
        </p>
        <p>
          This computer mesh is special, too, because it contains an{" "}
          <InlineCode>{"<Html>"}</InlineCode> element. This element makes it
          super easy to add html on top of a mesh, and is how I implemented the
          interactable computer screen. The defualt for Html elements is to
          render it through the meshes, but adding{" "}
          <InlineCode>{"occlude='blending'"}</InlineCode> to the Html style
          makes the element hidden behind them.
        </p>
        <SyntaxHighlighter language="typescript">
          {computerCode}
        </SyntaxHighlighter>
        <p>
          <b>index.css</b>
        </p>
        <SyntaxHighlighter language="typescript">{cssCode}</SyntaxHighlighter>
        <p>
          <b>Scene.tsx</b>
        </p>
        <p>
          A scene is created as a top-level <InlineCode>Canvas</InlineCode> with
          children of the lighting, effects, controls, and elements in the
          scene.
        </p>
        <SyntaxHighlighter language="typescript">{sceneCode}</SyntaxHighlighter>
        <p>Now the scene can be incorporated into the welcome page.</p>
        <p>
          <b>Welcome.tsx</b>
        </p>
        <p>This is where it all comes together.</p>
        <ul>
          <li style={{ marginBottom: "16px" }}>
            The scene is lazy loaded so that a loading screen can be displayed.
            This is done by using a <InlineCode>{"<Suspense>"}</InlineCode>{" "}
            element with a fallback of the{" "}
            <InlineCode>{"<Loading />"}</InlineCode> component.
          </li>
          <li style={{ marginBottom: "16px" }}>
            The outer <InlineCode>{"<div>"}</InlineCode> container is set to the
            window height and width so that the canvas in Scene.tsx fills the
            entire screen
          </li>
          <li style={{ marginBottom: "16px" }}>
            The welcome overlay is displayed at the top of the screen with a
            welcome message and a link to the blog using an absolute positioned
            div
          </li>
          <li style={{ marginBottom: "16px" }}>
            Controls instructions are displayed at the bottom of the screen
            using an absolute positioned div
          </li>
        </ul>
        <SyntaxHighlighter language="typescript">
          {welcomeCode}
        </SyntaxHighlighter>

        <SubsectionHeader>Challenges</SubsectionHeader>
        <p>Here are some challenges I faced while building the model:</p>
        <ul>
          <li style={{ marginBottom: "16px" }}>
            Getting the camera to move the way I wanted
          </li>
          <li>Shadows & lighting</li>
          <ul>
            <li>
              I was able to figure this out by using a directional light and
              setting <InlineCode>castShadow</InlineCode> and{" "}
              <InlineCode>receiveShadow</InlineCode> on the light and each mesh.
            </li>
          </ul>
          <li style={{ margin: "16px 0px" }}>
            Rendering HTML within the computer screen (before I switched to
            @react-three/fiber)
          </li>
          <li style={{ marginTop: "16px" }}>
            Compressing the model so it loads more quickly
          </li>
          <ul>
            <li>
              Still haven't figured this one out, but I'm compensating by adding
              a loading screen. This isn't best practice, but it's the best I
              can do right now.
            </li>
          </ul>
          <li style={{ margin: "16px 0px" }}>
            Animating with Tween (before just using pure react-three/fiber)
          </li>
        </ul>
      </Section>
      <Section>
        <p>Comment below if you have any questions, comments, or ideas! 🌸</p>
      </Section>
    </ArticleContentContainer>
  );
};

export default HobbyRoomModelBeta;