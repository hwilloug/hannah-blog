import { useTheme } from "@mui/material";
import { ReactElement } from "react";
import {
  ArticleContentContainer,
  FullSizeImage,
  Section,
  SectionHeader,
} from "../components/StyledComponents";

const Workbench: React.FunctionComponent = (): ReactElement => {
  const theme = useTheme();

  return (
    <ArticleContentContainer>
      <Section>
        <p>
          I bought a Kreg pocket hole jig, and it came with a free trial to{" "}
          <a href="https://academy.kregtool.com" target="_blank">
            Kreg Academy
          </a>
          , so I started the beginner course. The first project in the course is{" "}
          <a
            href="https://academy.kregtool.com/courses/foundations-of-building-series/simple-workbench-shelves"
            target="_blank"
          >
            a simple workbench with shelves
          </a>
          , which I needed, so I decided to build it! It also gave me an excuse
          to buy a circular saw.
        </p>
      </Section>
      <Section>
        <FullSizeImage
          src={`${process.env.REACT_APP_IMAGES_BASE_URL}/workbench_1.jpeg`}
          alt="Workbench in progress"
        />
        <p>In progress...</p>
      </Section>
      <Section>
        <FullSizeImage
          src={`${process.env.REACT_APP_IMAGES_BASE_URL}/workbench_2.jpeg`}
          alt="The finished workbench"
        />
        <p>
          And here's the final result! Some problems I encountered were:
          <ul>
            <li>Not having good circular saw skills</li>
            <li>Not cutting square lines</li>
          </ul>
          Luckily, though, the workbench doesn't wobble, and the work surface is
          flat, so I'm happy enough with it. It's going to get some good, rough
          use, so I'm not too concerned with it being perfect.
        </p>
      </Section>
      <Section>
        <SectionHeader>Resources</SectionHeader>
        <ul>
          <li>
            <a
              href="https://academy.kregtool.com/courses/foundations-of-building-series/simple-workbench-shelves"
              target="_blank"
            >
              Kreg Academy Foundations of Building Series: Simple Workbench +
              Shelves
            </a>
          </li>
        </ul>
      </Section>
    </ArticleContentContainer>
  );
};

export default Workbench;
