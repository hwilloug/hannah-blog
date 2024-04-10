import { styled } from "@mui/material";
import { useEffect, useState } from "react";

const WordColorAlternatorContainer = styled("div")({
  textAlign: "center",
  textWrap: "balance",
});

const Title = styled("span")({
  fontSize: "3rem",
  fontFamily: "Gluten, Montserrat, Arial, Helvetica, sans-serif",
  textShadow: "-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black",
});

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
