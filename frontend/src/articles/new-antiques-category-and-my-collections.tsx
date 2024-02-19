import {
  ArticleContentContainer,
  Section,
  SectionHeader,
} from "../components/StyledComponents";

const PoppylandAntiques: React.FunctionComponent = () => {
  return (
    <ArticleContentContainer>
      <Section>
        <p>
          I decided to switch over the "languages" category to "antiques" since
          I haven't been learning Japanese very much these past couple years,
          and I'm not sure I will ever get consistently back into it. However, I
          have a deep love for antiquing, and want to share that with you all,
          so I picked that for the last article category!
        </p>
      </Section>
      <Section>
        <p>I currently have a lot of collections going:</p>
        <ul>
          <li>Vintage Lamps</li>
          <li>Unique Clocks</li>
          <li>Corning Ware (certain patterns)</li>
          <li>Corelle (certain patterns)</li>
          <li>Fire King (certain patterns)</li>
          <li>Pyrex (certain patterns)</li>
          <li>Floral wall art</li>
          <li>Anything duck</li>
          <li>Anything strawberry</li>
          <li>Needlepoint art</li>
          <li>Gnomes (with a face preferred)</li>
        </ul>
      </Section>
      <Section>
        <SectionHeader>Antiques Catalog</SectionHeader>
        <p>
          I made a catalog for my antique bakeware and dinnerware collection!
          Check it out{" "}
          <a href="https://antiques.poppyland.dev" target="_blank">
            here
          </a>
          !
        </p>
        <p>
          The site is pure HTML and CSS, and is served as a static GitHub page
          through AWS Cloudfront. The images are served from their own S3 bucket
          fronted by Cloudfront for caching.
        </p>
        <p>
          I'll probably expand the site at some point to include sections for
          all of my collections, but for now, just the bakeware and dinnerware
          are cataloged.
        </p>
      </Section>
      <Section>
        <p>
          I'm in Mississippi this week doing a ton of antiquing, so expect a
          haul article soon!
        </p>
      </Section>
    </ArticleContentContainer>
  );
};

export default PoppylandAntiques;
