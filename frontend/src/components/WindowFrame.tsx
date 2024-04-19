import { Box, styled } from "@mui/material";
import { CSSProperties, ReactNode } from "react";

const Frame = styled("div")(({ theme }) => ({
  padding: "10px",
  borderRadius: "5px",
  backgroundColor: theme.palette.secondary.light,
  display: "flex",
  flexDirection: "column",
}));

const WindowButtonContainer = styled(Box)({
  display: "flex",
  marginBottom: "5px",
});

const ChildrenContainer = styled(Box)({
  flexGrow: "5",
});

const WindowButton = styled("span", {
  shouldForwardProp: (prop) => prop !== "color",
})(({ color }) => ({
  height: "10px",
  width: "10px",
  backgroundColor: color,
  borderRadius: "50%",
  display: "inline-block",
  margin: "5px",
}));

const WindowFrame: React.FC<{
  children: ReactNode;
  style?: CSSProperties;
  childrenStyle?: CSSProperties;
}> = ({ children, style, childrenStyle }) => {
  return (
    <Frame style={style}>
      <WindowButtonContainer>
        <WindowButton color="red" />
        <WindowButton color="orange" />
        <WindowButton color="green" />
      </WindowButtonContainer>
      <ChildrenContainer style={childrenStyle}>{children}</ChildrenContainer>
    </Frame>
  );
};

export default WindowFrame;
