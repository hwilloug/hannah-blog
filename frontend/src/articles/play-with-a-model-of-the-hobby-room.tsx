import {
  ArticleContentContainer,
  Section,
  SectionHeader,
  SubsectionHeader,
} from "../components/StyledComponents";

const HobbyRoomModelBeta: React.FC = () => {
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
          in progress. Play with the beta model now on{" "}
          <a href="/welcome" target="_blank">
            this page
          </a>
          .
        </p>
      </Section>
      <Section>
        <SectionHeader>How to Play</SectionHeader>
        <ol>
          <li>Click and drag to rotate the camera</li>
          <li>Scroll to zoom in and out</li>
          <li>Shift, click, and drag to pan the camera</li>
          <li>Click on the objects to interact with them</li>
          <li>
            Click "Click to Enter" on the computer screen to go to
            hannahshobbyroom.com
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
        <SubsectionHeader>Challenges</SubsectionHeader>
        <p>Here are some challenges I faced while building the model:</p>
        <ul>
          <li>Getting the camera to move the way I wanted</li>
          <li>Shadows & lighting</li>
          <li>
            Rendering HTML within the computer screen (before I switched to
            @react-three/fiber)
          </li>
          <li>Compressing the model so it loads more quickly</li>
        </ul>
      </Section>
      <Section>
        <SectionHeader>Future Work</SectionHeader>
        <p>Here's a list of things I want to add to the model:</p>
        <ul>
          <li>Textures for my favorite books on the bookshelf</li>
          <li>A cat in the cubby of the desk</li>
          <li>Lamps on the top of the desk</li>
          <li>A desk chair</li>
          <li>Window(s)</li>
          <li>Improved texture on the door</li>
          <li>Easter eggs ;)</li>
          <li>Instructions on how to use</li>
          <li>
            A shortcut to the site without having to interact with the model
          </li>
          <li>Lots of small details such as textures on the keyboards</li>
        </ul>
        <p>Comment below if you have any questions, comments, or ideas! 🌸</p>
      </Section>
    </ArticleContentContainer>
  );
};

export default HobbyRoomModelBeta;
