import { useTheme } from "@mui/material";
import { ReactElement } from "react";
import {
  ArticleContentContainer,
  Section,
} from "../components/StyledComponents";

const PoppylandJournal: React.FunctionComponent = (): ReactElement => {
  const theme = useTheme();

  return (
    <ArticleContentContainer>
      <Section>
        <p>
          I made a website for journaling! Check it out here --{" "}
          <a href="https://journal.poppyland.dev" target="_blank">
            journal.poppyland.dev
          </a>
        </p>
        <p>
          The site is written in React, and served via S3/Cloudfront. The
          backend is completely serverless with AWS DynamoDB/Lambda/API Gateway,
          and the infrastructure is written as code via Cloudformation. Check
          out the source code{" "}
          <a
            href="https://github.com/hwilloug/poppyland-journal"
            target="_blank"
          >
            ~here~
          </a>
          .
        </p>
      </Section>
    </ArticleContentContainer>
  );
};

export default PoppylandJournal;
