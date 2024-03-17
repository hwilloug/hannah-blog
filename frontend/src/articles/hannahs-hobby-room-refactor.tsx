import { useTheme } from "@mui/material";
import { ReactElement } from "react";
import {
  ArticleContentContainer,
  FullSizeImage,
  Section,
  SectionHeader,
} from "../components/StyledComponents";

const Refactor: React.FunctionComponent = (): ReactElement => {
  const theme = useTheme();

  return (
    <ArticleContentContainer>
      <Section>
        <p>I've completely refactored Hannah's Hobby Room! Now the site has:</p>
        <ul>
          <li>Frontend written in React.js rather than Vue.js</li>
          <li>Infrastructure is defined as code via Terraform</li>
          <li>Amazon Aurora Postgres database rather than DynamoDB</li>
          <li>Images stored in S3 and optimized for web</li>
        </ul>
      </Section>
      <Section>
        <SectionHeader>Architecture</SectionHeader>
        <FullSizeImage
          src={`${process.env.REACT_APP_IMAGES_BASE_URL}/architecture_diagram.jpeg`}
          alt="AWS architecture diagram. S3 React App with Lambda API"
        />
        <p>
          The architecture for the site is simple and serverless. The frontend
          lives in an S3 bucket and is served via Cloudfront, and it gets data
          from the RDS database via API Gateway endpoints.
        </p>
      </Section>
      <Section>
        <SectionHeader>React Refactor</SectionHeader>
        <p>
          The refactoring to React.js was quite simple. I use React every day
          for work, so it was just a matter of quickly translating components
          from Vue, and I didn't run into any major issues. For complex
          components, I used{" "}
          <a href="https://mui.com/" target="_blank">
            Material UI
          </a>
          .
        </p>
        <p>
          I learned a lot from doing the refactor as well. First of all, I
          learned about defining common layouts for routes in react-router-dom
          using the{" "}
          <a
            href="https://reactrouter.com/en/main/components/outlet"
            target="_blank"
          >
            Outlet
          </a>{" "}
          component. This component "allows a parent element to render its child
          elements," allowing me to create a layout component for keeping the
          navigation bar, footer, aside, and body content the same across all
          pages without having to duplicate code.
        </p>
        <p>
          I also learned about data loaders in react-router-dom. These data
          loaders are used along with the Suspense and Await components to make
          an API request before page render. This makes the data fetch mutch
          more efficient!{" "}
          <a
            href="https://reactrouter.com/en/main/guides/deferred"
            target="_blank"
          >
            Click here
          </a>{" "}
          for official documentation on deferred data.
        </p>
        <p>
          And here are some notes on what I would do differently in the future:
        </p>
        <ul>
          <li>
            Be consistent on using MUI styled components rather than emotion's
            styled components. That way, I can use easy callbacks for getting
            theme and breakpoint information rather than having to provide them
            as inputs to a component. Now I'm having to go back and do extra
            work to make everything consistent.
          </li>
          <li>
            Implement responsivity as I go: mobile views and breakpoints were
            tricky to go back and add. I'm still not quite happy with what I
            have, probably because I was trying to fix a lot of smalll details
            at once rather than slowly as I went.
          </li>
        </ul>
        <p>
          Check out the implementation{" "}
          <a
            href="https://github.com/hwilloug/hannah-blog/tree/main/frontend"
            target="_blank"
          >
            here
          </a>
          .
        </p>
      </Section>
      <Section>
        <SectionHeader>Infrastructure in Terraform</SectionHeader>
        <p>
          Infrastructure as code is always the answer, lol. When I originally
          wrote the app, I wasn't even aware that terraform existed, let alone
          that infrastructure could be defined as code. So, I defined all my new
          resources in this way. I wasn't worried about down-time or the site
          just being broken since I don't get much traffic, so I was able to
          switch over the resources quite easily. I used a lot of the terraform
          documentation as well as brute force to get stuff figured out.
        </p>
        <p>
          As for troubles that I had, there weren't any for the basic
          implementation.
        </p>
        <p>
          Check out the implementation{" "}
          <a
            href="https://github.com/hwilloug/hannah-blog/tree/main/terraform"
            target="_blank"
          >
            here
          </a>
          .
        </p>
      </Section>
      <Section>
        <SectionHeader>Aurora Postgres Database</SectionHeader>
        <p>
          The transition from DynamoDB to RDS caused me the most trouble. I have
          never worked with a Virtual Private Cloud (VPC) before, and I had a
          lot of issues with connecting to the database. Since I was new to
          VPCs, I assumed I was having trouble with the connection due to
          missing some configuration for either the public subnets or the VPC
          itself. I had added an Internet Gateway to the VPC, set all security
          groups to public, and made sure the database was available, but still
          could not get a connection.
        </p>
        <p>
          Turns out, I had defined the database incorrectly. I finally figured
          it out by manually creating a test database via the AWS console. Then,
          I matched my configuration in terraform to what options I had selected
          in the console. Since I was choosing to use a serverless database, I
          was creating a serverless cluster as well, but this was incorrect. I
          needed to create a provisioned Aurora cluster with a serverless
          postgres instance. Once I did this, I was able to connect!
        </p>
        <p>
          Check out the final result{" "}
          <a
            href="https://github.com/hwilloug/hannah-blog/blob/245d3527c0b48dec5bd9edcb1295b254f1e8bd16/terraform/modules/rds/main.tf#L81"
            target="_blank"
          >
            here
          </a>
          !
        </p>
      </Section>
      <Section>
        <SectionHeader>Image Optimization</SectionHeader>
        <p>
          I was looking into search engine optimization (SEO), and the biggest
          red flag on the crawl was that my page sizes were too large. Most of
          the size was coming from the images, so I looked into how to optimize
          images for a website. Apparently, JPEGs are much smaller in size than
          PNGs, so in general they should be used (except for transparent
          images!). So, I converted all the images on the site to JPEGs, and
          threw a Cloudfront distribution in front of the images S3 bucket in
          order to provide cacheing. Now the page and the images load much, much
          faster!
        </p>
        <p>
          <a
            href="https://wpengine.com/resources/optimize-images-for-web/"
            target="_blank"
          >
            Here
          </a>{" "}
          is the article I referenced for how to optimize images for the web.
        </p>
      </Section>
      <Section>
        <SectionHeader>Conclusion</SectionHeader>
        <p>
          And with that, we are up and running again, even better than before!
          Now I'll have a much easier time adding new articles and keeping the
          site maintained. See you in my next post, and happy hobbying!
        </p>
      </Section>
    </ArticleContentContainer>
  );
};

export default Refactor;
