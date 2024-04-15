import { Box, styled } from "@mui/material";
import { ReactNode } from "react";

const Frame = styled("div")(({ theme }) => ({
  padding: "10px",
  paddingTop: "10px",
  borderRadius: "5px",
  backgroundColor: theme.palette.secondary.light,
  width: "15rem",
}));

const WindowButtonContainer = styled(Box)({
  display: "flex",
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

const WindowFrame: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <Frame>
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
