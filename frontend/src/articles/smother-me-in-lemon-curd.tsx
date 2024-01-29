import { ReactElement } from "react";
import { ArticleContentContainer, FullSizeImage, Section } from "../components/StyledComponents";

const Curtains: React.FunctionComponent = (): ReactElement => {
    return (
        <ArticleContentContainer>
            <Section>
                <FullSizeImage src="https://blog-images.poppyland.dev/lemon_curd.gif" />
                <ul>
                    <li>Meringue: Use those egg whites</li>
                    <ul>
                        <li>Meringue cookies</li>
                        <li>Pavlova</li>
                        <li>Mini Pavlova Cookies</li>
                    </ul>
                </ul>
            </Section>
        </ArticleContentContainer>
    )
}

export default Curtains
