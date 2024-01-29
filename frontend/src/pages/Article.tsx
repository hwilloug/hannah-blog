import styled from "@emotion/styled";
import { ReactElement, useMemo, useState } from "react";
import { useParams } from "react-router-dom";


const ArticlePageContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`

export const ArticleContainer = styled.div``

const Article: React.FunctionComponent = (): ReactElement => {
    let { articleSlug } = useParams()

    const [loadedArticle, setLoadedArticle] = useState<ReactElement | null>(null);

    useMemo(() => {
        const lazyLoadArticle = async () => {
            try {
                const articleComponent = await import(/* webpackMode: "lazy-once" */ `../articles/${articleSlug}`)
                setLoadedArticle(articleComponent.default)
            } catch (error) {
                console.error('Error loading article component:', error)
            }
        };

        lazyLoadArticle()
    }, [articleSlug]);

    return (
        <ArticlePageContainer>
            <ArticleContainer>
                {loadedArticle}
            </ArticleContainer>
        </ArticlePageContainer>
    )
}

export default Article