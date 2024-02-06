import styled from "@emotion/styled";
import { useEffect, useState } from "react";

const WordColorAlternatorContainer = styled.div`
  text-align: center;
  text-wrap: balance;
`;

const Title = styled.span`
  font-size: 2.75rem;

  font-family: Montserrat, Arial, Helvetica, sans-serif;
  text-shadow:
    -1px 0 black,
    0 1px black,
    1px 0 black,
    0 -1px black;
`;

interface WordColorAlternatorProps {
  colors: string[];
  words: string[];
}

const WordColorAlternator: React.FunctionComponent<
  WordColorAlternatorProps
> = ({ colors, words }) => {
  const initalColors = colors.slice().splice(0, colors.length);
  const [wordColors, setWordColors] = useState<string[]>(initalColors);
  const [currentColorIndex, setCurrentColorIndex] = useState<number>(
    colors.length - 1,
  );
  const [currentWordIndex, setCurrentWordIndex] = useState<number>(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentColorIndex((prevIndex) => (prevIndex + 1) % colors.length);
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);

      setWordColors((prevColors) =>
        prevColors.map((color, index) =>
          index === currentWordIndex ? colors[currentColorIndex] : color,
        ),
      );
    }, 750);

    return () => clearInterval(intervalId);
  }, [currentColorIndex]);

  return (
    <WordColorAlternatorContainer>
      <Title>
        {words.map((word, index) => (
          <span key={index} style={{ color: wordColors[index] }}>
            {word}{" "}
          </span>
        ))}
      </Title>
    </WordColorAlternatorContainer>
  );
};

export default WordColorAlternator;
