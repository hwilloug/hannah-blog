import { styled } from "@mui/material";
import { ReactElement } from "react";

const Quote = styled("blockquote")({
  borderLeft: "2px solid grey",
  paddingLeft: "5px",
});

const Citation = styled("p")({
  textAlign: "right",
});

interface BlockQuoteProps {
  quote: string;
  citation: string;
}

const BlockQuote: React.FunctionComponent<BlockQuoteProps> = ({
  quote,
  citation,
}): ReactElement => {
  return (
    <div>
      <Quote>{quote}</Quote>
      <Citation>
        <cite>- {citation}</cite>
      </Citation>
    </div>
  );
};

export default BlockQuote;
