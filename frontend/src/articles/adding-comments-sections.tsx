import {
  ArticleContentContainer,
  FullSizeImage,
  Section,
  SectionHeader,
} from "../components/StyledComponents";

const CommentsSection: React.FunctionComponent = () => {
  return (
    <ArticleContentContainer>
      <Section>
        <SectionHeader>Introducing Comments</SectionHeader>
        <p>
          Exciting news! You can now join the conversation on my blog by leaving
          comments on posts. Simply create an account, log in, and start sharing
          your thoughts.
        </p>
      </Section>
      <Section>
        <p>
          ChatGPT insisted that engaging with your readership is a crucial
          aspect of running a successful blog. So, I decided to incorporate a
          comments section where readers can share thoughts and feedback on my
          posts! In this article, we'll delve into the technical process of
          adding a comments feature to your React App with Auth0, as well as
          discuss some of the challenges I encountered along the way.
        </p>
      </Section>
      <Section>
        <SectionHeader>Technical Implementation</SectionHeader>
        <p>
          Let's walk through the steps involved in integrating a comments
          section into a React App blog using Auth0 and AWS Lambda and RDS:
        </p>
        <ol>
          <li>
            <b>Authentication with Auth0</b>: To manage user authentication, I
            levereged Auth0 by setting up an application in the Auth0 UI and
            followed their quick start guide for React for a seamless
            integration with our website.
          </li>
          <li>
            <b>Attach Username to Identity Token</b>: The username of the logged
            in user is not accessible via the React hook, so I added an action
            that does this. This way, when the user posts a comment, their
            username can be associated with the post and can be displayed in the
            blog's UI.
          </li>
          <li>
            <b>Database Setup</b>: A crucial component of the commenting system
            is a database to store comments. I established a comments table
            within my RDS database to securely manage this data.
          </li>
          <li>
            <b>Lambda Function for Comment Posting</b>: I developed an AWS
            Lambda function responsible for handling new comments. This function
            ensures the user comments are stored securely in the database.
          </li>
          <li>
            <b>Endpoint update</b>: I enhanced the endpoint for getting a
            specific article to also include the comments associated with the
            post. This enables the users to view the comments on a post when
            they open it.
          </li>
          <li>
            <b>Frontend Integration</b>: Adding the frontend code was the final
            step. By implementing the frontend components, we enabled users to
            submit comments directly from the blog's interface. This involves
            making API calls to the Lambda function to post comments seamlessly.
          </li>
        </ol>
        <p>
          Below is the updated architecture diagram for the site:
          <FullSizeImage
            src={`${process.env.REACT_APP_IMAGES_BASE_URL}/architecture_diagram_3.jpeg`}
            alt="AWS Architecture diagram with email newsletter"
          />
        </p>
      </Section>
      <Section>
        <SectionHeader>Overcoming Challenges</SectionHeader>
        <p>
          While adding comments functionality, I encountered one notable
          challenge: displaying the user information, such as username or first
          and last name, alongside the comments. The username is not included on
          the user object from the useAuth0 hook, and Auth0's new Universal
          Login does not allow for additional signup fields such as first and
          last name, complicating the process of associating user identities
          with the comments.
        </p>
        <p>
          To address this, I implemented the solution of customizing the user
          identity token to include the username. First, by requiring a username
          during signups and using Auth0 Actions to include this information in
          the identity token, which is accessable from the getIdTokenClaims()
          function within the useAuth0 hook. Then, I was able to pass in the
          username to the API call to post the comment, and it worked!
        </p>
      </Section>
      <Section>
        <SectionHeader>Conclusion</SectionHeader>
        <p>
          Integrating a comments section enhances user engagement and fosters a
          sense of community around your blog. By following the outlined steps
          and addressing challenges effectively, you can successfully implement
          this feature and encourage meaningful interactions among your readers.
          I can't wait to engage with you all!
        </p>
      </Section>
    </ArticleContentContainer>
  );
};

export default CommentsSection;
