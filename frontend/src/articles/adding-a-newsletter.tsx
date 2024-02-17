import {
  FullSizeImage,
  Section,
  SectionHeader,
} from "../components/StyledComponents";
import { ArticleContainer } from "../pages/Article";

const AddingANewsletter: React.FunctionComponent = () => {
  return (
    <ArticleContainer>
      <Section>
        <p>
          I've added newsletter signups to the site! Sign up now to the right ➡
        </p>
      </Section>
      <Section>
        <SectionHeader>Technical Details</SectionHeader>
        <FullSizeImage
          src={`${process.env.REACT_APP_IMAGES_BASE_URL}/architecture_diagram_2.jpeg`}
        />
        <p>
          I decided to stick with AWS for the newsletter infrastructure. I added
          a new table to the RDS database that backs this site for storing
          emails, as well as adding lambdas that post new emails, unsubscribe,
          and triggering a new email. The emails are sent using AWS's Simple
          Email Service (SES). Any bounces or complaints are caught with a
          Simple Notification Service (SNS) topic, and pushed to an SQS queue
          respectively for triage.
        </p>
      </Section>
      <Section>
        <p>
          Implementing the newsletter was simple enough, and I did a lot of
          trial and error to get it right. Currently, I have the template
          hard-coded into the lambda, but in the future, I'll look into saving
          an SES template for (hopefully) easier formatting and design of the
          emails.
        </p>
      </Section>
      <Section>
        <p>
          <a
            href="https://github.com/hwilloug/hannah-blog/blob/main/backend/lambdas/send_new_article_email.py"
            target="_blank"
          >
            Click here
          </a>{" "}
          for the source code for the send email lambda!
        </p>
      </Section>
      <Section>
        <SectionHeader>Resources</SectionHeader>
        <ul>
          <li>
            <a
              href="https://aws.amazon.com/blogs/messaging-and-targeting/handling-bounces-and-complaints/"
              target="_blank"
            >
              Handling Bounces and Complaints
            </a>
          </li>
        </ul>
      </Section>
    </ArticleContainer>
  );
};

export default AddingANewsletter;
