import SyntaxHighlighter from "react-syntax-highlighter";
import ClickableFullSizeImage from "../components/ClickableFullSizeImage";
import {
  ArticleContentContainer,
  Section,
  SectionHeader,
} from "../components/StyledComponents";

const StylingOverhaul: React.FunctionComponent = () => {
  const beforeCode = [
    `import { useTheme } from "@mui/material"
import styled from "@emotion/styled"

interface ColorProps {
  colors: Palette;
}

const LayoutContainer = styled.div<ColorProps>\`
  background-color: \${({ colors }) => colors.primary.light};
  background-image: \${({ colors }) =>
    colors.mode === "dark" ? "url('bg.png')" : "url('bg_light.png')"};
  ...
\`

const Layout: React.FunctionComponent = (): ReactElement => {
  theme = useTheme()

  return (
    <LayoutContainer colors={theme.palette}>
      ...
    </LayoutContainer>
  )
}`,
  ];

  const afterCode = [
    `import { styled } from "@mui/material"

const LayoutContainer = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.primary.light,
  backgroundImage:
    theme.palette.mode === "dark" ? "url('bg.png')" : "url('bg_light.png')",
  ...
}));

const Layout: React.FunctionComponent = (): ReactElement => {
  return (
    <LayoutContainer>
      ...
    </LayoutContainer>
  )
}`,
  ];

  return (
    <ArticleContentContainer>
      <Section>
        <p>
          I've redone the colors and styling for the site! I realized that green
          is more my favorite color than purple, so I decided to make the
          switch. I added little hearts to the background, and now I feel like
          the blog is even more "me."
        </p>
        <p>Before:</p>
        <ClickableFullSizeImage
          src={`${process.env.REACT_APP_IMAGES_BASE_URL}/poppylandblog.jpeg`}
          alt="hannah's hobby room original design"
        />
        <p>After:</p>
        <ClickableFullSizeImage
          src={`${process.env.REACT_APP_IMAGES_BASE_URL}/colors-overhaul.jpeg`}
          alt="redone hannah's hobby room"
        />
      </Section>
      <Section>
        <SectionHeader>Code Refactor</SectionHeader>
        <p>
          Initially I was using emotion/styled for each styled component,
          however I was using Material UI's (MUI) themeing. This caused some
          issues when I wanted to use a color from the theme or check a
          breakpoint because I needed to pass in each value as a prop to the
          emotion/styled component. So, I refactored each styled component to
          use MUI's styled function instead. Then, I could just use a callback
          function to access any element from the theme!
        </p>
        <p>Before:</p>
        <SyntaxHighlighter language="typescript" showLineNumbers>
          {beforeCode}
        </SyntaxHighlighter>
        <p>After:</p>
        <SyntaxHighlighter language="typescript" showLineNumbers>
          {afterCode}
        </SyntaxHighlighter>
        <p>
          You can probably imagine how big a difference this refactor makes on a
          larger scale. Now, the code is much more maintainable, and it's easier
          to add new features!
        </p>
      </Section>
      <Section>
        <SectionHeader>Lessons Learned</SectionHeader>
        <ul>
          <li>
            Being more conscience of reusable styling and easier ways to do
            themeing
          </li>
          <li>
            Switch things up and refactor early on, research something if you
            feel like it is going to be tedious later on because there might a
            better way to do something
          </li>
          <li>
            Maybe I was more focused on speed rather than learning a new skill?
            Slow down!
          </li>
        </ul>
      </Section>
    </ArticleContentContainer>
  );
};

export default StylingOverhaul;
