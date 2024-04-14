import { styled } from "@mui/material";
import { ReactElement } from "react";

const LoadingContainer = styled("div")({
  width: "100%",
  padding: "20px",
  textAlign: "center",
});

const LoaderImg = styled("img")({});

const LoaderText = styled("p")({});

const Loading: React.FunctionComponent = (): ReactElement => {
  return (
    <LoadingContainer>
      <LoaderImg
        src={`${process.env.REACT_APP_IMAGES_BASE_URL}/poppy_face_sleepy.gif`}
      ></LoaderImg>
      <LoaderText>Loading...</LoaderText>
    </LoadingContainer>
  );
};

export default Loading;
