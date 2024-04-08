import {
  ArticleContentContainer,
  Section,
  SectionHeader,
} from "../components/StyledComponents";

const EmailPreferences: React.FC = () => {
  return (
    <ArticleContentContainer>
      <Section>
        <p>
          I've sucessfully added email preferences! You can now choose to
          receive newsletters for certain categories. All you have to do is
          click the "Preferences" link from the newsletter email, and you can
          toggle which categories you want to receive new article emails for~
        </p>
      </Section>
      <Section>
        <SectionHeader>Techincal Implementation</SectionHeader>
        <p>To add email preferences, I completed the following steps:</p>
        <ol>
          <li>
            Run a migration to add category preferences to the newsletter table
            that stores emails
          </li>
          <li>
            Add lambdas to retreive and update email preferences for a user
          </li>
          <li>Add endpoints to API Gateway integrated with the new lambdas</li>
          <li>Make new preferences page in UI</li>
          <li>
            Utilize new endpoints to allow users to toggle their email
            preferences
          </li>
          <li>Add link to new preferences page in newsletter email template</li>
          <li>
            Update send newsletter email lambda to respect user preferences
          </li>
        </ol>
      </Section>
    </ArticleContentContainer>
  );
};

export default EmailPreferences;
