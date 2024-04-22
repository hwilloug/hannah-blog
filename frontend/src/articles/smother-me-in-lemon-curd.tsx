import { ReactElement } from "react";
import ClickableFullSizeImage from "../components/ClickableFullSizeImage";
import {
  ArticleContentContainer,
  Section,
} from "../components/StyledComponents";

const Curtains: React.FunctionComponent = (): ReactElement => {
  return (
    <ArticleContentContainer>
      <Section>
        <ClickableFullSizeImage
          src={`${process.env.REACT_APP_IMAGES_BASE_URL}/lemon_curd.gif`}
          alt="whisking the lemon curd"
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
