import ClickableImage from "../components/ClickableFullSizeImage";
import EmailSignup from "../components/EmailSignup";
import {
  ArticleContentContainer,
  Section,
  SectionHeader,
} from "../components/StyledComponents";

const AddingANewsletter: React.FunctionComponent = () => {
  return (
    <ArticleContentContainer>
      <Section>
        <p>
          I've added newsletter signups to the site! Sign up now below or to the
          right.
        </p>
        <EmailSignup />
      </Section>
      <Section>
        <SectionHeader>Technical Details</SectionHeader>
        <ClickableImage
          src={`${process.env.REACT_APP_IMAGES_BASE_URL}/architecture_diagram_2.jpeg`}
          alt="AWS Architecture Diagram"
        />
        <p>
          I decided to stick with AWS for the newsletter infrastructure. I added
          a new table for storing emails to the Relational Database Service
          (RDS) database that backs this site, as well as adding lambdas that
          post new emails, unsubscribe, and triggering a new email. The emails
          are sent using AWS's Simple Email Service (SES). Any bounces or
          complaints are caught with a Simple Notification Service (SNS) topic,
          and pushed to an SQS queue respectively for triage.
        </p>
      </Section>
      <Section>
        <p>
          Implementing the newsletter was simple enough, and I did a lot of
          trial and error to get it right. I initally hard-coded the template
          into the lambda function, but I just refactored to read from an HTML
          file instead. This will allow easier development. Finally, I still
          need to figure out a way to automatically process bounces and
          complaints.
        </p>
      </Section>
      <Section>
        <p>
          <a
            href="https://github.com/hwilloug/hannah-blog/blob/main/backend/lambdas/send_new_article_email/send_new_article_email.py"
            target="_blank"
          >
            Click here
          </a>{" "}
          for the source code for the send email lambda, and{" "}
          <a
            href="https://github.com/hwilloug/hannah-blog/blob/main/terraform/modules/sqs_sns/main.tf"
            target="_blank"
          >
            click here
          </a>{" "}
          for the infrastructure in terraform.
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
    </ArticleContentContainer>
  );
};

export default AddingANewsletter;
