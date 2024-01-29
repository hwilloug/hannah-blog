import styled from "@emotion/styled";
import { ReactElement } from "react";


const CategoryContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
    text-transform: capitalize;
    flex-wrap: wrap;
`

const Category = styled.div`
    color: white;
    background-color: grey;
    border-radius: 15px;
    padding: 5px 10px;
`

const Subcategory = styled(Category)`
    color: black;
    background-color: lightgrey;
`

interface CategoriesProps {
    category: string
    subcategories: string[]
}

const Categories: React.FunctionComponent<CategoriesProps> = ({category, subcategories}): ReactElement => {
    return (
        <CategoryContainer>
            <Category>{category}</Category>
            {subcategories.map((subcategory) => <Subcategory key={subcategory}>{subcategory}</Subcategory>)}
        </CategoryContainer>
    )
}

export default Categories