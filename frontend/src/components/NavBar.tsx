import styled from "@emotion/styled";
import { ReactElement } from "react";
import Navigation, { NavigationItem } from "./Navigation";
import { mdiMagnify } from '@mdi/js';
import Icon from "@mdi/react";
import { mdiHelpCircleOutline } from '@mdi/js';
import { Link } from "react-router-dom";


const NavBarContainer = styled.div`
    display: flex;
    flex-direction: row;
    padding: 20px;
    gap: 20px;
    background-color: grey;
`

const Title = styled.span`
    font-size: 24px;
    color: white;
`

const HomeLink = styled(Link)`
    text-decoration: none;
`

const NavBar: React.FunctionComponent = (): ReactElement => {
    return (
        <NavBarContainer>
            <HomeLink to="/"><Title>Poppyland Blog</Title></HomeLink>
            <Navigation />
            <NavigationItem><Icon path={mdiMagnify} size={1} /></NavigationItem>
            <NavigationItem><Icon path={mdiHelpCircleOutline} size={1} /></NavigationItem>
        </NavBarContainer>
    )
}

export default NavBar