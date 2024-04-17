import { Box, styled } from "@mui/material";
import { CSSProperties, ReactNode } from "react";

const Frame = styled("div")(({ theme }) => ({
  padding: "10px",
  borderRadius: "5px",
  backgroundColor: theme.palette.secondary.light,
}));

const WindowButtonContainer = styled(Box)({
  display: "flex",
  marginBottom: "5px",
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

const WindowFrame: React.FC<{ children: ReactNode; style: CSSProperties }> = ({
  children,
  style,
}) => {
  return (
    <Frame style={style}>
      <WindowButtonContainer>
        <WindowButton color="red" />
        <WindowButton color="orange" />
        <WindowButton color="green" />
      </WindowButtonContainer>
      {children}
    </Frame>
  );
};

export default WindowFrame;
