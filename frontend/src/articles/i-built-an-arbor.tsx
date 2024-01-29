import { ReactElement } from "react";
import { ArticleContentContainer, FullSizeImage, Section, SectionHeader } from "../components/StyledComponents";

const Arbor: React.FunctionComponent = (): ReactElement => {
    return (
        <ArticleContentContainer>
            <Section>
                <p>

                </p>
            </Section>
            <Section>
                <FullSizeImage src={`${process.env.REACT_APP_IMAGES_BASE_URL}/arbor_3.png`} />
                <p>
                </p>
            </Section>
            <Section>
                <FullSizeImage src={`${process.env.REACT_APP_IMAGES_BASE_URL}/arbor_1.png`} />
                <p>
                </p>
            </Section>
            <Section>
                <FullSizeImage src={`${process.env.REACT_APP_IMAGES_BASE_URL}/arbor_2.png`} />
                <p>
                </p>
            </Section>
            <Section>
                <SectionHeader>Resources</SectionHeader>
                <ul>
                    <li><a href="https://www.woodshopdiaries.com/how-to-build-a-garden-arbor/" target="_blank">How to Build a Garden Arbor</a></li>
                </ul>
            </Section>
        </ArticleContentContainer>
    )
}

export default Arbor
