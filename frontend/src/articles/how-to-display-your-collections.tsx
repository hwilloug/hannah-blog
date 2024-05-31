import { ArticleContentContainer, Section, SectionHeader } from "../components/StyledComponents"

const DisplayingCollections: React.FC = () => {
  return (
    <ArticleContentContainer>
      <Section>
        Introduction
      </Section>
      <Section>
        <SectionHeader></SectionHeader>
        <ul>
          <li>Displaying Everything Together</li>
        </ul>
      </Section>
    </ArticleContentContainer>
  )
}

export default DisplayingCollections