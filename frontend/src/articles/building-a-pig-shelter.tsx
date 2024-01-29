import { ReactElement } from "react";
import { ArticleContentContainer, FullSizeImage, Section, SectionHeader } from "../components/StyledComponents";

const Garden2023Plan: React.FunctionComponent = (): ReactElement => {
    return (
        <ArticleContentContainer>
            <Section>
                <p>My dad and I built a pig shelter! This was my first time building a "building" from the ground up, and I couldn't be more pleased. My future piggies are going to have a luxurious life!</p>
            </Section>
            <Section>
                <FullSizeImage src={`${process.env.REACT_APP_IMAGES_BASE_URL}/pig_shelter_2.png`} />
                <p>The finished base</p>
            </Section>
            <Section>
                <FullSizeImage src={`${process.env.REACT_APP_IMAGES_BASE_URL}/pig_shelter_4.png`} />
                <p>The frame in progress</p>
            </Section>
            <Section>
                <FullSizeImage src={`${process.env.REACT_APP_IMAGES_BASE_URL}/pig_shelter_5.png`} />
                <p>The finished frame</p>
            </Section>
            <Section>
                <p>At this point, I stained the entire frame so that it would be waterproof.</p>
            </Section>
            <Section>
                MORE TO COME
            </Section>
        </ArticleContentContainer>
    )
}

export default Garden2023Plan
