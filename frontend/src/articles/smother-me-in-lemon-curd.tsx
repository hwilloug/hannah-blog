import { ReactElement } from "react";
import {
  ArticleContentContainer,
  FullSizeImage,
  Section,
} from "../components/StyledComponents";
import { useTheme } from "@mui/material";

const Curtains: React.FunctionComponent = (): ReactElement => {
  const theme = useTheme();

  return (
    <ArticleContentContainer colors={theme.palette}>
      <Section>
        <FullSizeImage
          src={`${process.env.REACT_APP_IMAGES_BASE_URL}/lemon_curd.gif`}
        />
        <ul>
          <li>Meringue: Use those egg whites</li>
          <ul>
            <li>Meringue cookies</li>
            <li>Pavlova</li>
            <li>Mini Pavlova Cookies</li>
          </ul>
        </ul>
      </Section>
    </ArticleContentContainer>
  );
};

export default Curtains;
