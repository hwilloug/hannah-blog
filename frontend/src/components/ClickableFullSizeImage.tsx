import { styled } from "@mui/material";
import { useEffect, useState } from "react";
import { FullSizeImage } from "./StyledComponents";

const ClickableImageContainer = styled("div", {
  shouldForwardProp: (prop) => prop !== "fullSize" && prop !== "width",
})<{ fullSize: boolean, width: string }>(({ fullSize, width }) => ({
  position: fullSize ? "absolute" : "initial",
  top: window.scrollY,
  left: 0,
  width: width,
  overflow: "hidden",
  zIndex: 5,
  backgroundColor: fullSize ? "black" : "none",
  ":hover": {
    cursor: "pointer",
  },
}));

const ClickableImage: React.FC<{
  src: string;
  alt?: string;
  size?: string;
  alignment?: CanvasTextAlign;
}> = ({ src, alt, size = "100%", alignment = "left" }) => {
  const [fullSize, setFullSize] = useState(false);
  const [freezeScroll, setFreezeScroll] = useState(false);

  useEffect(() => {
    if (freezeScroll) {
      const scrollTop = document.documentElement.scrollTop;
      window.onscroll = () => {
        window.scrollTo(0, scrollTop);
      };
    } else {
      window.onscroll = () => {};
    }
  }, [freezeScroll]);

  const handleClick = () => {
    setFullSize(!fullSize);
    setFreezeScroll(!freezeScroll);
  };
  return (
    <ClickableImageContainer fullSize={fullSize} width={size} onClick={handleClick} style={{textAlign: alignment}}>
      <FullSizeImage src={src} alt={alt} />
    </ClickableImageContainer>
  );
};

export default ClickableImage;
