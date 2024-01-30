import styled from "@emotion/styled";
import { ReactElement } from "react";


const Quote = styled.blockquote`
    border-left: 2px solid grey;
    padding-left: 5px;
`

const Citation = styled.p`
    text-align: right;
`

interface BlockQuoteProps {
    quote: string
    citation: string
}

const BlockQuote: React.FunctionComponent<BlockQuoteProps> = ({quote, citation}): ReactElement => {
    return (
        <div>
            <Quote>{quote}</Quote>
            <Citation><cite>- {citation}</cite></Citation>
        </div>
    )
}

export default BlockQuote