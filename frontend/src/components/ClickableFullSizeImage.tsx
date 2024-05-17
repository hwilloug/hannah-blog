import { styled } from "@mui/material";
import { useEffect, useState } from "react";
import { FullSizeImage } from "./StyledComponents";

const ClickableImageContainer = styled("div", {
  shouldForwardProp: (prop) => prop !== "fullSize",
})<{ fullSize: boolean }>(({ fullSize }) => ({
  position: fullSize ? "absolute" : "initial",
  top: window.scrollY,
  left: 0,
  height: "100%",
  width: "100%",
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
}> = ({ src, alt, size = "100%" }) => {
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
    <ClickableImageContainer fullSize={fullSize} onClick={handleClick}>
      <FullSizeImage style={{ width: size }} src={src} alt={alt} />
    </ClickableImageContainer>
  );
};

export default ClickableImage;
